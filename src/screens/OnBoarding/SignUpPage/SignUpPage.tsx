import React from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {H2, H4, P} from '../../../components/Typography';
import {TextInput, Button} from 'react-native-paper';
import {hScale, vScale} from '../../../libs/scale';
import {useNavigation} from '@react-navigation/native';
import {SignUpPageProps} from '../../../routes/RootNavigator';

const SignUpPage = (): JSX.Element => {
  const navigation = useNavigation<SignUpPageProps>();

  const navigateToLoginPage = () => {
    navigation.navigate('LoginPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textLogin}>
        <H2 bold>Create an account</H2>
      </View>
      <View style={styles.buttonCustom}>
        <H4>Full Name</H4>
        <TextInput mode="outlined" placeholder="FullName" dense />
      </View>
      <View style={styles.buttonCustom}>
        <H4>Email</H4>
        <TextInput mode="outlined" placeholder="Email" dense />
      </View>
      <View style={styles.buttonCustom}>
        <H4>Password</H4>
        <TextInput mode="outlined" placeholder="Password" dense />
      </View>

      <TouchableOpacity style={styles.buttonLogin}>
        <Button
          mode="outlined"
          color="#0001FC"
          contentStyle={styles.buttonBackgroud}
          labelStyle={styles.labelText}
          uppercase={false}>
          Validate
        </Button>
      </TouchableOpacity>

      <View style={styles.textBottom}>
        <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={navigateToLoginPage}>
          <P style={styles.textSignUp}>Already have an account ? Login</P>
        </TouchableOpacity>
        <TouchableOpacity>
          <P bold>Skip for now</P>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18a0fb',
    alignItems: 'center',
  },
  textLogin: {marginTop: vScale(70), marginBottom: vScale(120)},
  buttonCustom: {width: hScale(280), marginBottom: vScale(20)},
  buttonLogin: {width: hScale(300)},
  textBottom: {marginTop: vScale(50), alignItems: 'center'},
  buttonSignUp: {marginBottom: vScale(40)},
  buttonBackgroud: {backgroundColor: '#FFFFFF'},
  labelText: {fontWeight: 'bold'},
  textSignUp: {textDecorationLine: 'underline', color: '#0001FC'},
});

export default SignUpPage;
