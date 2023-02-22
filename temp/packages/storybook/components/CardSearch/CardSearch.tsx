import React from "react"
import {View} from "react-native";

type SearchProps = {
	title: React.ReactNode
	textInput: React.ReactNode
}

export const CardSearch: React.FC<SearchProps> = (props) => {
   const {textInput} = props
	return (
		<View>
			{textInput}			
		</View>
	);

};



