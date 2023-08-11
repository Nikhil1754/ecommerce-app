import { View, Text, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../common/CustomTextInput'
import CustomButton from '../common/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { auth } from './Config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPaasword] = useState('');
  const [cpassword, setcPaasword] = useState('');
  const [badname, setBadName] = useState(false);
  const [bademail, setBadEmail] = useState(false);
  const [badphone, setBadPhone] = useState(false);
  const [badpassword, setBadPaasword] = useState(false);
  const [badcpassword, setBadcPaasword] = useState(false);
  const validate = () => {
    name == '' ? setBadName(true) : setBadName(false);
    email == '' ? setBadEmail(true) : setBadEmail(false);
    phone == '' ? setBadPhone(true) : setBadPhone(false);
    password == '' ? setBadPaasword(true) : setBadPaasword(false);
    cpassword == '' ? setBadcPaasword(true) : setBadcPaasword(false);
    if (password != cpassword) {
      Alert.alert("Paasword and Confirm Password Not same");
      return;
    }
  
    if (badname == false && bademail == false && badphone == false && badpassword == false && badcpassword == false) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          Alert.alert('Register SuccessFully');
          navigation.navigate('Login');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Alert.alert(errorMessage)
          // ..
        });
    }

  }

  return (
    <View style={{ flex: 1 }}>
      <Image source={require('../images/logo.jpg')} style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 30, borderRadius: 100 }} />
      <Text style={{ alignSelf: 'center', fontSize: 30, fontWeight: 'bold', color: 'black', marginTop: 20 }}>Create New Account</Text>
      <CustomTextInput value={name} onChangeText={setName} placeholder={"Enter Your Name"} icon={require("../images/user.png")} />
      {
        badname == true && (<Text style={{ color: 'red', marginTop: 6, marginLeft: 30, }}>Enter Your Name</Text>)
      }
      <CustomTextInput value={email} onChangeText={setEmail} placeholder={"Enter Your Email"} icon={require("../images/mail.png")} />
      {
        bademail == true && (<Text style={{ color: 'red', marginTop: 6, marginLeft: 30, }}>Enter Your Email</Text>)
      }
      <CustomTextInput value={phone} keyBoardType={'number-pad'} onChangeText={setPhone} placeholder={"Enter Your Phone No."} icon={require("../images/smartphone.png")} />
      {
        badphone == true && (<Text style={{ color: 'red', marginTop: 6, marginLeft: 30, }}>Enter Your Phone No.</Text>)
      }
      <CustomTextInput value={password} onChangeText={setPaasword} placeholder={"Enter Your paasword"} type={true} icon={require("../images/padlock.png")} />
      {
        badpassword == true && (<Text style={{ color: 'red', marginTop: 6, marginLeft: 30, }}>Enter Your Password</Text>)
      }
      <CustomTextInput value={cpassword} onChangeText={setcPaasword} placeholder={"Confirm Your paasword"} type={true} icon={require("../images/padlock.png")} />
      {
        badcpassword == true && (<Text style={{ color: 'red', marginTop: 6, marginLeft: 30, }}>Enter Your Confirm Paasword</Text>)
      }
      <CustomButton onPress={() => {
        validate();
      }} title={"Signup"} bgColor={"#000"} textColor={"#fff"} />
      <Text style={{ alignSelf: 'center', fontSize: 15, marginTop: 10, textDecorationLine: 'underline', fontWeight: '800' }} onPress={() => {
        navigation.goBack();
      }
      }>Already Have an Account?</Text>
    </View>
  )
}

export default Signup