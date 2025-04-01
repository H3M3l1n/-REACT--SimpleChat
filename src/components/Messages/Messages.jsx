import { useContext, useEffect, useRef } from 'react';
import { HomeContext } from '../../pages/Home';
import Message from '../Message/Message';
import './messages.sass';

const Messages = () => {
    const { messages } = useContext(HomeContext);
    const scrollableDiv = useRef(null);

    useEffect(() => {
        const container = scrollableDiv.current;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, [messages]);

    return (
        <div id="messages" className="messages" ref={scrollableDiv}>
            {messages.map((message) => (
                <Message message={message} key={message.id}></Message>
            ))}
        </div>
    );
};

export default Messages;
