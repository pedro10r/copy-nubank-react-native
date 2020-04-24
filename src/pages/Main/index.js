import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tab from '~/components/Tab';
import Menu from '~/components/menu';

import {
  Container, Content, Card, CardHeader, CardContent, CardFooter, Title,
  Description, Annotation, View, Text, ViewLimit, ViewStyle
} from './styles';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChange(event) {
    let opened = false;
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 410 : 1,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 410 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 410],
                outputRange: [-50, 0, 410],
                extrapolate: 'clamp',
              }),
            }],
          }}>
            <CardHeader style={{ borderRightWidth: 7, borderTopRightRadius: 4, borderRightColor: '#FFAC00' }}>
              <Icon name='payment' size={32} color='#666666' />
              <View>
                <Text style={{ right: -15, color: '#999999', fontSize: 15 }}>Cartão de credito</Text>
              </View>
            </CardHeader>

            <CardContent style={{
              borderRightWidth: 7, borderRightColor: '#a2d226'
            }}>
              <Title>FATURA ATUAL</Title>
              <ViewStyle>
                <Description>R$ </Description>
                <Description style={{ fontWeight: 'bold' }}>983</Description>
                <Description>,27</Description>
              </ViewStyle>
              <ViewLimit>
                <Text style={{}}>Limite disponível </Text>
                <Text style={{ color: '#a2d226', fontWeight: 'bold' }}>R$ 2.596,65</Text>
              </ViewLimit>
            </CardContent>

            <CardFooter>
              <Icon name='local-taxi' size={32} color='#666666' />
              <View>
                <Annotation style={{ right: -10 }}>
                  Compra mais recente em cartão Nubank
                  *Uber no valor de R$ 12,75 Segunda*
                  </Annotation>
              </View>
              <Icon name='chevron-right' size={32} color='#999999' />
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tab translateY={translateY} />
    </Container >
  );
}
