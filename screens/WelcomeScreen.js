import * as React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.body}>
      <Image
        style={styles.image}
        source={require('../assets/little-lemon-logo.png')}
        resizeMode='contain'
      />

      <Text style={styles.text}>
        Little Lemon, your local Mediterranean Bistro
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => { navigation.navigate('Subscribe') }}>
        <Text style={styles.buttonText}>
          Newsletter
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  image: {
    width: 200,
    height: 200,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  button: {
    paddingHorizontal: 120,
    paddingVertical: 5,
    backgroundColor: '#495E57',
    borderRadius: 8,
  },

  buttonText: {
    fontSize: 24,
    color: '#EDEFEE',
  },
});

export default WelcomeScreen;
