import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Search } from "./Search";
import { Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


const SearchMeta: ComponentMeta<typeof Search> = {
  title: "Search",
  component: Search,
  args: {
    placeholder:"Search",
    value :"",
    type :1
  },
};

export default SearchMeta;


type SearchStory = ComponentStory<typeof Search>;

export const Basic: SearchStory = (args) => <Search {...args} />;


export const CustomColorButton: SearchStory = (args) => <Search {...args} />;
CustomColorButton.args={
    ...Basic.args,
   icon : <Ionicons name="search" size={32} color="green" />

 }

 
export const CustomColorButton3: SearchStory = (args) => <Search {...args} />;
CustomColorButton3.args={
    ...Basic.args,
    type : 3

 }