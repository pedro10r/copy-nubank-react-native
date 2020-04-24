import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #83259f;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #FFFFFF;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  padding: 20px;
  align-items: center;
`;

export const View = styled.View``;

export const Text = styled.Text`
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #02b6cf;
  font-weight: bold;
`;

export const ViewStyle = styled.View`
  flex-direction: row;
`;

export const Description = styled.Text`
  font-size: 40px;
  color: #02b6cf;
`;

export const ViewLimit = styled.View`
  flex-direction: row;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 50px;
  justify-content: center;
  background: #F2F2F2;
  border-radius: 4px;
`;

export const Annotation = styled.Text`
  color: #999999;

`;

