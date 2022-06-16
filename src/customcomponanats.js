import React, { Children, useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity, Image, DrawerItem, Modal,FlatList, } from 'react-native';


export const Footer = ({ ...props }) => {

    const [val, SetCount] = useState('')


    const handleOnpress = (data) => {
        SetCount(data)
        if (data == 'image') {
            props.navigation.navigate('home')
        }
        if (data == 'coupen') {
            props.navigation.navigate('fourthscreen')
        }
    }


    return (

        <View style={look.foot}>
            <TouchableOpacity style={{ width: '20%' }} onPress={() => handleOnpress('image')}>

                <Image style={look.image} source={val != 'image' ? require('./assets/images/application.png') : require('./assets/images/application.png')}></Image>

            </TouchableOpacity>
            <TouchableOpacity style={{ width: '20%' }} onPress={() => props.navigation.navigate('Products')}>

                <Image style={look.image} source={val != 'Product' ? require('./assets/images/list.png') : require('./assets/images/list.png')}></Image>

            </TouchableOpacity>
            <TouchableOpacity style={{ width: '20%' }} onPress={() => handleOnpress('coupen')}>

                <Image style={look.image} source={val != 'Product' ? require('./assets/images/plus.png') : require('./assets/images/plus.png')}></Image>


            </TouchableOpacity>
            <TouchableOpacity style={{ width: '20%' }} onPress={() => handleOnpress('coupen')}>

                <Image style={look.image} source={val != 'Product' ? require('./assets/images/settings.png') : require('./assets/images/settings.png')}></Image>


            </TouchableOpacity>
            <TouchableOpacity style={{ width: '20%', }} onPress={() => handleOnpress('coupen')}>

                <Image style={look.image} source={val != 'Product' ? require('./assets/images/add-user.png') : require('./assets/images/list.png')}></Image>


            </TouchableOpacity>


        </View>
    )
}
export const Inputbox = ({ ...props }) => {
    const { onPress, text } = props;
    return (
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }} onPress={onPress}>
            <TextInput placeholderTextColor={'#000'} placeholder='Please Select your Language' editable={false} style={[look.input, { borderColor: 'blue', borderWidth: 1, color: text !== '' ? 'blue' : '#000' }]} value={text}>
            </TextInput>
            <View style={{ position: 'relative', top: 25, right: 30 }}>

                <Image style={{ width: 10, height: 10 }} source={require('./assets/images/down.png')}></Image>
            </View>
        </TouchableOpacity>
    )
}


export const Modals = ({ ...props }) => {
    const {visible, onRequestClose, onPress, data,children} = props;
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(100, 100, 100, 0.2)', flex: 1, margin: 20 }}>
                <View style={{ width: '100%' }}>
                   {children}
                </View>
            </View>

        </Modal>

    )
}
const look = StyleSheet.create({

    foot: {
        backgroundColor: '#0e1024', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10
    },
    image: { width: 50, height: 40, resizeMode: 'contain', alignSelf: "center" },
    input: { backgroundColor: '#fff', borderRadius: 10, marginVertical: 5, height: 60, width: '100%' }
})