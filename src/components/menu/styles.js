import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

export const Code = styled.View`
  background: #FFFFFF;
  padding: 10px;
  align-self: center;
`;

export const Logo = styled.Image`

`;

export const Nav = styled.View`
margin-top: 15px;
border-top-width: ${StyleSheet.hairlineWidth}px;
border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
  justify-content: space-between;

`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #FFFFFF;
`;

export const SignOutButtom = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
  margin-bottom: 5px;
  `;

export const SignOutButtomText = styled.Text`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 13px;
  `;

export const Text = styled.Text`
  font-weight: bold;
  align-self: center;
  font-size: 12px;
  color: #FFFFFF;
  padding-top: 5px;
`;

export const View = styled.View`

`;


