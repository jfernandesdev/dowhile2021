import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { api } from '../../services/api';

import { MESSAGES_EXAMPLE } from '../../utils/messages';

import logoImg from '../../assets/logo.svg';
import styles from './styles.module.scss';

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string ;
  };
}

const messagesQueue: Message[] = MESSAGES_EXAMPLE;

const socket = io('https://api-dowhile2021-jfernandesdev.herokuapp.com');

socket.on('new_message', (newMessage: Message) => {
  messagesQueue.push(newMessage);
})

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(()=>{
    setInterval(()=>{
      if(messagesQueue.length > 0){
        setMessages(prevState => [
          messagesQueue[0],
          prevState[0],
          prevState[1],
        ].filter(Boolean))

        messagesQueue.shift()
      }
    }, 3000)
  }, []);

  useEffect(()=>{
    api.get<Message[]>('messages/last3').then(response => {
      setMessages(response.data);
    })
  }, []);

  return(
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>

        {messages.map(message => (
          <li key={message.id} className={styles.message}>
            <p className={styles.messageContent}>
              {message.text}
            </p>

            <div className={styles.messageUser}>
              <div className={styles.userImage}>
                {(message.user.avatar_url) ? <img src={message.user.avatar_url} /> : '';}
              </div>
              <span>{message.user.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
