import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { CardSearch } from "./CardSearch";
import {View, Text ,TextInput } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const SearchMeta: ComponentMeta<typeof CardSearch> = {
  title: "Search",
  component: CardSearch,
  args: {
    textInput:"",
  },
};

export default SearchMeta;


type SearchStory = ComponentStory<typeof CardSearch>;


export const story1: SearchStory = (args) => <CardSearch {...args} />;
story1.args={
    ...story1.args,
   textInput:
   <View style={{	
          position: 'absolute',
          width: 315,
          height: 40,
          left :20,
          top : 10,
          backgroundColor:'#FFFFFF',
          borderRadius: 16
          
          }}>
          <Ionicons name="search-sharp" style={{color: '#A5A5A5' ,position: 'absolute',left: 17,right: 14.63,top: 12.5,bottom: 14.63}}/>
          <TextInput 
						style={{
            position: 'absolute',
            width: 66,
            height: 22,
            left :42,
            top : 9,
            color: '#A5A5A5',
            fontStyle: 'normal',
            fontSize: 16 ,
            lineHeight:19,
            
          }}
						placeholder="Search"
					/>
        </View>,
 }

 export const story2: SearchStory = (args) => <CardSearch {...args} />;
 story2.args={
    ...story2.args,
   textInput:
   <View 
    style={{	
    position: 'absolute',
    width: 335,
    height: 48,
    left :20,
    top : 10,
    backgroundColor:'#F0F0F0',
    borderRadius: 100
    
    }}>

    <Ionicons name="search-sharp" style={{color: '#AEAEAE' ,position: 'absolute',left: 12.5,right: 20.83,top:12.5,bottom:20.83,borderStyle:"solid",borderStartColor:"#AEAEAE"}}/>
          <TextInput 
            style={{
            position: 'absolute',
            width: 188,
            height: 22,
            left :48,
            top : 13,
            color: '#AEAEAE',
            fontStyle: 'normal',
            fontWeight:'400',
            fontSize:16,
            lineHeight:135,
          }}
            placeholder="What are your looking for ?"
          />
          </View>,

 }

 export const story3: SearchStory = (args) => <CardSearch {...args} />;
 story3.args={
    ...story3.args,
    textInput:   
      <View>
          <TextInput 
            style={{
              position: 'absolute',
              width: 205,
              height: 25.15,
              left :1,
              top : 12,
              fontStyle: 'normal',
              fontWeight: "400",
              fontSize: 21,
              lineHeight:125.8,
              display:"flex",
              alignItems:"center",
              opacity: 0.5,
              color: '#000000',
              textDecorationLine:"underline"
            }}
            placeholder="Type here to search"
          />
          
          </View>  
          ,
 }
 
