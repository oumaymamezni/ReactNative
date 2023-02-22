import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Text, View,Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import {CardShoping}  from './CardShoping'

const CardShopingMeta: ComponentMeta<typeof CardShoping> = {
    title: 'CardShoping Component',
    component: CardShoping,
    argTypes:{
       
    },
    args: {
        shop:''
    }
}
export default CardShopingMeta;

type CardShopingStory = ComponentStory<typeof CardShoping>
export const story1 : CardShopingStory = (args) => <CardShoping {...args} />
story1.args={
    ...story1.args,
    shop:
    <View>        
        <Image 
        style={{
            position: 'absolute',
            width: 147,
            height: 159,
            left: 0,
            top: 0,
            borderRadius:20,
        }} 
        source={{ uri: 'https://s3-alpha-sig.figma.com/img/d116/b77f/94c47cb34085ecba93d7086e56c30f3f?Expires=1674432000&Signature=IQkPlu~wfNX6FNVC9EEbolz1OKJB~kThoZSEnDS7tTdiu5-8vBXBP-58Mu20z8AliHhgTdI0XhTIyKHEbEGW~oUuafZ423qrDNNhZc3mZji14MT1f07JjRuM9UKN3eZVAU6El96GjkB1Yei1NiVuocl4u4wiJydG0tCRH0QJpbiekkmHw4rRTTK5csmz3vDZb4dM3OL6GlxjXGfsqUtvN7yVFimsoz4bgpanb6CuEQeIXbNa8g5C~Xrc0dWadB3oYlTAfcauOL7386f75M0ZXNU-zFmDKQ3OOeiIycMhpqaXeqwHwWTwFIKNt2euQRMaOu4kRKWEEF9BFhxEKI-Gew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}} />
        <Ionicons 
         style={{
            position: 'absolute',
            fontSize:20,
            left: 120,
            top: 8,
            color:'white'
            
        }} 
        name="heart-outline"/>
        <Text
         style={{
            position:'absolute',
            width: 112,
            height: 18,
            top:105,
            left:8,
            fontStyle:'normal',
            fontWeight:'bold',
            fontSize:10,
            lineHeight:135,
            textAlignVertical:"center",
            flexGrow:0,
            color:'#1D1A20',

            
        }} 
        >Polkadot Red Dress</Text>
        <Text
        style={{
            position:'absolute',
            width:112,
            height: 19,
            top:118,
            left:8,
            fontStyle:'normal',
            fontWeight:'bold',
            fontSize:13,
            lineHeight:135,
            textAlignVertical:"center",
            flexGrow:0,
            color:'#757575',

            
        }} 
        >Rs.  1,499.00</Text>
    
    </View>
}
export const story2 : CardShopingStory = (args) => <CardShoping {...args} />
story2.args={
    ...story2.args,
    shop:
    
    <View
    style={{
        position: 'absolute',
        width: 152,
        height: 181,
        left: 0,
        top: 15,
        borderRadius:16,
        backgroundColor: '#E3EDFB',
    }}
    >
        <Image 
         style={{
            position: 'absolute',
            width: 120,
            height: 120,
            left: 16,
            top: -16
        }}
        source={{ uri: 'https://s3-alpha-sig.figma.com/img/76f3/b32a/220887e939fdfdab3e90bd8f1b3db153?Expires=1674432000&Signature=OKua1mkkXJnm43Ke-a0LnWqh5P1OKxLfcrl4iS5Pjjw53sxMs6tcx1-TLPXXBKmyeb9ORqoADHbAxeW8-iE7t678T3QKqzX-B6eYBhUqo2Mclwv6YbwppYcbzbz3ykboCvM11RfI3KcKJf8-3Q8FEaIg6nSZki5f9rd9JmCZoARQC95i8pAmuLCdriWqk-RASkav55RO~dQ3qAocqkdwbajGfuBpi2ztx04ZcEpeL6Oq4QFkSnQwvYf2WOM1gYit34OA1z2k9HcRwh2~ZCEt4oDx-rCvgHNATYRn1yylgdzvwWXCCQvyde1niMWAhOw6a-g-OlWj8jYe-rYC80TOmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}} />
        <Text
         style={{
            top:135,
            height: 50,
            width: 200,
            color:'black',
            backgroundColor:'white',
            borderBottomLeftRadius :20,
            borderBottomRightRadius :20,
            position: 'absolute',
            fontStyle:'normal',
            fontWeight:'bold',
            fontSize:13,
        }} 
        >
            Help the Dogs
        </Text>
    
    </View>
}
export const story3 : CardShopingStory = (args) => <CardShoping {...args} />
story3.args={
    ...story3.args,
    shop:
    <View
        style={{
            position: 'absolute',
            width: 170,
            height: 210,
            left: 20,
            top: 20,

            backgroundColor: '#F1F1F1',
        }}
    >
        <Image 
        style={{
            position: 'absolute',
            width: 111,
            height: 111,
            left: 29,
            top: 10.07,
        }} 
        source={{ uri: 'https://s3-alpha-sig.figma.com/img/beb2/6272/fe2e5236dac7c103162b8799d02356be?Expires=1674432000&Signature=BGicXHImNNhX1Hv0V9VOM3ZdLQot7gy-72KNOR0mRZE-o4Jgarb9nGrlNzII9R7ekx0hggzQ7mtSLRjEq4Ho9LDCfbyiVmdRy3GCH52sVaxqKvbvfLLd5kLw8qmQ9K5S573Oxf~Vy9PK6U6MwOqaMEfuCb9M44rJCRI-eXyyR24nv2v6hbnPo5IG7gIUKFrGne6fMtlOsug8xPftMPcp49okaY1bbmW3VI8qH-mpP2WVfv3yi0JgFd6y75O2uhqTQpDDd22MjZFlutbYvGwA-aeoYCgeDR3CTMSy8xsodHEAjvOX0557NIHfnX-8QNeWhxRKU5Nz9RBClDo0p-OeJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}} />
        <Ionicons 
         style={{
            position: 'absolute',
            fontSize:20,
            left: 140,
            top: 8,
            color:'black'
            
        }} 
        name="heart-outline"/>
       <Text
         style={{
            position: 'absolute',
            width: 45,
            height: 14,
            left: 62,
            top: 128,
            fontStyle:'normal',
            fontWeight:'700',
            fontSize:18,
            lineHeight:14,
            display:'flex',
            alignItems:'center',
            textAlign:'center',
            color:'#000000'
        }} 
       >
        Artsy
        </Text>
 
       <Text
        style={{
            position: 'absolute',
            width: 69,
            height: 16,
            left: 50,
            top: 160,
            fontStyle:'normal',
            fontWeight:'500',
            fontSize:14,
            lineHeight:16,
            display:'flex',
            alignItems:'center',
            textAlign:'center',
            color:'#000000',
            textDecorationLine:'underline'
        }} 
       >
        Shop now
        </Text>
    
    </View>
}