import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Header, Listcard, Inputbox, Modals } from './customcomponanats';
import { Apidatas } from './Functions';


const Contactlist = () => {
    const [contact, Setcontact] = useState()
    const [dropdown, Setdropdown] = useState(false)
    const [modalplace, Setmodalplace] = useState(false)

    const [places,Setplaces]=useState()
    const [modalmaincats,Setmodalmaincats]=useState(false)
    useEffect(() => {
        Fetchdata()

    }, [])

    const Fetchdata = async () => {
        const source = '/contact/list/contacts/';
        const method = 'GET';
        const params = '';
        const result = await Apidatas(source, method, params)
        Setcontact(result)

        const source1 = '/contact/list/contacts/';
        const method1 = 'GET';
        const params1 = '';
        const result1 = await Apidatas(source, method, params)
        Setplaces(result)


        // try {
        //     const response = await fetch('http://3.145.145.124:8000/contact/list/contacts/')
        //     const json = await response.json();
        //     Setcontact(json)
        // } catch (error) {
        //     console.error(error);
        // }
    }
    const urls = 'http://3.145.145.124:8000'

    return (
        <View style={styles.mainview}>
            <Header source={require('./assets/images/arrow-left.png')} text='Contact List' />
            <View style={{ backgroundColor: '#201b42', width: '100%', borderRadius: 10, alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
                <TouchableOpacity onPress={() => Setdropdown(!dropdown)} style={{ alignItems: 'center', height: 50, backgroundColor: '#181336', width: '95%', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'NuosuSIL-Regular', }}>Change Filter Options</Text>
                    <Image style={{ width: 30, height: 30, resizeMode: 'contain', alignSelf: 'center', }} source={require('./assets/images/selective.png')}></Image>
                </TouchableOpacity>

                {dropdown ?
                    <View style={{ backgroundColor: '#201b42', padding: 20, width: '95%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                            <Text style={{ color: '#fff', fontFamily: 'NuosuSIL-Regular', fontSize: 20 }}>Place</Text>

                            <View style={{ width: '70%', borderRightColor: 'red' }}>

                                <Inputbox placeholder='hai' onPress={() => Setmodalplace(true)} />
                            </View>
                            <Modals visible={modalplace} onRequestClose={() => { Setmodalplace(false) }}>
                               
                                {/* <FlatList
                                    data={Selectmaincat}
                                    contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }}
                                    renderItem={({ item }) => {
                                        return (
                                            <TouchableOpacity onPress={() => ChangeMaincat(item.slug)}>
                                                <Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>{item.slug}</Text>
                                            </TouchableOpacity>
                                        )
                                    }}>
                                </FlatList> */}
                            </Modals>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexWrap: 'wrap' }}>

                                <Text style={{ color: '#fff', fontFamily: 'NuosuSIL-Regular', fontSize: 20, }} >Main </Text>
                                <Text style={{ color: '#fff', fontFamily: 'NuosuSIL-Regular', fontSize: 20, }} >categories</Text>
                            </View>

                            <View style={{ width: '70%', borderRightColor: 'red' }}>

                                <Inputbox placeholder='hai' onPress={()=>{Setmodalmaincats(true)}}/>
                            </View>
                            <Modals visible={modalmaincats} onRequestClose={() => {Setmodalmaincats(false)}}>
                                {/* <FlatList
                                    data={Selectmaincat}
                                    contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }}
                                    renderItem={({ item }) => {
                                        return (
                                            <TouchableOpacity onPress={() => ChangeMaincat(item.slug)}>
                                                <Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>{item.slug}</Text>
                                            </TouchableOpacity>
                                        )
                                    }}>
                                </FlatList> */}
                            </Modals>
                            

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexWrap: 'wrap' }}>

                                <Text style={{ color: '#fff', fontFamily: 'NuosuSIL-Regular', fontSize: 20, }} >Sub </Text>
                                <Text style={{ color: '#fff', fontFamily: 'NuosuSIL-Regular', fontSize: 20, }} >categories</Text>
                            </View>

                            <View style={{ width: '70%', borderRightColor: 'red' }}>

                                <Inputbox placeholder='hai' />
                            </View>
                            {/* <Modals visible={}>

                            </Modals> */}


                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <TouchableOpacity style={styles.buttons}>
                                <Text style={{ color: 'blue', fontSize: 22, fontWeight: '600', alignSelf: 'center', fontFamily: 'NuosuSIL-Regular' }}>Reset</Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.buttons, { backgroundColor: 'blue' }]} >
                                <Text style={{ color: '#FFF', fontSize: 22, fontWeight: '600', alignSelf: 'center', fontFamily: 'NuosuSIL-Regular' }}>Submit</Text>

                            </TouchableOpacity>
                        </View>
                    </View> : null}
            </View>

            <FlatList
                data={contact}
                // contentContainerStyle={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }}
                renderItem={({ item }) => {
                    console.log(item.main_cat.image);
                    return (
                        <Listcard service={item.sub_cat.titile_e} maincat={item.main_cat.titile_e} text={item.name_e} text1={item.place.titile_e} phone={item.phone} source={{ uri: urls + item.main_cat.image }} />

                    )
                }}
            >

            </FlatList>

        </View>
    )
}

const styles = StyleSheet.create({
    mainview: { flex: 1, backgroundColor: '#0e1024', padding: 10, },
    test: { color: '#fff', fontSize: 20, marginVertical: 15, fontFamily: 'NuosuSIL-Regular', marginLeft: 10 },
    buttons: { borderColor: 'blue', borderWidth: 2, backgroundColor: '#fff', width: '48%', marginTop: 10, height: 60, borderRadius: 15, justifyContent: 'center' }
})

export default Contactlist;