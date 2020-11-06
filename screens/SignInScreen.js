import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as firebase from "firebase";

const SignInScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const emailHandler = (enteredText) => {
    setEmail(enteredText);
  };
  const passwordHandler = (enteredText) => {
    setPassword(enteredText);
  };

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.errorMessage}>
        {error && email != "" && <Text style={styles.error}>{error}</Text>}
      </View>
      <TextInput
        style={styles.inputBox}
        placeholder="Email"
        onChangeText={emailHandler}
        value={email}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.inputBox}
        placeholder="Senha"
        onChangeText={passwordHandler}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text> Log in </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "grey",
    width: "80%",
    height: 40,
    margin: 8,
  },
  button: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    borderRadius: 4,
    height: 30,
    width: "80%",
  },
  errorMessage: {
    fontSize: 20,
  },
});
export default SignInScreen;
