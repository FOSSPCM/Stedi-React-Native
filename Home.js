import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//import { Card, Button } from 'react-native-elements';
import Icons from './Icons.js';
import Bar  from './Bar.js';
// import { useLinkProps } from '@react-navigation/native';

const Home = (props) => {
  return (
    <View>
      {/*<Bar loggedInUser="user"/>*/}
      <Bar loggedInUser = {props.loggedInUser}/>
      <Icons />
    </View>
  );
};

export default Home;
