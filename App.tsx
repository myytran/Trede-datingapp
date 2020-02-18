import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCc_zY21uLJIZeXaRPCIxS6n40jJBSxsDM',
  authDomain: 'sipdate.firebaseapp.com',
  databaseURL: 'https://sipdate.firebaseio.com',
  projectId: 'sipdate',
  storageBucket: 'sipdate.appspot.com',
  messagingSenderId: '200787412676',
  appId: 'sipdate',
  measurementId: 'G-measurement-id'
}
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const state = {
  authenticated: false,
  user: {
    email: '',
    name: ''
  }
}

// // sign up
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });

// // sign in
// firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });

// // sign out
// firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
  }
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text>sign in</Text>
      <TextInput label="email" />
      <TextInput secureTextEntry={true} label="password" />
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        sign in
      </Button>
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        sign out
      </Button>
      <Text>sign up</Text>
    </View>
  )
}
