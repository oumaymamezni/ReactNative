import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import {CardHeader}  from './CardHeader'
import {View ,Text} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Avatar} from 'react-native-paper';

const CardHeaderMeta: ComponentMeta<typeof CardHeader> = {
    title: 'CardHeader Component',
    component: CardHeader,
    argTypes:{

    },
    args: {
        header:""
    }
}
export default CardHeaderMeta;

type CardHeaderStory = ComponentStory<typeof CardHeader>
export const story1: CardHeaderStory = (args) => <CardHeader {...args} />;
story1.args={
    ...story1.args,
    header:
    <View
    style={{
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-around"}}
    >
         <Ionicons style={{color:'black',fontSize:20}} name="menu-outline"></Ionicons>
         <Text
            style={{
                color:'black',
                fontWeight:'bold',
                fontSize:18
            }}
         >
            bagzz
         </Text>         
        <Avatar.Image 
        size={32} 
        style={{backgroundColor:'black'}}
        source={{uri: " https://s3-alpha-sig.figma.com/img/ab0e/1e90/276243e028bdc420ddf417a947394241?Expires=1674432000&Signature=mq0BA-k4iynFuNph9AAF9XYu9L6ejujkqp-wScoRl1BJPWpSbgJGq-aPJ50a1yvZyde499BGtYAKzP6nMsC2qlPlEWmvhpuJwXU6sjMmQ29hyPaAeF5NIgnl31PO1yHtGCITqBI88-NvfHSJSFrVUX2Jvmdl~u4ts64gRJdR06GHKooAwR~bDrWWm6acxHZHqJiBuK7xeLlEKnCYJ4XH3b7~yI93geMeAF1OUarKPZEWkxu3YI~GZzYUXAwydi-5b~UCuUAHEaGMJpg1QISzIBAmsIUH7CYREIzYDmdUPFAoLcW5jikWk2KxeBXysLXXjFPE8oxbBxO2K4lIFu5eeQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}}
        />
        
    </View>
    
}
export const story2: CardHeaderStory = (args) => <CardHeader {...args} />;
story2.args={
    ...story2.args,
    header:
    <View
    style={{
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-around"}}
    >
         <Ionicons style={{color:'#ED6767',fontSize:20}} name="apps-outline"></Ionicons>
         <Avatar.Image 
            size={42} 
            source={{uri: "https://s3-alpha-sig.figma.com/img/516f/e00b/4d3d3381b40bd5112cecfac12caaa17f?Expires=1674432000&Signature=Ah0bL6V8rn~gJl72zfCqx3OnKhiQxSBS5fuz469WAgn1gmGDo57LW3PNneIJ55kmLtDKGwqmbD4Y~yGivLuHSBx3YGm~77sMGLAcbHr0Z7VsCE5CsIbyBgsxAu~pNThaVvAzYb981B~q0E25n-~MuCaCmBmne7v8bGRsmvkWg~61C5i1k4F1YOsbKEYsgR2hxNon6kyc2kDHcjO8I3xlwQ9sRL3QwJ3d5MMjsgsu8BPaxWt-F7yU7QSMq3ZlZsfekmDjPJBvklORFYDTwIRFaTAN1TKyn6z4YIlaefj5UUpwDGF75RaiQvVR0loCI-FjHgLr-PZb~HR2cJyxg7O-nA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}}
            />
       
         
         
    </View>
    
}
export const story3: CardHeaderStory = (args) => <CardHeader {...args} />;
story3.args={
    ...story3.args,
    header:
    <View
    style={{
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-around"}}
    >
        <Text
        style={{
            color:'#1D1A20',
            fontWeight:'bold',
            fontSize:20,
        }}
        >
            Pet.
        </Text>
        
         <Avatar.Text
        size={32} 
        label="A"
        style={{backgroundColor:'black'}}
         />
    </View>
    
}