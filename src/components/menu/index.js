import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Code, Logo, Nav, NavItem, NavText, SignOutButtom,
  SignOutButtomText, View, Text
} from './styles';

import logo from '~/assets/qr-codepeq.png';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      }),
    }}
    >
      <Code>
        <Logo source={logo} />
      </Code>
      <View>
        <Text>Banco 260 - Nu Pagamentos S.A.</Text>
        <Text>Agencia 0001</Text>
        <Text>Conta 1934220-1</Text>
      </View>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFFFFF" />
          <NavText style={{ right: 90 }}>Me ajuda</NavText>
          <Icon name='chevron-right' size={20} color='#FFFFFF' />
        </NavItem>
        <NavItem>
          <Icon name="person" size={20} color="#FFFFFF" />
          <NavText style={{ right: 102 }}>Perfil</NavText>
          <Icon name='chevron-right' size={20} color='#FFFFFF' />
        </NavItem>
        <NavItem>
          <Icon name="monetization-on" size={20} color="#FFFFFF" />
          <NavText style={{ right: 57 }}>Configurar NuConta</NavText>
          <Icon name='chevron-right' size={20} color='#FFFFFF' />
        </NavItem>
        <NavItem>
          <Icon name="payment" size={20} color="#FFFFFF" />
          <NavText style={{ right: 62 }}>Configurar Cartão</NavText>
          <Icon name='chevron-right' size={20} color='#FFFFFF' />
        </NavItem>
        <NavItem>
          <Icon name="grade" size={20} color="#FFFFFF" />
          <NavText style={{ right: 36 }}>Participe da nossa Promo</NavText>
          <Icon name='chevron-right' size={20} color='#FFFFFF' />
        </NavItem>
        <NavItem>
          <Icon name="phone-iphone" size={20} color="#FFFFFF" />
          <NavText style={{ right: 50 }}>Configurações do app</NavText>
          <Icon name='chevron-right' size={20} color='#FFFFFF' />
        </NavItem>
      </Nav>

      <SignOutButtom onPress={() => { }}>
        <SignOutButtomText>SAIR DO APP</SignOutButtomText>
      </SignOutButtom>
    </Container>
  );
}
