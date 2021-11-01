import React, {useEffect, useState} from "react";
import {Accordion} from "react-bootstrap";
import MessagesAccordion from "../../Accordions/MessagesAccordion/MessagesAccordion";

const UserMessagesView = (props) => {
    const [allMessages, setAllMessages] = useState([])
    const [unreadMessages, setUnreadMessages] = useState([])
    const [readMessages, setReadMessages] = useState([])
    const [repliedMessages, setRepliedMessages] = useState([])
    const [archivedMessages, setArchivedMessages] = useState([])

    const indexMessagesByID = (messages) => {
        const indexedMessages = []
        messages.forEach(message => {
            indexedMessages[message.id] = message
        })
        return indexedMessages
    }

    const getAllMessages = () => {
        const url = 'http://localhost:3001/messages'
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                setAllMessages(indexMessagesByID(data))
            })
            .catch(error => error)
    }

    useEffect(() => {
       getAllMessages()
    }, [])
//
    const editMessageState = (messageID, stateToChange, newState) => {
        const url = 'http://localhost:3001/edit-message-state'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                messageID: messageID,
                stateToChange: stateToChange,
                newState: newState
            })
        }
        fetch(url, requestOptions)
            .then(response => {
                if (response.status === 200){
                    getAllMessages()
                }
            })
            .catch(error => error)
    }
//
    useEffect(() => {
        const _unreadMessages = []
        const _readMessages = []
        const _repliedMessages = []
        const _archivedMessages = []
        allMessages.forEach(message => {
            if (message.seenByAdmin === 0){
                _unreadMessages[message.id] = message
            } else if (message.replySent === 0 && message.toDelete === 0){
                _readMessages[message.id] = message
            } else if (message.replySent === 1){
                _repliedMessages[message.id] = message
            } else {
                _archivedMessages[message.id] = message
            }
        })
        setUnreadMessages(_unreadMessages)
        setReadMessages(_readMessages)
        setRepliedMessages(_repliedMessages)
        setArchivedMessages(_archivedMessages)
    }, [allMessages])


    return (
        <Accordion className={props.activeView === 'messages' ? '' : 'd-none'}>
            <MessagesAccordion
                eventKey={0}
                messages={unreadMessages}
                messageGroup="Unread Messages"
                editMessageState={editMessageState}
                editMessageButton="Mark as Read"
                stateToChange="seen_by_admin"
                newState={1} />
            <MessagesAccordion
                eventKey={-1}
                messages={readMessages}
                messageGroup="Read Messages"
                editMessageState={editMessageState}
                editMessageButton="Mark as Replied"
                stateToChange="reply_sent"
                newState={1} />
            <MessagesAccordion
                eventKey={-2}
                messages={repliedMessages}
                messageGroup="Replied Messages"
                editMessageState={editMessageState}
                editMessageButton="Mark as Archived"
                stateToChange="to_delete"
                newState={1} />
        </Accordion>
    )
}

export default UserMessagesView