import * as React from 'react';
import { Appbar } from 'react-native-paper';

const MyAppbar = ({ back, navigation }) => (
  <Appbar.Header>
    {back ? (
      <Appbar.BackAction onPress={() => navigation.goBack()} />
    ) : null}
    
    <Appbar.Content title="Material Design Nav Demo" />
    
    {!back ? (
      <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('SecondScreen')} />
    ) : null}
  </Appbar.Header>
);

export default MyAppbar;
