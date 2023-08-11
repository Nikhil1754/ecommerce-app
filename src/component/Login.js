import { View, Text, Image, Alert } from 'react-native'
import { React, useState } from 'react'
import CustomTextInput from '../common/CustomTextInput'
import CustomButton from '../common/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { auth } from './Config'
import { signInWithEmailAndPassword } from 'firebase/auth'


const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Bademail, setBadEmail] = useState(false);
  const [Badpassword, setBadPassword] = useState(false);
  const getData=()=>{
    if(email==='nikhilkashyap819@gmail.com' && password==='Nikhil@1754'){
      Alert.alert("Login SuccessFull");
      navigation.navigate('Home');
    }
    else{
      Alert.alert("User Not Found")
    }
    

  }
  const validate = () => {
    if (email === '') {
      setBadEmail(true);
    }
    else {
      setBadEmail(false);
    }
    if (password === '') {
      setBadPassword(true);
    }
    else {
      setBadPassword(false);
    }
    if(email!=='' && password!==''){
        getData();
    }
  }


 

  return (
    <View style={{ flex: 1 }}>
      <Image source={require('../images/logo.jpg')} style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 40, borderRadius: 100 }} />
      <Text style={{ alignSelf: 'center', fontSize: 50, fontWeight: 'bold', color: 'black', marginTop: 20 }}>Login</Text>
      <CustomTextInput value={email} placeholder={"Enter Your Email"} icon={require("../images/mail.png")}
        onChangeText={setEmail} />
      {
        Bademail ===true && (<Text style={{ marginTop: 6, marginLeft: 30, color: 'red' }}>Please Enter Email</Text>)
      }
      <CustomTextInput value={password} placeholder={"Enter Your paasword"} type={true} icon={require("../images/padlock.png")}
        onChangeText={setPassword} />
      {
        Badpassword === true && (<Text style={{ marginTop: 6, marginLeft: 30, color: 'red' }}>Please Enter Password</Text>)
      }
      <CustomButton title={"Login"} bgColor={"#000"} textColor={"#fff"} onPress={() => { validate() }} />
      <Text style={{ alignSelf: 'center', fontSize: 15, marginTop: 20, textDecorationLine: 'underline', fontWeight: '800' }} onPress={() => {
        navigation.navigate("Signup")
      }
      }>Create New Account?</Text>
    </View>
  )
}

export default Login