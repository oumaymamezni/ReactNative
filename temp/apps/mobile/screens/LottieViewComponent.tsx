import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View ,Text  } from 'react-native';

const LottieViewComponent = ({navigation}) => {
    const animation = useRef(null);
    useEffect(() => {
    }, []);   
  
    return (
      <View style={styles.animationContainer}>
       <Text>web</Text>
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

export default LottieViewComponent


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