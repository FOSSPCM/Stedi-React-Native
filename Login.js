import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";

const send_text = async (placeholder) => {
    //console.log("Phone Number: ", placeholder);
    await fetch("https://dev.stedi.me/twofactorlogin/" + placeholder, {
      method: "POST",
      headers: { "content-type":"application/text" }
    });
}

const get_token = async (phone_number, otp) => {
  const token_response = await fetch("https://dev.stedi.me/twofactorlogin/",{
    method: "POST", 
    body:JSON.stringify({otp, phone_number}),
    headers: { "content-type":"application/json" }
  });
  const token_response_string = await token_response.text();
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
        placeholder="#-###-###-####"
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

      <TouchableOpacity style={styles.button} onPress={() => {
        let a = get_token(phone_number, otp)
        console.log("Received Token.\n", a)
        }}>
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