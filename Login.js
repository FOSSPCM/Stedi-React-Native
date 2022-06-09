import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";

const Login = () => {
  const [phone_number, set_number] = useState("");
  const [otp, set_otp] = useState(null);

  return (
    <SafeAreaView style={styles.margin}>
      <Text>Phone Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={set_number}
        value={phone_number}
        placeholder="1-800-677-8257"  // 1-800-MS-SUCKS Don't know if this number actually works, don't really care.
      />
      <Text>One-Time Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={set_otp}
        value={otp}
        placeholder="0000"
        keyboardType="numeric"
        secureTextEntry={true}
      />
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
});

export default Login;