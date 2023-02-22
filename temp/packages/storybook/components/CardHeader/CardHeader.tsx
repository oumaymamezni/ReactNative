import { View } from 'react-native'
import React from 'react'

type CardHeaderProps = {
	header: React.ReactNode
}

export const CardHeader: React.FC<CardHeaderProps> = (props) => {
    const {header} = props
     return (
         <View>
             {header}			
         </View>
     );
 
 };