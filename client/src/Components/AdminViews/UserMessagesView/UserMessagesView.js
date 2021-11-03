import React, {useEffect, useState} from "react";
import {Accordion} from "react-bootstrap";
import MessagesAccordion from "../../Accordions/MessagesAccordion/MessagesAccordion";
import AdminDataTimeframeNav from "../../Navs/AdminDataTimeframeNav/AdminDataTimeframeNav";

const UserMessagesView = (props) => {
    const [unreadMessages, setUnreadMessages] = useState([])
    const [repliedMessages, setRepliedMessages] = useState([])
    const [archivedMessages, setArchivedMessages] = useState([])

    const today = new Date().toLocaleDateString('en-GB')
    const [startDate, setStartDate] = useState(today)
    const [endDate, setEndDate] = useState(today)

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
                const indexedMessages = indexMessagesByID(data)
                const _unreadMessages = []
                const _repliedMessages = []
                const _archivedMessages = []
                indexedMessages.forEach(message => {
                    if (message.seenByAdmin === 0){
                        _unreadMessages[message.id] = message
                    } else if (message.replySent === 1 && message.toDelete === 0){
                        _repliedMessages[message.id] = message
                    } else if (message.toDelete === 1){
                        _archivedMessages[message.id] = message
                    }
                })
                setUnreadMessages(_unreadMessages)
                setRepliedMessages(_repliedMessages)
                setArchivedMessages(_archivedMessages)
            }).catch(error => error)
    }

    useEffect(() => {
       getMessages()
    }, [startDate, endDate])

    const dataTimeframeProps = {startDate: startDate, setStartDate: setStartDate, endDate: endDate, setEndDate: setEndDate}
    return (
        <section className={props.activeView === 'messages' ? '' : 'd-none'}>
            <AdminDataTimeframeNav {...dataTimeframeProps} />
            <Accordion>
                <MessagesAccordion
                    eventKey={0}
                    messages={unreadMessages}
                    messageGroup="New"
                    getMessages={getMessages} />
                <MessagesAccordion
                    eventKey={-1}
                    messages={repliedMessages}
                    messageGroup="Replied"
                    getMessages={getMessages} />
                <MessagesAccordion
                    eventKey={-2}
                    messages={archivedMessages}
                    messageGroup="Archived"
                    getMessages={getMessages} />
            </Accordion>
        </section>
    )
}

export default UserMessagesView