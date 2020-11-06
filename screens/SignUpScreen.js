import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as firebase from "firebase";

const SignUpScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const emailHandler = (enteredText) => {
    setEmail(enteredText);
  };
  const passwordHandler = (enteredText) => {
    setPassword(enteredText);
  };
  const handleRegister = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.errorMessage}>
        {error && email != "" && <Text style={styles.error}>{error}</Text>}
      </View>
      <TextInput style={styles.inputBox} placeholder=" Nome Completo" />
      <TextInput
        style={styles.inputBox}
        placeholder="  Email"
        onChangeText={emailHandler}
        value={email}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.inputBox}
        placeholder=" Senha"
        onChangeText={passwordHandler}
        value={password}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.inputBox}
        placeholder=" Confirmar Senha"
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text> Fazer Cadastro </Text>
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
    backgroundColor: "#73C6D8",
    borderRadius: 4,
    height: 30,
    width: "80%",
  },
  errorMessage: {
    fontSize: 20,
  },
});
export default SignUpScreen;
