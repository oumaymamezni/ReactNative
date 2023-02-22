import React from "react"
import { useState, ChangeEvent } from 'react';
import { Text, StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

type SearchProps = {
	title: string
	placeholder: string
	value: string
	onChangeTeaxt: () => void
	type : number
	icon : React.ReactNode
	state : 'link' | 'background'
	backgroundColor : string

}

export const Search: React.FC<SearchProps> = (props) => {
	const [value, setValue] = useState('');
	const [value1, setValue1] = useState('');
	const [value2, setValue2] = useState('');
   const { type , icon , placeholder , backgroundColor} = props
	return (
		<View style = {{ backgroundColor }}>

			{icon}
			<TextInput
						style={styles.input}
						placeholder={placeholder}
						value={value1}
						onChangeText={setValue1}

					/>
			
		</View>
	);

};



const styles = StyleSheet.create({
	title: {
		fontSize: 32,
		marginBottom: 10,
		textAlign: "center"
	},
	input: {
		flex: 1,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 0,
		backgroundColor: '#fff',
		color: '#424242',
		fontSize: 18,
		fontWeight: '400',
		lineHeight: 22,
		letterSpacing: 0.5,
		paddingHorizontal: 12,
		paddingVertical: 10,
		background: '#000000',
		textColor: '#FFFFFF',
		placeholderTextColor: '#636366',
		textInputBackground: "rgba(44,44,46,0.8)",
		searchFill: '#b0b0b2',


	},

	searchSection: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderWidth: 2,
		borderRadius: 12,
	},
	searchIcon: {
		padding: 10,
	}
})