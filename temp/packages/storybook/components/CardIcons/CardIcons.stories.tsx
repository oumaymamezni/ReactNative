import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import {CardIcons}  from './CardIcons'
import { Text, View } from 'react-native';

const CardIconsMeta: ComponentMeta<typeof CardIcons> = {
    title: 'CardIcons Component',
    component: CardIcons,
    args: {
        icon:""
    }
}
export default CardIconsMeta;

type CardIconsStory = ComponentStory<typeof CardIcons>
export const story1: CardIconsStory = (args) => <CardIcons {...args} />;
story1.args={
    ...story1.args,
    icon: 
    <View style={{
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-around"}}>
        <Ionicons style={{color:'#000000',fontSize:25}} name="home-outline"></Ionicons>
        <Ionicons style={{color:'#000000',fontSize:25}} name="search-outline"></Ionicons>
        <Ionicons style={{color:'#000000',fontSize:25}} name="heart-outline"></Ionicons>
        <Ionicons style={{color:'#000000',fontSize:25}} name="bookmark-outline"></Ionicons>
    </View>
    
}
export const story2: CardIconsStory = (args) => <CardIcons {...args} />;
story2.args={
    ...story2.args,
    icon:
    <View style={{
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-around"}}>
        <Ionicons style={{color:'#959292',fontSize:20}} name="search-outline"></Ionicons>
        <Text
        style={{
            color:'#1D1A20',
            textDecorationLine: 'underline',
            fontWeight:'bold'
        }}
        >
            Explore
        </Text>
        <Ionicons style={{color:'black',fontSize:40}} name="add-circle-outline"></Ionicons>
        <Ionicons style={{color:'#959292',fontSize:20}} name="notifications-outline"></Ionicons>
        <Ionicons style={{color:'#959292',fontSize:20}} name="person-circle-outline"></Ionicons>
    </View>
}
export const story3: CardIconsStory = (args) => <CardIcons {...args} />;
story3.args={
    ...story3.args,
    icon:
    <View style={{
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-around"}}>
        <Ionicons style={{color:'#959292',fontSize:20}} name="home-outline"></Ionicons>
        <Ionicons style={{color:'#ED6767',fontSize:20}} name="reorder-four-outline"></Ionicons>
        <Ionicons style={{color:'#959292',fontSize:20}} name="cart-outline"></Ionicons>
        <Ionicons style={{color:'#959292',fontSize:20}} name="person-outline"></Ionicons>
    </View>
}