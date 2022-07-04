
import { useLinkProps } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { FlatList, Modal, View, StyleSheet, Text, Image, Alert, TextInput, TouchableOpacity, Picker, ScrollView } from 'react-native'
import { Footer, Inputbox, Modals, Header } from "./customcomponanats";
import { connect } from 'react-redux'
import { selectLanguage } from './translation/actions'
import { languages } from './translation/languages'
import AsyncStorage from '@react-native-async-storage/async-storage'




const Settings = ({ ...props }) => {

    const DATA = [
        {
            id: 1,
            language: 'Malayalam',
            key: 'malayalam'

        },
        {
            id: 2,
            language: 'English',
            key: 'english'
        },

    ];

    const [modalLAnguage, setModalLanguage] = useState(false);
    const [selectLanguage, setLanguage] = useState('Select Your Language');

    const [modalplace, setModalplace] = useState(false);
    const [SelectPlace, SetPlace] = useState([])
    const [PickPlace, SetPickPlace] = useState('Select Your Place')
    const [globalLanguage, setGlobalLanguage] = useState('english')


    useEffect(() => {
        FetchData()
    }, [])
    const FetchData = async () => {
        try {
            const response = await fetch('http://3.145.145.124:8000/contact/list/places/')
            const json = await response.json();
            SetPlace(json)

        } catch (error) {
            console.error(error)
        }
    }

    const ChangeModalLanguage = async (props, item) => {
        try {
            let info = JSON.stringify(languages[item.key])
            await AsyncStorage.setItem('language', info)
            await AsyncStorage.setItem('languagekey', item.key)
            props.selectLanguage(languages[item.key])
            setLanguage(item.language)
            setModalLanguage(false)
        } catch (e) {
            alert(e)
        }
    }
    const ChangeModalplace = (items) => {
        SetPickPlace(items)
        setModalplace(false)
    }
    const { change, splace, submit, } = props.selectedLanguage;
    return (

        <View style={styles.mainview}>
            <View style={{ flex: 4 }}>

                <Header source={require('./assets/images/arrow-left.png')} text='Settings' navigation={props.navigation}/>
                <View style={{ marginTop: 15 }}>
                    <Text style={styles.test}>{change}</Text>
                    <Inputbox text={selectLanguage} placeholder="Select Your Language" onPress={() => setModalLanguage(true)} />
                    <Text style={styles.test}>{splace}</Text>
                    <Inputbox text={PickPlace} placeholder="Select Your place" onPress={() => { setModalplace(true) }} />
                    <TouchableOpacity style={{ backgroundColor: 'blue', width: '100%', height: 60, marginTop: 35, alignSelf: 'center', borderRadius: 15, justifyContent: 'center' }}>
                        <Text style={{ color: '#FFF', fontSize: 22, fontWeight: '600', alignSelf: 'center', fontFamily: 'NuosuSIL-Regular' }}>{submit}</Text>

                    </TouchableOpacity>
                </View>
                <Modals visible={modalLAnguage} onRequestClose={() => { setModalLanguage(false) }}  >
                    <FlatList contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }}
                        data={DATA}
                        ListHeaderComponent={() => {
                            return (

                                <View><Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>Select your Language</Text></View>
                            )
                        }}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => { ChangeModalLanguage(props, item) }} >
                                    <Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>{item.language}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    >
                    </FlatList>
                </Modals>





                <Modals visible={modalplace} onRequestClose={() => { setModalplace(false) }}  >
                    <FlatList contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }}
                        data={SelectPlace}
                        ListHeaderComponent={() => {
                            return (

                                <View><Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>Select your place</Text></View>
                            )
                        }}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => { ChangeModalplace(item.titile_e) }}>
                                    <Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>{item.titile_e}    ({item.titile_m})</Text>
                                </TouchableOpacity>
                            )
                        }}
                    >
                    </FlatList>
                </Modals>
            </View>
            <View style={{ flex: 1, backgroundColor: '#0e1024' }}>
            </View>
            <View style={{ flex: .6, backgroundColor: '#0e1024', justifyContent: 'flex-end' }}>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({

    mainview: { backgroundColor: '#0e1024', flex: 1, padding: 15 },
    test: { color: '#fff', fontSize: 20, marginVertical: 0, fontFamily: 'NuosuSIL-Regular' },
    test1: { color: '#000' },
    input: { backgroundColor: '#fff', borderRadius: 10, marginVertical: 5, height: 60, width: '100%' }
})
const mapStateToProps = state => {
    return {
        selectedLanguage: state.language,
    }
}
export default connect(mapStateToProps, { selectLanguage })(Settings);

