import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
// Dispatcher
const socket = io.connect('http://localhost:5174'); // Establishes connection to the server, 
//indirectly related to the Dispatcher in Flux

interface ChatMessage {
  message: string;
  // Add additional properties here if your chat messages have more data
}
// View
// This React component serves as the View in the Flux architecture
const Chat: React.FC = () => {
    // State management here acts similarly to a Store in Flux, holding and managing state
    const [message, setMessage] = useState<string>('');
    const [chat, setChat] = useState<ChatMessage[]>([]);

    // Action

    // This function acts as an Action creator, dispatching an action (sending a chat message)
    const sendChat = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const chatMessage: ChatMessage = { message }; // Structure the message as needed
        socket.emit('chat', chatMessage); // Emitting an event here is similar to dispatching an action in Flux
        setChat((prevChat) => [...prevChat, chatMessage]); // Updating state based on the action, part of the Store's role
        setMessage(''); // Also part of the Store's role, managing state
    };

    // Store
    // Effect hook to listen for incoming chat messages, similar to how a Store listens for dispatched actions
    useEffect(() => {
        const receiveChat = (payload: ChatMessage) => {
            setChat((prevChat) => [...prevChat, payload]); // Handling state update, part of the Store's role
        };
        socket.on('chat', receiveChat); // Listening for events, analogous to a Store listening for actions in Flux
        return () => {
            socket.off('chat', receiveChat); // Cleanup mirrors removing a listener from a Store
        };
    }, []);
    // The render method here serves as the View, displaying the application's state to the user
    return (
        <div>
            <form onSubmit={sendChat}>
                <input
                    type="text"
                    name="chat"
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
            {chat.map((payload, index) => (
                <p key={index}>{payload.message}</p> // Displaying chat messages, part of the View's responsibility
            ))}
        </div>
    );
}

export default Chat;
