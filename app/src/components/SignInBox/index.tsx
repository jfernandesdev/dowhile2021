import React from 'react';
import { View } from 'react-native';
import { Button } from '../Button';

import { COLORS } from '../../theme';
import { styles } from './styles';

export function SignInBox() {
  return (
    <View style={styles.container}>
      <Button 
        title='Entrar com Github'
        icon='github'
        backgroundColor={COLORS.YELLOW}
        color= {COLORS.BLACK_PRIMARY}
      />
    </View>
  );
}