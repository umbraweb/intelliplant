import React, { useState } from "react";
import * as Font from 'expo-font';

//import Background from './imgs/logo.jpeg';
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import * as firebase from "firebase";
const logo = {uri: "https://i.ibb.co/tsbwb1X/logo.jpg"};

/*const [loaded] = useFonts({
  SofiaProLight: require('../assets/fonts/sofia-pro-light.otf'),
});*/

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
        <Image source = {logo} style = {styles.image}/>
        <TextInput
          style={styles.inputBox}
          placeholder="  Email"
          onChangeText={emailHandler}
          value={email}
        />
        <TextInput
          style={styles.inputBox}
          secureTextEntry={true}
          placeholder=" Senha"
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
    backgroundColor: "#fdfeff",
    //backgroundImage: url("/imgs/logo.jpeg"),
  },
  inputBox: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#73C6D8",
    width: "80%",
    height: 40,
    margin: 8,
    fontFamily: 'sofia-pro',
  },
  button: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5DAE22",
    borderRadius: 4,
    height: 30,
    width: "80%",
    fontFamily: 'sofia-pro',
  },
  errorMessage: {
    fontSize: 20,
    fontFamily: 'sofia-pro',
  },
  bgimage:{
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    width: '100%',
    height: '20%',
    resizeMode: 'contain',
  }
});
export default SignInScreen;
