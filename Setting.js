import React from "react";
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Setting(props) {
  var uname = props.loggedInUser;
  if (uname == undefined) { uname = "Guest"; }
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {uname}!</Text>
      <Button
        title="Log Out"
        onPress={() => Alert.alert("Logging Out doesn't work yet")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "white"
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  }
});

export default Setting;