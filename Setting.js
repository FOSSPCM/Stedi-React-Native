import React from "react";
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Setting(props) {
  var uname = props.loggedInUser;
  console.log(uname);
  if (uname == undefined) { uname = "Guest"; }
  return(
    <View>
      <Text style={styles.text}>Welcome, {uname}!</Text>
      <Button
        title="Log Out"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "white"
  }
});

export default Setting;