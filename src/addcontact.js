import React, { useEffect, useState } from 'react';
import { Modal, View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView, ActivityIndicator ,StatusBar} from 'react-native';
import { SinmpleInputbox, Inputbox, Modals, Activeindicator, Header, } from './customcomponanats';
import { Apidatas } from './Functions';

const Addcontact = () => {

    const [modalplace, SetModalPlace] = useState(false)
    const [Selectplaces, SetPlaces] = useState([]);
    const [place, Showplace] = useState('Select Your Place')

    const [ModalMaincat, ShowModalMaincat] = useState(false)
    const [Selectmaincat, SetMaincat] = useState([])
    const [Maincat, ShowMaincat] = useState('Select One category')

    const [ModalSubcat, showModalSubcat] = useState(false)
    const [SelectSubcat, SetSubat] = useState([])
    const [Subcat, ShowSubcat] = useState('Select One category')


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
        Showplace(items.titile_e+'  ('+items.titile_m+')')
    }


    const Maincatinputclick = () => {
        ShowModalMaincat(true)
    }
    const ChangeMaincat = (items) => {
        SetIndicator(true)
        ShowModalMaincat(false)
        ShowMaincat(items.titile_e+'  ('+items.titile_m+')')
        Subcatinputclick(items.slug)
        ShowSubcat('Select One Category')
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
        ShowSubcat(item.titile_e+'  ('+item.titile_m+')')
        showModalSubcat(false)
    }

    const reSet=()=>{
        Showplace('Select Your Place')
        ShowMaincat('Select One Category')
        ShowSubcat('Select One Category')

    }

    return (
        <ScrollView style={styles.mainview}>
            <StatusBar backgroundColor={'#0e1024'} barStyle={'light-content'}/>
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
                <Inputbox placeholder={'Select Your Place'} text={place}  onPress={() => inputClick()}></Inputbox>
                <Text style={styles.test}>Select One Main Category</Text>
                <Inputbox placeholder='Select One Category' text={Maincat} onPress={() => Maincatinputclick()}></Inputbox>
                <Text style={styles.test}>Select One Sub Category</Text>
                <Inputbox placeholder='Select One Category' text={Subcat} onPress={() => showModalSubcat(!ModalSubcat)}></Inputbox>
                <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginBottom: 50 }}>
                    <TouchableOpacity onPress={()=>{reSet()}} style={{ borderColor: 'blue', borderWidth: 2, backgroundColor: '#fff', width: '45%', marginTop: 10, height: 60, alignSelf: 'center', borderRadius: 15, justifyContent: 'center' }}>
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
                            <TouchableOpacity onPress={() => ChangemodalPlace(item)}>
                                <Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>{item.titile_e} ({item.titile_m})</Text>
                            </TouchableOpacity>
                        )
                    }}>
                </FlatList>
            </Modals>

            <Modals visible={ModalMaincat} onRequestClose={() => { ShowModalMaincat(false) }}>
                <FlatList
                    data={Selectmaincat}
                    ListHeaderComponent={() => {
                        return (

                            <View><Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>Select One Category</Text></View>
                        )
                    }}
                    contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => ChangeMaincat(item)}>
                                <Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>{item.titile_e}  ({item.titile_m})</Text>
                            </TouchableOpacity>
                        )
                    }}>
                </FlatList>
            </Modals>

            <Modals visible={ModalSubcat} onRequestClose={() => { showModalSubcat(false) }}>
                <FlatList
                    data={SelectSubcat}
                    ListHeaderComponent={() => {
                        return (

                            <View><Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>Select One Category</Text></View>
                        )
                    }}
                    contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => ChangeSubcat(item)}>
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