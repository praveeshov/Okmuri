import React, { Children, useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity, Image, DrawerItem, Modal, FlatList, ActivityIndicator } from 'react-native';
import Settings from './Settings';
import Dashboard from './dashboard';
import styles from 'react-native-material-dropdown/src/components/dropdown/styles';

export const Footer = ({ ...props }) => {
    const { navigation } = props;

    // const [val, SetCount] = useState('')


    const handleOnpress = () => {
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
            <TouchableOpacity style={{ width: '20%' }} onPress={() => props.navigation.navigate('contactlist')}>

                <Image style={look.image} source={require('./assets/images/list.png')}></Image>

            </TouchableOpacity>
            <TouchableOpacity style={{ width: '20%' }} onPress={() => props.navigation.navigate('addcontact')}>

                <Image style={[look.image, { width: 50, height: 50 }]} source={require('./assets/images/plus.png')}></Image>


            </TouchableOpacity>
            <TouchableOpacity style={{ width: '20%' }} onPress={() => props.navigation.navigate('Settings')}>

                <Image style={look.image} source={require('./assets/images/settings.png')}></Image>


            </TouchableOpacity>
            <TouchableOpacity style={{ width: '20%', }} onPress={() => handleOnpress('coupen')}>

                <Image style={look.image} source={require('./assets/images/add-user.png')}></Image>


            </TouchableOpacity>


        </View>
    )
}
export const Inputbox = ({ ...props }) => {
    const { onPress, text, placeholder } = props;
    return (
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', }} onPress={onPress}>
            <TextInput placeholderTextColor={'#000'} placeholder={placeholder}  editable={false} style={[look.input,  { paddingLeft: 10, borderColor: 'blue', borderWidth: 1, color: text !== '' ? 'blue' : '#000' }]} value={text}>
            </TextInput>
            <View style={{ position: 'relative', top: 30, right: 30 }}>

                <Image style={{ width: 10, height: 10 }} source={require('./assets/images/down.png')}></Image>
            </View>
        </TouchableOpacity>
    )
}

export const SinmpleInputbox = ({ ...props }) => {
    const { onPress, text, placeholder } = props;
    return (
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }} onPress={onPress}>
            <TextInput placeholderTextColor={'#000'} placeholder={placeholder} style={[look.input, { paddingLeft: 10, borderColor: 'blue', borderWidth: 1, color: text !== '' ? 'blue' : '#000' }]} value={text}>
            </TextInput>

        </TouchableOpacity>
    )
}


export const Modals = ({ ...props }) => {
    const { visible, onRequestClose, onPress, data, children } = props;
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


export const Cards = ({ ...props }) => {
    const { source, text1, test2, margin, onPress, colors, colour } = props
    return (
        <TouchableOpacity style={[look.card, { margin: margin, backgroundColor: colors }]} onPress={onPress}>
            <View style={{ backgroundColor: colour, width: '50%', padding: 10, borderRadius: 10 }}>

                <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={source}></Image>
            </View>
            <Text style={look.tests}>{text1}</Text>
            <Text style={look.tests1}>{test2}</Text>



        </TouchableOpacity>
    )
}

export const Activeindicator = () => (
    <View style={[look.container, look.horizontal]}>


        <ActivityIndicator size="large" color="#0000ff" />
    </View>
);

export const Header = ({ ...props }) => {
    const { source, text } = props
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
            <Image style={{ width: 30, height: 30 }} source={source} />
            <Text style={{ color: '#fff', fontSize: 30, fontFamily: 'NuosuSIL-Regular' }}> {text}</Text>
        </View>
    )
}
export const Listcard = ({ ...props }) => {
    const { source, text, text1, phone, service, maincat } = props
    return (
        <View style={{ backgroundColor: '#201b42', padding: 20, marginVertical: 5, borderRadius: 10 }}>
            <View style={{ flexDirection: 'row', }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#181336', padding: 10, borderRadius: 10 }}>

                    <Image style={{ width: 30, height: 30, }} source={source}></Image>
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: '#fff', fontSize: 25, fontFamily: 'NuosuSIL-Regular' }}>{text}</Text>
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'NuosuSIL-Regular' }}>{text1}</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginVertical: 10 }}>
                <Text style={look.cadtext}>Phone:</Text>
                <Text style={look.cadtext}>{phone}</Text>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={look.cadtext}>Service:</Text>
                <Text style={look.cadtext}>{maincat}  ({service})</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <TouchableOpacity style={look.cntctbtn}>
                    <Image style={{ width: 30, height: 30, resizeMode: 'contain', alignSelf: 'center', }} source={require('./assets/images/whatsapp.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={look.cntctbtn}>
                    <Image style={{ width: 30, height: 30, resizeMode: 'contain', alignSelf: 'center', }} source={require('./assets/images/phone.png')}></Image>

                </TouchableOpacity>
            </View>

        </View>
    )
}




const look = StyleSheet.create({

    foot: {
        backgroundColor: '#0e1024', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20
    },
    image: { width: 30, height: 30, resizeMode: 'contain', alignSelf: "center" },
    input: { backgroundColor: '#fff', borderRadius: 10, marginVertical: 5, height: 60, width: '100%' },
    card: { width: "45%", padding: 10, borderRadius: 10 },
    test: { color: '#fff', fontSize: 20, marginVertical: 15, fontFamily: 'NuosuSIL-Regular' },
    tests: { color: '#fff', fontSize: 20, marginVertical: 5, fontFamily: 'NuosuSIL-Regular' },
    tests1: { color: '#fff', fontSize: 15, marginVertical: 5, fontFamily: 'NuosuSIL-Regular' },
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    cadtext: { color: '#fff', fontSize: 20, fontFamily: 'NuosuSIL-Regular' },
    cntctbtn: { backgroundColor: '#181336', width: '48%', height: 50, marginTop: 10, borderRadius: 10, justifyContent: 'center' }
})