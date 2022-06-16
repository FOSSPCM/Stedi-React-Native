import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";

const send_text = async (placeholder) => {
    //console.log("Phone Number: ", placeholder);
    await fetch("https://dev.stedi.me/twofactorlogin/" + placeholder, {
      method: "POST",
      headers: { "content-type":"application/text" }
    });
}

const Login = () => {
  const [phone_number, set_number] = useState("");
  const [otp, set_otp] = useState(null);
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <SafeAreaView style={styles.margin}>
      <Text style={styles.text}>Phone Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={set_number}
        value={phone_number}
        placeholderTextColor="lightskyblue"
        placeholder="1-800-677-8257"  // 1-800-MS-SUCKS Don't know if this number actually works, don't really care.
        color="midnightblue"
        keyboardType="numeric"
      />
      <Text style={styles.text}>One-Time Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={set_otp}
        value={otp}
        placeholder="0000"
        placeholderTextColor="lightskyblue"
        color="midnightblue"
        keyboardType="numeric"
        secureTextEntry={true}
      />

      
      <TouchableOpacity style={styles.button} onPress={() => {send_text(phone_number)}}>
        <Text>Send Text</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => console.log("Submit button was pressed.")}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  a_margin: {
    marginTop: 100
  },
  text: {
    marginTop: 5,
    marginLeft: 12
  },
  //BUTTON
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "aliceblue",
    margin: 3,
    padding: 16,
    borderColor: "cornflowerblue",
    borderRadius: 8,
    borderWidth: 2,
    width: 196
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default Login;