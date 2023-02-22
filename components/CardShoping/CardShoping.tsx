import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'


type CardShopingProps = {
    description : React.ReactNode,
    title:React.ReactNode,
    price:React.ReactNode,
    source : string, 
};

const CardShoping : React.FC<CardShopingProps>= (props) => {
    const {description, title, price,source} = props
    return (
    <View>
      <Image style={{height : 100, width: 100}} source={{ uri: source }} />
      {title}
      {description}
      {price}
    </View>
  )
}

export default CardShoping

const styles = StyleSheet.create({})