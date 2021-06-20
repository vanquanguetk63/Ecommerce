import React from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {H2, H4, P} from '../../../components/Typography';
import {TextInput, Button} from 'react-native-paper';
import {hScale, vScale} from '../../../libs/scale';
import {useNavigation} from '@react-navigation/native';
import {LoginPageProps} from '../../../routes/RootNavigator';

const LoginPage = (): JSX.Element => {
  const navigation = useNavigation<LoginPageProps>();

  const navigateToSignUpPage = () => {
    navigation.navigate('SignUpPage');
  };

  const validateLogin = () => {
    navigation.navigate('MainNavigator');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textLogin}>
        <H2 bold>Login</H2>
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
          uppercase={false}
          onPress={validateLogin}>
          Validate
        </Button>
      </TouchableOpacity>

      <View style={styles.textBottom}>
        <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={navigateToSignUpPage}>
          <P style={styles.textSignUp}>Don’t have an account? Sign-up</P>
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

export default LoginPage;
