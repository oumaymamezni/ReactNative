import React from "react"
import {View} from 'react-native'


type CardShopingProps = {
    description : React.ReactNode,
    title:React.ReactNode,
    price:React.ReactNode,
    source : string,
    shop: React.ReactNode,
};

export const CardShoping : React.FC<CardShopingProps>= (props) => {
    const {shop} = props
    return (
    <View>
      {shop}
    </View>
  )
}

