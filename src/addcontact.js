import React, { useEffect, useState } from 'react';
import { Modal, View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { SinmpleInputbox, Inputbox, Modals, Activeindicator, Header, } from './customcomponanats';
import { Apidatas } from './Functions';

const Addcontact = () => {

    const [modalplace, SetModalPlace] = useState(false)
    const [Selectplaces, SetPlaces] = useState([]);
    const [place, Showplace] = useState('')

    const [ModalMaincat, ShowModalMaincat] = useState(false)
    const [Selectmaincat, SetMaincat] = useState([])
    const [Maincat, ShowMaincat] = useState('tasci')

    const [ModalSubcat, showModalSubcat] = useState(false)
    const [SelectSubcat, SetSubat] = useState([])
    const [Subcat, ShowSubcat] = useState('')


    const [indicator, SetIndicator] = useState(false)

    useEffect(() => {
        fetchdata()


    }, [])

    const fetchdata = async () => {
        const source = '/contact/list/places/';
        const methord = 'GET'
        const params = ''

        SetIndicator(true)
        const result = await Apidatas(source, methord, params)
        // console.log(result);
        SetPlaces(result)

        // try {
        //     const response = await fetch('http://3.145.145.124:8000/contact/list/places/')
        //     const json = await response.json();
        //     SetPlaces(json)
        // } catch (error) {
        //     console.error(error);
        // }
        const source1 = '/contact/list/category/';
        const methord1 = 'GET'
        const params1 = ''
        const data = await Apidatas(source1,methord1,params1)
        SetMaincat(data)

        // try {
        //     const response = await fetch('http://3.145.145.124:8000/contact/list/category/')
        //     const json = await response.json();
        //     SetMaincat(json)
        //     Subcatinputclick(json[0].slug)

        // } catch (error) {
        //     console.error(error);
        // }
        SetIndicator(false)

    }

    const inputClick = () => {
        SetModalPlace(true)

    }
    const ChangemodalPlace = (items) => {
        SetModalPlace(false)
        Showplace(items)
    }


    const Maincatinputclick = () => {
        ShowModalMaincat(true)
    }
    const ChangeMaincat = (items) => {
        SetIndicator(true)
        ShowModalMaincat(false)
        ShowMaincat(items)
        Subcatinputclick(items)
        ShowSubcat('')
        SetIndicator(false)

    }


    const Subcatinputclick = async (items) => {

        SetIndicator(true)
        const source1 = '/contact/list/sub-category/?main_cat='+items;
        const methord1 = 'GET'
        const params1 = ''
        const data = await Apidatas(source1,methord1,params1)
        SetSubat(data)

        // try {
        //     const response = await fetch('http://3.145.145.124:8000/contact/list/sub-category/?main_cat=' + items)
        //     const json = await response.json();
        //     SetSubat(json)

        // } catch (error) {
        //     console.error(error);
        // }
        SetIndicator(false)

    }

    const ChangeSubcat = (item) => {
        ShowSubcat(item)
        showModalSubcat(false)

    }

    return (
        <ScrollView style={styles.mainview}>

            <Header source={require('./assets/images/arrow-left.png')} text='Add Contact' />

            {/* {indicator ?
            <Text style={styles.test}>jvtyvtyvgjyvgyvy</Text>
            :null} */}
            <View>
                <Text style={styles.test}>Enter Your Name in English</Text>
                <SinmpleInputbox placeholder="Enter Your Name in English"></SinmpleInputbox>
                <Text style={styles.test}>Enter Your Name in Malayalam</Text>
                <SinmpleInputbox placeholder="Enter Your Name in Malayalam"></SinmpleInputbox>
                <Text style={styles.test}>Enter Your Mobile Number</Text>
                <SinmpleInputbox placeholder="Enter Your Mobile Number"></SinmpleInputbox>
                <Text style={styles.test}>Select Your Place</Text>
                <Inputbox placeholder='Please Select your Place' text={place} onPress={() => inputClick()}></Inputbox>
                <Text style={styles.test}>Select One Main Category</Text>
                <Inputbox placeholder='Select One Category' text={Maincat} onPress={() => Maincatinputclick()}></Inputbox>
                <Text style={styles.test}>Select One Sub Category</Text>
                <Inputbox placeholder='Please Select your Sub Category' text={Subcat} onPress={() => showModalSubcat(!ModalSubcat)}></Inputbox>
                <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginBottom: 50 }}>

                    <TouchableOpacity style={{ borderColor: 'blue', borderWidth: 2, backgroundColor: '#fff', width: '45%', marginTop: 10, height: 60, alignSelf: 'center', borderRadius: 15, justifyContent: 'center' }}>
                        <Text style={{ color: 'blue', fontSize: 22, fontWeight: '600', alignSelf: 'center', fontFamily: 'NuosuSIL-Regular' }}>Reset</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: 'blue', width: '45%', marginTop: 10, height: 60, alignSelf: 'center', borderRadius: 15, justifyContent: 'center' }} >
                        <Text style={{ color: '#FFF', fontSize: 22, fontWeight: '600', alignSelf: 'center', fontFamily: 'NuosuSIL-Regular' }}>Submit</Text>

                    </TouchableOpacity>


                </View>

            </View>



            <Modals visible={modalplace} onRequestClose={() => { SetModalPlace(false) }}>
                <FlatList
                    data={Selectplaces}
                    contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => ChangemodalPlace(item.titile_e)}>
                                <Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>{item.titile_e} ({item.titile_m})</Text>
                            </TouchableOpacity>
                        )
                    }}>
                </FlatList>
            </Modals>

            <Modals visible={ModalMaincat} onRequestClose={() => { ShowModalMaincat(false) }}>
                <FlatList
                    data={Selectmaincat}
                    contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => ChangeMaincat(item.slug)}>
                                <Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>{item.slug}</Text>
                            </TouchableOpacity>
                        )
                    }}>
                </FlatList>
            </Modals>

            <Modals visible={ModalSubcat} onRequestClose={() => { showModalSubcat(false) }}>
                <FlatList
                    data={SelectSubcat}
                    contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => ChangeSubcat(item.titile_e)}>
                                <Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>{item.titile_e}    ({item.titile_m})</Text>
                            </TouchableOpacity>
                        )
                    }}>
                </FlatList>
            </Modals>
            <Modals visible={indicator} onRequestClose={() => { SetIndicator(false) }}>
                <Activeindicator />
            </Modals>
        </ScrollView>
    )
}

export default Addcontact;

const styles = StyleSheet.create({
    test: { color: '#fff', fontFamily: 'NuosuSIL-Regular', fontSize: 17, marginVertical: 5 },
    mainview: { backgroundColor: '#0e1024', flex: 1, padding: 10 }
})