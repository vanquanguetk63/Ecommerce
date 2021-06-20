import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {H2, H4, P} from '../../components/Typography';
import {TextInput, Button} from 'react-native-paper';
import {hScale, vScale} from '../../libs/scale';

const LoginPage = (): JSX.Element => {
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
        <TextInput mode="outlined" label="Password" dense />
      </View>

      <View style={styles.buttonLogin}>
        <Button
          mode="outlined"
          color="#0001FC"
          contentStyle={{backgroundColor: '#FFFFFF'}}
          labelStyle={{fontWeight: 'bold'}}
          uppercase={false}>
          Validate
        </Button>
      </View>

      <View style={styles.textBottom}>
        <P style={styles.textSignUp}>Don’t have an account? Sign-up</P>
        <P bold>Skip for now</P>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0001FC',
    alignItems: 'center',
  },
  textLogin: {marginTop: vScale(70), marginBottom: vScale(120)},
  buttonCustom: {width: hScale(280), marginBottom: vScale(20)},
  buttonLogin: {width: hScale(300)},
  textBottom: {marginTop: vScale(50), alignItems: 'center'},
  textSignUp: {marginBottom: vScale(40)},
});

export default LoginPage;
