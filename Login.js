import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";

/*This is where we extract the email address. */
var uname = "";
export function set_uname(s) { uname = s; }
export function get_uname() { return uname; }

/* This is the function that will send a text message containing the one-time password. */
const send_text = async (placeholder) => {
    await fetch("https://dev.stedi.me/twofactorlogin/" + placeholder, {
      method: "POST",
      headers: { "content-type":"application/text" }
    });
}

/* This function grabs the token used to log in from the server. */
const get_token = async ({phone_number, otp, set_user_logged_on,}) => {
  //set_user_logged_on(true)  // THIS IS FOR TESTING PURPOSES ONLY. REMOVE OR COMMENT THIS LINE OUT FOR ACTUAL USE.
  const token_response = await fetch("https://dev.stedi.me/twofactorlogin",{
    method: "POST", 
    body:JSON.stringify({oneTimePassword:otp, phoneNumber:phone_number}),
    headers: { "content-type":"application/json" }
  });
  
  const response_code = token_response.status;  //200 means logged in successfully.
  console.log("Response Status Code: ", response_code);

  const token_response_string = await token_response.text();
  console.log(token_response_string);

  let loggedInUser_response = await fetch("https://dev.stedi.me/validate/" + token_response_string, {
    method: "GET",
    headers: { "content-type":"application/text" }
  });

  const loggedInUser = await loggedInUser_response.text();
  console.log(loggedInUser);
  set_uname(loggedInUser);
  //props.setUserName(loggedInUser);

  // We will set the user-logged-on status to true at the very end.
  if (response_code == 200) { set_user_logged_on(true) }
}

const Login = (props) => {
  const [phone_number, set_number] = useState("");
  const [otp, set_otp] = useState(null);
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <SafeAreaView style={styles.a_margin}>
      <Text style={styles.text}>Phone Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={set_number}
        value={phone_number}
        placeholder="#-###-###-####"
        placeholderTextColor="lightskyblue"
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
      {/*Send Text button*/}
      <TouchableOpacity style={styles.button} onPress={() => {send_text(phone_number)}}>
        <Text>Send Text</Text>
      </TouchableOpacity>

      {/*Submit button - the one you press when you actually commit to logging in.*/}
      <TouchableOpacity style={styles.button} onPress={() => {get_token({phone_number, otp, set_user_logged_on:props.set_user_logged_on})}}>
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
    marginTop: 20
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