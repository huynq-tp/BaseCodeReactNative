/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Text } from 'react-native';

export default class Test extends React.Component {
  render() {
    return (
      <Text style={{
        fontSize: 30,
        fontFamily: 'DancingScript'
      }}
      >
        Chillout With Me
      </Text>
    );
  }
}
