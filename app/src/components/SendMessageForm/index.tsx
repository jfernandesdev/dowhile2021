import React , {useState} from 'react';
import { View, TextInput } from 'react-native';
import { Button } from '../Button';

import { COLORS } from '../../theme';
import { styles } from './styles';

export function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput 
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        style={styles.input}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
      />
      <Button 
        title='Enviar mensagem'
        backgroundColor={COLORS.PINK}
        color= {COLORS.WHITE}
      />
    </View>
  );
}