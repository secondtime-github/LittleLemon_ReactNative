import * as React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, onChangeEmail] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);

  return (
    <View style={styles.body}>
      <Image
        style={styles.image}
        source={require('../assets/little-lemon-logo-grey.png')}
        resizeMode='contain'
      />

      <Text style={styles.text}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(newValue) => {
          onChangeEmail(newValue);
          setIsDisabled(!validateEmail(newValue));
        }}
        placeholder='Type your email'
        keyboardType='email-address'
        clearButtonMode='always'
      />

      <Pressable
        style={[
          styles.button,
          isDisabled
            ? { backgroundColor: 'grey' }
            : { backgroundColor: '#495E57' }
        ]}
        onPress={() => { Alert.alert("Thanks for subscribing, stay tuned!") }}
        disabled={isDisabled}>
        <Text style={styles.buttonText}>
          Subscribe
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  image: {
    margin: 10,
    width: 200,
    height: 200,
  },

  text: {
    margin: 10,
    fontSize: 24,
    textAlign: 'center',
  },

  input: {
    margin: 10,
    padding: 10,
    height: 40,
    minWidth: 340,
    maxWidth: 340,
    borderWidth: 1,
    borderRadius: 8,
  },

  button: {
    margin: 10,
    paddingHorizontal: 120,
    paddingVertical: 5,
    borderRadius: 8,
  },

  buttonText: {
    fontSize: 24,
    color: '#EDEFEE',
  },
});

export default SubscribeScreen;
