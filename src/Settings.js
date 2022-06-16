
import React, { useState } from "react";
import { FlatList, Modal, View, StyleSheet, Text, Image, Alert, TextInput, TouchableOpacity, Picker } from 'react-native'


const Settings = () => {


    const DATA = [
        {
            id: 1,
            language: 'Malayalam',

        },
        {
            id: 2,
            language: 'English'
        },
        {
            id: 3,
            language: 'kannada'
        },
        {
            id: 4,
            language: 'Telugu'
        },
        {
            id: 5,
            language: 'marati'
        }
    ];


    const DATAPLACE = [
        {
            id: 1,
            place: 'kochi',

        },
        {
            id: 2,
            place: 'Alappuzha'
        },
        {
            id: 3,
            place: 'Kannur'
        },
        {
            id: 4,
            place: 'Palakkad'
        },
        {
            id: 5,
            place: 'Thrissur'
        },
        {
            id:6,
            place:'Kazarkod'
        },
        {
            id:7,
            place:'Vayanad'
        },
        {
            id:8,
            place:'Pathanamthitta'
        },
        {
            id:9,
            place:'Kozhikod'
        },
        {
            id:10,
            place:'Malappuram'
        },
        {
            id:11,
            place:'Idukki'
        },
        {
            id: 12,
            place: 'Alappuzha'
        },
        {
            id: 13,
            place: 'Kannur'
        },
        {
            id: 14,
            place: 'Palakkad'
        },
        {
            id: 15,
            place: 'Thrissur'
        },
        {
            id:16,
            place:'Kazarkod'
        },
        {
            id:17,
            place:'Vayanad'
        },
        {
            id:18,
            place:'Pathanamthitta'
        },
    ];
    const [modalLAnguage, setModalLanguage] = useState(false);
    const [modalplace, setModalplace] = useState(false);
    const [selectLanguage,setLanguage]=useState();
    const [SelectPlace,SetPlace]=useState()


    const ChangeModalLanguage = (languages) => {
        // console.warn('id',id);
        setLanguage(languages)
        setModalLanguage(false)
    }
    const ChangeModalplace=(place)=>{
        SetPlace(place)
        setModalplace(false)
    }

    return (
        <View style={styles.mainview}>
            <View style={{flex:4}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 30, height: 30 }} source={require('./assets/images/arrow-left.png')} />
                <Text style={{ color: '#fff', fontSize: 30 }}>  Settings</Text>
            </View>
            <View style={{ marginTop: 15 }}>
                <Text style={styles.test}>Change your Language</Text>
                <TouchableOpacity onPress={() => setModalLanguage(true)}>
                    <TextInput placeholder='Please Select your Language' editable={false} style={styles.input} value={selectLanguage}></TextInput>
                </TouchableOpacity>
                <Text style={styles.test}>Change your Place</Text>

                <TouchableOpacity onPress={() => setModalplace(true)}>

                    <TextInput placeholder='Please Select your Place'editable={false} style={styles.input}  value={SelectPlace}></TextInput>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalLAnguage}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalLanguage(!modalLAnguage);
                }}
            >
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(100, 100, 100, 0.2)', flex: 1, margin: 20 }}>
                    <View style={{  width: '100%' }}>
                        <FlatList contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }} data={DATA} renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={()=>ChangeModalLanguage(item.language)} >

                                    <Text style={{ margin: 20 }}>{item.language}</Text>
                                </TouchableOpacity>
                            )
                        }}
                        >

                        </FlatList>
                    </View>
                </View>

            </Modal>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalplace}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalplace(!modalplace);
                }}
            >
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(100, 100, 100, 0.2)', flex: 1, margin: 20 }}>
                    <View style={{   width: '100%' }}>
                        <FlatList contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }} data={DATAPLACE} renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={()=>ChangeModalplace(item.place)}>

                                    <Text style={{ margin: 20 }}>{item.place}</Text>
                                </TouchableOpacity>
                            )
                        }}
                        >

                        </FlatList>
                    </View>
                </View>

            </Modal>



            </View>
            <View style={{flex:3,backgroundColor:'red'}}>

            </View>
            <View style={{flex:1,backgroundColor:'cyan'}}>

            </View>
        </View >
    )
}

const styles = StyleSheet.create({

    mainview: { backgroundColor: '#0e1024', flex: 1, padding: 15 },
    test: { color: '#fff', fontSize: 20, margin: 5 },
    test1: { color: '#000' },
    input: { backgroundColor: '#fff', borderRadius: 10, margin: 5, }
})


export default Settings;