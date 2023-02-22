import { View } from 'react-native'
import React from 'react'

type CardIconsProps = {
	icon: React.ReactNode
}

export const CardIcons: React.FC<CardIconsProps> = (props) => {
   const {icon} = props
	return (
		<View>
			{icon}			
		</View>
	);

};