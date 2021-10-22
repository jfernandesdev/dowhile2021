import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { UserPhoto } from '../UserPhoto';
import LogoSvg from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';

import { styles } from './styles';

export function Header(){
  const { user, signOut } = useAuth();
  return (
    <View style={styles.container}>
      <LogoSvg />
      
      <View style={styles.logoutWrapper}>
        { user && 
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.logoutText}>
              Sair
            </Text>
          </TouchableOpacity>
        }
        

        <UserPhoto 
          imageUri={user?.avatar_url}
        />
      </View>
    </View>
  );
}