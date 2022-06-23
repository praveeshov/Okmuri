
import { useLinkProps } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { FlatList, Modal, View, StyleSheet, Text, Image, Alert, TextInput, TouchableOpacity, Picker, ScrollView } from 'react-native'
import { Footer, Inputbox, Modals ,Header} from "./customcomponanats";


const Settings = ({ ...props }) => {





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


    


    const [modalLAnguage, setModalLanguage] = useState(false);
    const [selectLanguage, setLanguage] = useState();

    const [modalplace, setModalplace] = useState(false);
    const [SelectPlace, SetPlace] = useState([])
    const [PickPlace,SetPickPlace]=useState()

    useEffect(() => {
        FetchData()
    },[])
    const FetchData = async () => {

        try {
            const response = await fetch('http://3.145.145.124:8000/contact/list/places/')
            const json = await response.json();
            SetPlace(json)
           
        } catch (error) {
            console.error(error)
        }
    }

    const ChangeModalLanguage = (item) => {
        // console.log(item);

        setLanguage(item)
        setModalLanguage(false)
    }
    const ChangeModalplace = (items) => {
        // console.log(items);
        SetPickPlace(items)
        setModalplace(false)
    }

    // const setmodalenable = () => {
    //     console.warn('ddddddddddd');
    //     setModalLanguage(true)
    // }

    return (
        <View style={styles.mainview}>
            <View style={{ flex: 5 }}>
               
                <Header source={require('./assets/images/arrow-left.png')} text='Settings'/>
                <View style={{ marginTop: 15 }}>
                    <Text style={styles.test}>Change your Language</Text>
                    {/* <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => setModalLanguage(true)}>
                        <TextInput placeholderTextColor={'#000'} placeholder='Please Select your Language' editable={false} style={[styles.input, {borderColor:'blue',borderWidth:1, color: selectLanguage !== '' ? 'blue' : '#000' }]} value={selectLanguage}>
                        </TextInput>
                        <View style={{ position: 'relative', top: 25, right: 30 }}>

                            <Image style={{ width: 10, height: 10 }} source={require('./assets/images/down.png')}></Image>
                        </View>
                    </TouchableOpacity> */}
                    <Inputbox text={selectLanguage} placeholder="Select Your Language" onPress={() => setModalLanguage(true)} />
                    <Text style={styles.test}>Change your Place</Text>
                    <Inputbox text={PickPlace} placeholder="Select Your place" onPress={() => {setModalplace(true)} }/>

                    <TouchableOpacity style={{ backgroundColor: 'blue', width: '100%', height: 60, marginTop: 35, alignSelf: 'center', borderRadius: 15, justifyContent: 'center' }}>
                        <Text style={{ color: '#FFF', fontSize: 22, fontWeight: '600', alignSelf: 'center', fontFamily: 'NuosuSIL-Regular' }}>Submit</Text>

                    </TouchableOpacity>
                </View>
                <Modals visible={modalLAnguage} onRequestClose={() =>{ setModalLanguage(false) }}  >
                    <FlatList contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }}
                        data={DATA}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => {ChangeModalLanguage(item.language)}} >
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
                        renderItem={({ item }) => {
                            // console.log(item.titile_e);
                            return (
                                <TouchableOpacity onPress={() => {ChangeModalplace(item.titile_e)} }>
                                    <Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>{item.titile_e}    ({item.titile_m})</Text>
                                </TouchableOpacity>
                            )
                        }}
                    >
                    </FlatList>
                </Modals>





            </View>
            <View style={{ flex: 2, backgroundColor: '#0e1024' }}>

            </View>
            <View style={{ flex: .6, backgroundColor: '#0e1024', justifyContent: 'flex-end' }}>
                {/* <Footer navigation={props.navigation} /> */}
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