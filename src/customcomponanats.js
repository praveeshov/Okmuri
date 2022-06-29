import React, { Children, useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity, Image, DrawerItem, Modal, FlatList, ActivityIndicator } from 'react-native';
import Settings from './Settings';
import Dashboard from './dashboard';
import styles from 'react-native-material-dropdown/src/components/dropdown/styles';

export const Footer = ({ ...props }) => {
    const { navigation } = props;
    const [navData, setNavData] = useState('')


    const clickNavigation = (data) => {
        setNavData(data)
        if (data == 'contact') {
            navigation.navigate('contactlist')
        } else if (data == 'addcntct') {
            navigation.navigate('addcontact')
        } else if (data == 'settings') {
            navigation.navigate('Settings')
        } else if (data == 'dashboard') {
            navigation.navigate('Dashboard')
        } else if (data == 'user') {
            navigation.navigate('aboutadmin')
        }
    }


    return (

        <View style={look.foot}>
            <TouchableOpacity style={{ width: '20%' }} onPress={() => clickNavigation('dashboard')}>

                <Image style={look.image} source={navData == 'dashboard' ? require('./assets/images/application1.png') : require('./assets/images/application.png')}></Image>

            </TouchableOpacity>
            <TouchableOpacity style={{ width: '20%' }} onPress={() => clickNavigation('contact')}>

                <Image style={look.image} source={navData == 'contact' ? require('./assets/images/list1.png') : require('./assets/images/list.png')}></Image>

            </TouchableOpacity>
            <TouchableOpacity style={{ width: '20%' }} onPress={() => clickNavigation('addcntct')}>

                <Image style={[look.image, { width: 50, height: 50 }]} source={require('./assets/images/plus.png')}></Image>


            </TouchableOpacity>
            <TouchableOpacity style={{ width: '20%' }} onPress={() => clickNavigation('settings')}>

                <Image style={look.image} source={navData == 'settings' ? require('./assets/images/settings1.png') : require('./assets/images/settings.png')}></Image>


            </TouchableOpacity>
            <TouchableOpacity style={{ width: '20%', }} onPress={() => clickNavigation('user')}>

                <Image style={look.image} source={require('./assets/images/add-user.png')}></Image>


            </TouchableOpacity>


        </View>
    )
}
export const Inputbox = ({ ...props }) => {
    const { onPress, text, placeholder, emptycheck,title ,emptycheck1} = props;
    return (
        <View>
            <Text style={[styles.testnew, { color: emptycheck1 }]}>{title}</Text>


            <TouchableOpacity style={{ borderRadius: 10, padding: 20, marginVertical: 5, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', borderColor: emptycheck, borderWidth: 1 }} onPress={onPress}>
                {/* <TextInput placeholderTextColor={'#000'} placeholder={placeholder}  editable={false} style={[look.input,  { paddingLeft: 10, borderColor: 'blue', borderWidth: 1, color: text !== '' ? 'blue' : '#000' ,fontSize:18,fontWeight:'bold',}]} numberOfLines={1} value={text}>
            </TextInput> */}
                <View style={{ width: '70%' }}>

                    <Text style={{ color: text == placeholder ? '#b3b3b5' : 'blue', fontSize: 18, fontWeight: 'bold' }} numberOfLines={1}>{text}</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>

                    <Image style={{ width: 10, height: 10 }} source={require('./assets/images/down.png')}></Image>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export const SinmpleInputbox = ({ ...props }) => {
    const { onPress, text, placeholder, onChangeText, emptycheck ,title,emptycheck1} = props;

    return (
        <View>
            <Text style={[styles.testnew, { color: emptycheck1 }]}>{title}</Text>


            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }} onPress={onPress}>
                <TextInput placeholderTextColor={'#b3b3b5'} placeholder={placeholder} style={[look.input, { paddingLeft: 10, borderColor: emptycheck, borderWidth: 1, color: text !== '' ? 'blue' : '#000' }]} value={text} onChangeText={onChangeText}>
                </TextInput>

            </TouchableOpacity>
        </View>
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
            <TouchableOpacity>
                <Image style={{ width: 30, height: 30 }} source={source} />
            </TouchableOpacity>
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
    testnew: {  fontFamily: 'NuosuSIL-Regular', fontSize: 17, marginVertical: 5 },

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