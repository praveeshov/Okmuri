
import React, { useState } from "react";
import { FlatList, Modal, View, StyleSheet, Text, Image, Alert, TextInput, TouchableOpacity, Picker, ScrollView } from 'react-native'
import { Footer, Inputbox, Modals } from "./customcomponanats";


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
            id: 6,
            place: 'Kazarkod'
        },
        {
            id: 7,
            place: 'Vayanad'
        },
        {
            id: 8,
            place: 'Pathanamthitta'
        },
        {
            id: 9,
            place: 'Kozhikod'
        },
        {
            id: 10,
            place: 'Malappuram'
        },
        {
            id: 11,
            place: 'Idukki'
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
            id: 16,
            place: 'Kazarkod'
        },
        {
            id: 17,
            place: 'Vayanad'
        },
        {
            id: 18,
            place: 'Pathanamthitta'
        },
    ];
    const [modalLAnguage, setModalLanguage] = useState(false);
    const [modalplace, setModalplace] = useState(false);
    const [selectLanguage, setLanguage] = useState();
    const [SelectPlace, SetPlace] = useState()


    const ChangeModalLanguage = (item) => {
        // console.log(item);
        
        setLanguage(item)
        setModalLanguage(false)
    }
    const ChangeModalplace = (items) => {
        SetPlace(items)
        setModalplace(false)
    }

    // const setmodalenable = () => {
    //     console.warn('ddddddddddd');
    //     setModalLanguage(true)
    // }

    return (
        <View style={styles.mainview}>
            <View style={{ flex: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
                    <Image style={{ width: 30, height: 30 }} source={require('./assets/images/arrow-left.png')} />
                    <Text style={{ color: '#fff', fontSize: 30, fontFamily: 'NuosuSIL-Regular' }}>  Settings</Text>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={styles.test}>Change your Language</Text>
                    {/* <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => setModalLanguage(true)}>
                        <TextInput placeholderTextColor={'#000'} placeholder='Please Select your Language' editable={false} style={[styles.input, {borderColor:'blue',borderWidth:1, color: selectLanguage !== '' ? 'blue' : '#000' }]} value={selectLanguage}>
                        </TextInput>
                        <View style={{ position: 'relative', top: 25, right: 30 }}>

                            <Image style={{ width: 10, height: 10 }} source={require('./assets/images/down.png')}></Image>
                        </View>
                    </TouchableOpacity> */}
                    <Inputbox text={selectLanguage} onPress={() => setModalLanguage(true)} />
                    <Text style={styles.test}>Change your Place</Text>
                    <Inputbox text={SelectPlace} onPress={() =>  setModalplace(true) }/>

                    <TouchableOpacity style={{ backgroundColor: 'blue', width: '100%', height: 60, marginTop: 35, alignSelf: 'center', borderRadius: 15, justifyContent: 'center' }}>
                        <Text style={{ color: '#FFF', fontSize: 22, fontWeight: '600', alignSelf: 'center', fontFamily: 'NuosuSIL-Regular' }}>Submit</Text>

                    </TouchableOpacity>
                </View>
                <Modals visible={modalLAnguage}  onRequestClose={() => { setModalLanguage(false) }}  >
                    <FlatList contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }}
                        data={DATA}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={()=>ChangeModalLanguage(item.language)} >
                                    <Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>{item.language}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    >
                    </FlatList>
                </Modals>





                <Modals visible={modalplace}  onRequestClose={() => { setModalplace(false) }}  >
                    <FlatList contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }}
                        data={DATAPLACE}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={()=>ChangeModalplace(item.place)} >
                                    <Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>{item.place}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    >
                    </FlatList>
                </Modals>


                {/* <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalLAnguage}
                    onRequestClose={() => {
                        // Alert.alert("Modal has been closed.");
                        setModalLanguage(!modalLAnguage);
                    }}
                >
                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(100, 100, 100, 0.2)', flex: 1, margin: 20 }}>
                        <View style={{ width: '100%' }}>
                            <FlatList contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }} data={DATA} renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity onPress={() => ChangeModalLanguage(item.language)} >

                                        <Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>{item.language}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                            >

                            </FlatList>
                        </View>
                    </View>

                </Modal> */}


                {/* <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalplace}
                    onRequestClose={() => {
                        // Alert.alert("Modal has been closed.");
                        setModalplace(!modalplace);
                    }}
                >
                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(100, 100, 100, 0.2)', flex: 1, margin: 20 }}>
                        <View style={{ width: '100%' }}>
                            <FlatList contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }} data={DATAPLACE} renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity onPress={() => ChangeModalplace(item.place)}>

                                        <Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>{item.place}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                            >

                            </FlatList>
                        </View>
                    </View>

                </Modal> */}



            </View>
            <View style={{ flex: 3, backgroundColor: '#0e1024' }}>

            </View>
            <View style={{ flex: .6, backgroundColor: '#0e1024', justifyContent: 'flex-end' }}>
                <Footer />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({

    mainview: { backgroundColor: '#0e1024', flex: 1, padding: 15 },
    test: { color: '#fff', fontSize: 20, marginVertical: 15, fontFamily: 'NuosuSIL-Regular' },
    test1: { color: '#000' },
    input: { backgroundColor: '#fff', borderRadius: 10, marginVertical: 5, height: 60, width: '100%' }
})


export default Settings;