import React,{ useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';


const LottieViewComponent = ({navigation}) => {
    const animation = useRef(null);
    useEffect(() => {
    }, []);
  
    return (
      <View style={styles.animationContainer}>
         <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
            backgroundColor: '#eee',
          }}
          source={require('../assets/gradientBall.json')}
        />
         <View style={styles.buttonContainer}>
          <Button
            title="NEXT SHOPING"
            onPress={() => {
              navigation.navigate("HomeShoping")
            }}
          />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    animationContainer: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    buttonContainer: {
      paddingTop: 20,
    },
  });

export default LottieViewComponent
