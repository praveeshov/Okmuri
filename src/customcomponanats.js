import React, { Children, useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity, Image, DrawerItem, Modal,FlatList, } from 'react-native';
import Settings from './Settings';
import Dashboard from './dashboard';

export const Footer = ({...props}) => {
    const {navigation} = props;

    // const [val, SetCount] = useState('')


    const handleOnpress =() => {
        // SetCount(data)
        // if (data == 'image') {
            navigation.navigate('Dashboard')
        // }
        // if (data == 'coupen') {
            // props.navigation.navigate('fourthscreen')
        // }
    }


    return (

        <View style={look.foot}>
            <TouchableOpacity style={{ width: '20%' }} onPress={handleOnpress}>

                <Image style={look.image} source={require('./assets/images/application.png')}></Image>

            </TouchableOpacity>
            <TouchableOpacity style={{ width: '20%' }} onPress={() => props.navigation.navigate('Products')}>

                <Image style={look.image} source={ require('./assets/images/list.png')}></Image>

            </TouchableOpacity>
            <TouchableOpacity style={{ width: '20%' }} onPress={() => handleOnpress('coupen')}>

                <Image style={[look.image,{width:60,height:60}]} source={require('./assets/images/plus.png')}></Image>


            </TouchableOpacity>
            <TouchableOpacity style={{ width: '20%' }} onPress={() => props.navigation.navigate('Settings')}>

                <Image style={look.image} source={ require('./assets/images/settings.png')}></Image>


            </TouchableOpacity>
            <TouchableOpacity style={{ width: '20%', }} onPress={() => handleOnpress('coupen')}>

                <Image style={look.image} source={ require('./assets/images/list.png')}></Image>


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


export const Cards=({...props})=>{
    const {source,text1,test2,margin,onPress,colors,colour}=props
    return(
        <TouchableOpacity style={[look.card,{margin:margin,backgroundColor:colors}]} onPress={onPress}>
            <View style={{backgroundColor:colour,width:'50%',padding:10,borderRadius:10}}>

            <Image style={{width:50,height:50,resizeMode:'contain'}} source={source}></Image>
            </View>
            <Text style={look.tests}>{text1}</Text>
            <Text style={look.tests}>{test2}</Text>



        </TouchableOpacity>
    )
}






const look = StyleSheet.create({

    foot: {
        backgroundColor: '#0e1024', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10
    },
    image: { width: 50, height: 40, resizeMode: 'contain', alignSelf: "center" },
    input: { backgroundColor: '#fff', borderRadius: 10, marginVertical: 5, height: 60, width: '100%' },
    card:{width:"45%",padding:10,borderRadius:10},
    test: { color: '#fff', fontSize: 20, marginVertical: 15, fontFamily: 'NuosuSIL-Regular' },
    tests: { color: '#fff', fontSize: 20, marginVertical: 5, fontFamily: 'NuosuSIL-Regular' },
})