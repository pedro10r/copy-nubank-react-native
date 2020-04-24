import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TabsContainer, TabItem, TabText } from './styles';

export default function Tabs({ translateY }) {
  return (
    <Container style={{
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0, 250],
          outputRange: [1, 30],
          extrapolate: 'clamp',
        }),
      }],

      opacity: translateY.interpolate({
        inputRange: [0, 250],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      }),
    }}>
      <TabsContainer>
        <TabItem>
          <Icon name='person-add' size={24} color='#FFFFFF' />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name='phone-iphone' size={24} color='#FFFFFF' />
          <TabText>Recarga de celular</TabText>
        </TabItem>
        <TabItem>
          <Icon name='question-answer' size={24} color='#FFFFFF' />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name='arrow-upward' size={24} color='#FFFFFF' />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name='arrow-downward' size={24} color='#FFFFFF' />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name='tune' size={24} color='#FFFFFF' />
          <TabText>Ajustar limite</TabText>
        </TabItem>
        <TabItem>
          <Icon name='help-outline' size={24} color='#FFFFFF' />
          <TabText>Me ajuda</TabText>
        </TabItem>
        <TabItem>
          <Icon name='monetization-on' size={24} color='#FFFFFF' />
          <TabText>Pagar</TabText>
        </TabItem>
        <TabItem>
          <Icon name='https' size={24} color='#FFFFFF' />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
        <TabItem>
          <Icon name='payment' size={24} color='#FFFFFF' />
          <TabText>Cartão virtual</TabText>
        </TabItem>
        <TabItem style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
          <Icon name='subject' size={24} color='#FFFFFF' />
          <TabText>Organizar atalhos</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
