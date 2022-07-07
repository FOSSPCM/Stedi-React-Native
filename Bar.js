//import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import AppName from "./AppName";
import Setting from "./Setting";

function Bar(props) {
    return(
        <View style={styles.bar}>
            <AppName />
            <Setting loggedInUser={props.loggedInUser}/>  
        </View>
    )
}

export default Bar

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'flex-end',
        backgroundColor: 'green',
        height: '15%',
        alignItems: 'flex-begin',
        paddingBottom: 5,
        paddingLeft: 8,
        paddingRight: 8,
        
      },
})