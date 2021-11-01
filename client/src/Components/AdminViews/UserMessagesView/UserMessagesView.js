import React, {useEffect, useState} from "react";
import {Accordion, Nav, Navbar} from "react-bootstrap";
import MessagesAccordion from "../../Accordions/MessagesAccordion/MessagesAccordion";
import AdminDataTimeframeNav from "../../Navs/AdminDataTimeframeNav/AdminDataTimeframeNav";

const UserMessagesView = (props) => {
    const [allMessages, setAllMessages] = useState([])
    const [unreadMessages, setUnreadMessages] = useState([])
    const [readMessages, setReadMessages] = useState([])
    const [repliedMessages, setRepliedMessages] = useState([])
    const [archivedMessages, setArchivedMessages] = useState([])

    const [startDate, setStartDate] = useState('01/11/2021')
    const [endDate, setEndDate] = useState('01/11/2021')

    const indexMessagesByID = (messages) => {
        const indexedMessages = []
        messages.forEach(message => {
            indexedMessages[message.id] = message
        })
        return indexedMessages
    }

    const getMessages = () => {
        const url = 'http://localhost:3001/messages'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                startDate: startDate,
                endDate: endDate
            })
        }
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                setAllMessages(indexMessagesByID(data))
            })
            .catch(error => error)
    }

    useEffect(() => {
       getMessages()
    }, [startDate, endDate])
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
                    getMessages()
                }
            })
            .catch(error => error)
    }

    useEffect(() => {
        const _unreadMessages = []
        const _readMessages = []
        const _repliedMessages = []
        const _archivedMessages = []
        console.log(allMessages)
        allMessages.forEach(message => {
            if (message.seenByAdmin === 0){
                _unreadMessages[message.id] = message
            } else if (message.replySent === 0 && message.toDelete === 0){
                _readMessages[message.id] = message
            } else if (message.replySent === 1 && message.toDelete === 0){
                _repliedMessages[message.id] = message
            } else if (message.toDelete === 1){
                _archivedMessages[message.id] = message
            }
        })
        setUnreadMessages(_unreadMessages)
        setReadMessages(_readMessages)
        setRepliedMessages(_repliedMessages)
        setArchivedMessages(_archivedMessages)
    }, [allMessages])

    const dataTimeframeProps = {startDate: startDate, setStartDate: setStartDate, endDate: endDate, setEndDate: setEndDate}
    return (
        <section className={props.activeView === 'messages' ? '' : 'd-none'}>
            <AdminDataTimeframeNav {...dataTimeframeProps} />
            <Accordion>
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
                <MessagesAccordion
                    eventKey={-3}
                    messages={archivedMessages}
                    messageGroup="Archived Messages"
                    editMessageState={editMessageState}
                    editMessageButton="Delete"
                    stateToChange="to_delete"
                    newState={1} />
            </Accordion>
        </section>
    )
}

export default UserMessagesView