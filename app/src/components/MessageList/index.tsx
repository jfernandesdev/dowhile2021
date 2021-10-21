import React from 'react';
import { ScrollView } from 'react-native';

import { Message } from '../Message';

import { styles } from './styles';

export function MessageList(){
  const message = {
    id: '1',
    text: 'Eu sou uma mensagem de teste',
    user: {
      name: 'Fulano de Tal',
      avatar_url: 'https://uifaces.co/our-content/donated/VxDQx_gA.jpg',
    }
  }

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps= "never"
    >
      <Message data={message}/>
      <Message data={message}/>
      <Message data={message}/>
      
    </ScrollView>
  );
}