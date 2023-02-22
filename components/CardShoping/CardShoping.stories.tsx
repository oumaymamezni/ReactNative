import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Text} from 'react-native'

import CardShoping  from './CardShoping'
const CardShopingMeta: ComponentMeta<typeof CardShoping> = {
    title: 'CardShoping Component',
    component: CardShoping,
    argTypes:{
       
    },
    args: {
        source : '',
        title : '',
        description :'',
        price: '',
    }
}
export default CardShopingMeta;

type CardShopingStory = ComponentStory<typeof CardShoping>
export const Basic : CardShopingStory = (args) => <CardShoping {...args} />
export const story1 : CardShopingStory = (args) => <CardShoping {...args} />
story1.args={
    source : 'https://img.freepik.com/free-photo/charming-slim-brunette-woman-pin-up-dress-coquettishly-raised-her-leg-isolated-wall_197531-14263.jpg',
    title : <Text>Polkadot Red Dress</Text>,
    price : <Text>Rs.  1,499.00</Text>,
}
export const story2 : CardShopingStory = (args) => <CardShoping {...args} />
story2.args={
    source : 'https://static-pepper.dealabs.com/threads/raw/PlYZO/2463005_1/re/768x768/qt/60/2463005_1.jpg',
    title : <Text>Help the Dogs</Text>,
}
export const story3 : CardShopingStory = (args) => <CardShoping {...args} />
story3.args={
    source : 'https://www.pngall.com/wp-content/uploads/5/Purse.png',
    title : <Text>Artsy</Text>,
    description: <Text>Shop now</Text>
}