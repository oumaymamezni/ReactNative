import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  TextInput,
  ToastAndroid
} from "react-native";
import React, { useState } from "react";
import {CardHeader ,CardSearch,CardShoping,CardIcons} from "@my-workspace/my-ui";
import Ionicons from '@expo/vector-icons/Ionicons';
import {Avatar} from 'react-native-paper';
// import {ToastAndroid,Platform} from 'react-native';
import Toast from 'react-native-root-toast';


const HomeShoping = ({ navigation }) => {
  const [listShoping] = useState([
    {
      source:"https://s3-alpha-sig.figma.com/img/d116/b77f/94c47cb34085ecba93d7086e56c30f3f?Expires=1674432000&Signature=IQkPlu~wfNX6FNVC9EEbolz1OKJB~kThoZSEnDS7tTdiu5-8vBXBP-58Mu20z8AliHhgTdI0XhTIyKHEbEGW~oUuafZ423qrDNNhZc3mZji14MT1f07JjRuM9UKN3eZVAU6El96GjkB1Yei1NiVuocl4u4wiJydG0tCRH0QJpbiekkmHw4rRTTK5csmz3vDZb4dM3OL6GlxjXGfsqUtvN7yVFimsoz4bgpanb6CuEQeIXbNa8g5C~Xrc0dWadB3oYlTAfcauOL7386f75M0ZXNU-zFmDKQ3OOeiIycMhpqaXeqwHwWTwFIKNt2euQRMaOu4kRKWEEF9BFhxEKI-Gew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Polkadot Red Dress",
      price: "Rs.  1,499.00",
    },
    {
      source:"https://s3-alpha-sig.figma.com/img/3358/5c01/6be5470d98bf2672e203ec8b9bd34825?Expires=1674432000&Signature=N7ZwYRs8GwUH~oEI0brpJGbJDlLc7IVISBQN4UvPED5Z1inwhsjppp3Swec7Fm5L99F0mP~elWfVpGDR7ZyhKTt1LovDgTr-Day8bH8n~ZLFg6MDQm2rQ2MXYHA2F4HelWOoAVPUJpFaaKx8AsYQtsHf2GkSVJqQNhzxGobTvvTxd4w78Nkc1zGww1l-ThZIF3RkeJ2DsLXNxlsUVA2hjwLfvzQ5Riz4qIP39PIfwSEgQbXPPooIi9lNln1HuH4I~RVUBeIalA-fs6679TAwWCwM05UUXqTlV2chLKGWJ1ObqJaqd7WHbT~4TmX0wo1zPAWUFLrnnWCf60ay6thkvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Striped Pink Dress",
      price: "Rs.  1,299.00",
    },
    {
      source:"https://s3-alpha-sig.figma.com/img/7d71/5eb7/2bf7e83a1dacce044e05fb9b59693b47?Expires=1674432000&Signature=AiyjgjpHxZvu8q9ESarMJ2hNpAFIz1VROtVv9TX0Bb7A5oM6gi0eDUmwyCP9TAQaDajFBlRcPvMZOVFeuh3oYXPykTppVK7MF95Xyx397yNar7Au0lgRncqunzzQ37G1i1Z~2Jlu2UMw4z3tO9tHprwnOkEote4L3KhgTABo1AJFVeLdvPZYBjNpxZXs9b2pGVbSz0RbP5Is6J5Yqna7e0EZSG8wP9z7sikFkMSP17~n-CRWH9UF~yxSO5gkVtWDt80i5IVz1mT~QZh3XKbJGqVsS76xIoMYbJFCRzC0V~uKeRNZVMHG9jtNwr5CkYK4R2xNGBYRB0OZyxN0VFJVGw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Polkadot Red Dress",
      price: "Rs.  1,499.00",
    },
    {
      source:"https://s3-alpha-sig.figma.com/img/8f91/5ca5/9ace6098f1e007adc36d98915116d22b?Expires=1674432000&Signature=ODMJs3~tSnlVUXBMznbvf7x30FZUkZpnJJWRmj-GPsq0zvb6wvfOmhG3xMmzUanUmuOAYibi4jN4otNlScDnf272f1qPKgUeD-ihV-G8-ucJ5WtuwhjOAnyzrT5ThT~zd1d51t7kkVGcNojaGkgCtVZ~rId6qxeM00JiK8C8s6TpZbsSnEJ6zT3GrX-6E9cNNsfRf3ZSvRA--fqZZAbuTpbkA21jl7QlONCW3qc1ANtAZQGnPBzC8bGUGPJx0OLU57Ee4BKX6X2QPMxiNliknANv0LzyF6kgXX8n2-5938~0Ip8uuQaTaYIXUTU-4fXTBlEdVbAAzfSxZ8sUmDbYAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Striped Pink Dress",
      price: "Rs.  1,299.00",
    },
  ]);

  const showToast = () => {
    ToastAndroid.show('Ajouter Aux Favoris', ToastAndroid.SHORT);
  };
  let toast = Toast.show('Welcome to ower application', {
    duration: Toast.durations.LONG,
    position: Toast.positions.TOP,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    onShow: () => {
    },
    onShown: () => {
    },
    onHide: () => {
    },
    onHidden: () => {
    }
});
setTimeout(function () {
  Toast.hide(toast);
}, 1000);
  return (
    
      <View style={{ display: 'flex',backgroundColor:'#FEECF0',height:900 }}>
        <View style={{flex: 0 , marginTop:50}}>
            <CardHeader 
            header={
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Ionicons name="apps-outline" style={{color: '#ED6767', fontSize: 20,right:60}}/>
            <Avatar.Image
            size={42} 
            style={{left:40,top:0}}
            source={{uri: 'https://s3-alpha-sig.figma.com/img/516f/e00b/4d3d3381b40bd5112cecfac12caaa17f?Expires=1674432000&Signature=Ah0bL6V8rn~gJl72zfCqx3OnKhiQxSBS5fuz469WAgn1gmGDo57LW3PNneIJ55kmLtDKGwqmbD4Y~yGivLuHSBx3YGm~77sMGLAcbHr0Z7VsCE5CsIbyBgsxAu~pNThaVvAzYb981B~q0E25n-~MuCaCmBmne7v8bGRsmvkWg~61C5i1k4F1YOsbKEYsgR2hxNon6kyc2kDHcjO8I3xlwQ9sRL3QwJ3d5MMjsgsu8BPaxWt-F7yU7QSMq3ZlZsfekmDjPJBvklORFYDTwIRFaTAN1TKyn6z4YIlaefj5UUpwDGF75RaiQvVR0loCI-FjHgLr-PZb~HR2cJyxg7O-nA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}/>
            </View>} />
        </View>

        <View style={{flex: 1.5}}>
            <Text
            style={{
              fontWeight:'bold',
              fontSize:24,
              left:30,
              top:25,          
            }}
            >
            Match your style
              </Text>        
          <CardSearch 
          textInput={
          <View style={{backgroundColor: '#FFFFFF', borderRadius: 16, height: 40, position: 'absolute', top: 40, width: 330,left:10}}>
          <Ionicons name="search-sharp" style={{bottom: 14.63, color: '#A5A5A5', left: 17, position: 'absolute', right: 14.63, top: 12.5}}/>
          <TextInput placeholder="Search" style={{color: '#A5A5A5', fontSize: 16, fontStyle: 'normal', height: 22, left: 42, position: 'absolute', top: 9, width: 66}}/>
          </View>} />
      </View>
  
        <View style={{flex: 5.5 }}>
          {listShoping.map((shop, index) => {
            return index % 2 === 0 ? (
          <View
              style={{
                display:'flex',
                flexDirection:"row",
                justifyContent:"space-around",
              }}
              >

                <CardShoping 
                shop={
                <View
                style=
                {{
                  height: 210, 
                  top: 10, 
                  width: 140
                  }}
                >
                  <Image source={{uri: listShoping[index]?.source}} 
                  style={{borderRadius: 20, height: 159, left: 0, position: 'absolute', top: 0, width: 147}}/>
                  <Ionicons 
                    style={{
                        position: 'absolute',
                        fontSize:20,
                        left: 120,
                        top: 8,
                        color:'white'
                        
                    }} 
                    name="heart-outline"  onPress={() => showToast()}/>

                  <Text style={{alignSelf: 'stretch', color: '#1D1A20', flexGrow: 0, fontSize: 12, fontStyle: 'normal', fontWeight: 'bold', height: 19, left: 8,  position: 'absolute', textAlignVertical: 'center', top: 160, width: 112}}>
                  {listShoping[index].title}
                  </Text>
                  <Text 
                    style={{alignSelf: 'stretch', color: '#757575', flexGrow: 0, fontSize: 13, fontStyle: 'normal', fontWeight: 'bold', height: 19, left: 8, position: 'absolute', textAlignVertical: 'center', top: 175, width: 112}}>
                    {listShoping[index].price}
                  </Text>
                </View>} />

            {listShoping[index + 1] ? (
                <CardShoping 
                shop={
                <View
                style=
                {{
                  height: 210, 
                  left: 0,
                  top: 10, 
                  width: 140
                  }}
                >
                  <Image source={{uri: listShoping[index+1]?.source}} 
                  style={{borderRadius: 20, height: 159, left: 0, position: 'absolute', top: 0, width: 147}}/>
                  <Ionicons 
                    style={{
                        position: 'absolute',
                        fontSize:20,
                        left: 120,
                        top: 8,
                        color:'white'
                        
                    }} 
                    name="heart-outline"  onPress={() => showToast()} />
                  <Text style={{alignSelf: 'stretch', color: '#1D1A20', flexGrow: 0, fontSize: 12, fontStyle: 'normal', fontWeight: 'bold', height: 19, left: 8,  position: 'absolute', textAlignVertical: 'center', top: 160, width: 112}}>
                  {listShoping[index+1].title}
                  </Text>
                  <Text 
                     style={{alignSelf: 'stretch', color: '#757575', flexGrow: 0, fontSize: 13, fontStyle: 'normal', fontWeight: 'bold', height: 19, left: 8, position: 'absolute', textAlignVertical: 'center', top: 175, width: 112}}>
                    {listShoping[index+1].price}
                  </Text>
                </View>} />
                ) : null}
              </View>
            ) : null;
          })}

        </View>

        <View  style={{flex: 2.5}}>
        <CardIcons 
        icon={
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', backgroundColor:'#FFFFFF',borderRadius:10,height:65,width:351,left:5}}>
          <Ionicons name="home-outline" style={{color: '#959292', fontSize: 20,top:20}}/>
          <Ionicons name="reorder-four-outline" style={{color: '#ED6767', fontSize: 20,top:20}}/>
          <Ionicons name="cart-outline" style={{color: '#959292', fontSize: 20,top:20}}/>
          <Ionicons name="person-outline" style={{color: '#959292', fontSize: 20,top:20}}/>
        </View>} />
        </View>
        
        <Button title="GO BACK" onPress={() => {
              navigation.goBack()
          }} />
          <Text>HomeShoping</Text>
      </View>
    );
  };



  export default HomeShoping;

  const styles = StyleSheet.create({});