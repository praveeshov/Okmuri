import React, { useEffect, useState } from 'react';
import { ToastAndroid,Modal, View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView, ActivityIndicator, StatusBar, TextInput } from 'react-native';
import { SinmpleInputbox, Inputbox, Modals, Activeindicator, Header, } from './customcomponanats';
import { Apidatas } from './Functions';
import { connect } from 'react-redux';

const Addcontact = ({...props}) => {

    const [modalplace, SetModalPlace] = useState(false)
    const [Selectplaces, setSelectplace] = useState([]);
    const [place, Showplace] = useState('Select Your Place')
    const [placeId, setPlaceId] = useState(0)

    const [ModalMaincat, ShowModalMaincat] = useState(false)
    const [Selectmaincat, SetMaincat] = useState([])
    const [Maincat, ShowMaincat] = useState('Select One category')
    const [mainId, setMainId] = useState(0)

    const [ModalSubcat, showModalSubcat] = useState(false)
    const [SelectSubcat, SetSubat] = useState([])
    const [Subcat, ShowSubcat] = useState('Select One category')
    const [subId, setSubId] = useState(0)

    const [nameEnglish, setNameEnglish] = useState(' ')
    const [nameMalayalam, setNameMalayalam] = useState(' ')
    const [moblieNumber, setMobileNumber] = useState(' ')

    const [indicator, SetIndicator] = useState(false)
    const [allsum, setAllsum] = useState([])

    useEffect(() => {
        fetchdata()


    }, [])
    
    const fetchdata = async () => {
        const source = '/contact/list/places/';
        const methord = 'GET'
        const params = ''

        SetIndicator(true)
        const result = await Apidatas(source, methord, params)
        setSelectplace(result)

        const source1 = '/contact/list/category/';
        const methord1 = 'GET'
        const params1 = ''
        const data = await Apidatas(source1, methord1, params1)
        SetMaincat(data)
        SetIndicator(false)

    }

    const inputClick = () => {
        SetModalPlace(true)

    }
    const ChangemodalPlace = (items) => {
        SetModalPlace(false)
        Showplace(items.titile_e + '  (' + items.titile_m + ')')
        setPlaceId(items.id)
    }


    const Maincatinputclick = () => {
        ShowModalMaincat(true)
    }
    const ChangeMaincat = (items) => {
        SetIndicator(true)
        ShowModalMaincat(false)
        ShowMaincat(items.titile_e + '  (' + items.titile_m + ')')
        Subcatinputclick(items.slug)
        ShowSubcat('Select One Category')
        SetIndicator(false)
        setMainId(items.id)

    }


    const Subcatinputclick = async (items) => {

        SetIndicator(true)
        const source1 = '/contact/list/sub-category/?main_cat=' + items;
        const methord1 = 'GET'
        const params1 = ''
        const data = await Apidatas(source1, methord1, params1)
        SetSubat(data)
        SetIndicator(false)

    }

    const ChangeSubcat = (item) => {
        ShowSubcat(item.titile_e + '  (' + item.titile_m + ')')
        showModalSubcat(false)
        setSubId(item.id)
    }

    const reSet = () => {
        Showplace('Select Your Place')
        ShowMaincat('Select One Category')
        ShowSubcat('Select One Category')
        setPlaceId(0)
        setMainId(0)
        setSubId(0)
        setNameEnglish('')
        setNameMalayalam('')
        setMobileNumber('')

    }

    const handleSubmit = () => {
        const arr = {
            name_e: nameEnglish,
            name_m: nameMalayalam,
            phone: moblieNumber,
            place: placeId,
            main_cat: mainId,
            sub_cat: subId,
        }

        // const bodys = {
        //     language:{value: nameEnglish,message:'English'},
        //     language1:{value: nameMalayalam,message:'nameMalayalam'},
        //     language2:{value: moblieNumber,message:'Engldfgish'},
        //     language3:{value: placeId,message:'Englidfgsh'},
        //     language4:{value: mainId,message:'Englifdghsh'},
        //     language5:{value: subId,message:'Englisdfgsh'},
        // }
        // for (const values in bodys) {
        //     let val =bodys[values].value
        //     console.log(val);

        // }
        let sum = []
        for (const key in arr) {
            
            if (arr[key] == ' ' || arr[key] == 0) {
                sum.push(key)
                
            }
             
        }
        
        setAllsum(sum)
    
        for (const x in sum) {
            if (sum[x] == 'name_e') {
                ToastAndroid.show('Enter english name',ToastAndroid.SHORT)
            } else if (sum[x] == 'name_m') {
                ToastAndroid.show('Enter malayalam name',ToastAndroid.SHORT)

            } else if (sum[x] == 'phone') {
                ToastAndroid.show('Enter phone number',ToastAndroid.SHORT)

            } else if (sum[x] == 'place') {
                ToastAndroid.show('select your place',ToastAndroid.SHORT)

            } else if (sum[x] == 'main_cat') {
                ToastAndroid.show('Select your main category',ToastAndroid.SHORT)

            } else if (sum[x] == 'sub_cat') {
                ToastAndroid.show('Select your sub category',ToastAndroid.SHORT)

            }
        }
        if(arr['phone'].length<10 && arr['phone'].length>1){
            sum.push('phone')
            ToastAndroid.show('Enter minimum 10 numbers',ToastAndroid.SHORT)
            
        }
        
        if(sum.length==0){
            Submit()
            
        }

      
    }
    const Submit = async () => {
        const requestValue = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fcm_token: "143",
                name_e: nameEnglish,
                name_m: nameMalayalam,
                phone: moblieNumber,
                place: placeId,
                main_cat: mainId,
                sub_cat: subId,

            })
        }
        fetch('http://3.145.145.124:8000/contact/create/contacts/', requestValue)

    };

    const { splace ,name_e,name_m,number,maincat,subcat,submit,reset,addcontact} = props.selectedLanguage;


    return (
        <ScrollView style={styles.mainview}>
            <StatusBar backgroundColor={'#0e1024'} barStyle={'light-content'} />
            <Header source={require('./assets/images/arrow-left.png')} text={addcontact} navigation={props.navigation}/>

            {/* {indicator ?
            <Text style={styles.test}>jvtyvtyvgjyvgyvy</Text>
            :null} */}
            <View>
                <SinmpleInputbox onChangeText={newText => setNameEnglish(newText)} text={nameEnglish} placeholder="Enter Your Name in English"  emptycheck={allsum.includes('name_e')?'red':'blue'} emptycheck1={allsum.includes('name_e')?'red':'#fff'} title={name_e}></SinmpleInputbox>
                <SinmpleInputbox onChangeText={newText => setNameMalayalam(newText)} text={nameMalayalam} placeholder="Enter Your Name in Malayalam" emptycheck={allsum.includes('name_m')?'red':'blue'} emptycheck1={allsum.includes('name_m')?'red':'#fff'} title={name_m}></SinmpleInputbox>
                <SinmpleInputbox type='phone-pad' onChangeText={newText => setMobileNumber(newText)} text={moblieNumber} placeholder="Enter Your Mobile Number" emptycheck={allsum.includes('phone')?'red':'blue'} emptycheck1={allsum.includes('phone')?'red':'#fff'} title={number}></SinmpleInputbox>
                <Inputbox placeholder={'Select Your Place'} text={place} onPress={() => inputClick()} emptycheck={allsum.includes('place')?'red':'blue'} title={splace} emptycheck1={allsum.includes('place')?'red':'#fff'}  ></Inputbox>
                <Inputbox placeholder='Select One Category' text={Maincat} onPress={() => Maincatinputclick()} emptycheck={allsum.includes('main_cat')?'red':'blue'} title={maincat} emptycheck1={allsum.includes('main_cat')?'red':'#fff'} ></Inputbox>
                <Inputbox placeholder='Select One Category' text={Subcat} onPress={() => showModalSubcat(!ModalSubcat)} emptycheck={allsum.includes('sub_cat')?'red':'blue'} title={subcat} emptycheck1={allsum.includes('sub_cat')?'red':'#fff'} ></Inputbox>
                <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginBottom: 50 }}>
                    <TouchableOpacity onPress={() => { reSet() }} style={{ borderColor: 'blue', borderWidth: 2, backgroundColor: '#fff', width: '45%', marginTop: 10, height: 60, alignSelf: 'center', borderRadius: 15, justifyContent: 'center' }}>
                        <Text style={{ color: 'blue', fontSize: 22, fontWeight: '600', alignSelf: 'center', fontFamily: 'NuosuSIL-Regular' }}>{reset}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSubmit()} style={{ backgroundColor: 'blue', width: '45%', marginTop: 10, height: 60, alignSelf: 'center', borderRadius: 15, justifyContent: 'center' }} >
                        <Text style={{ color: '#FFF', fontSize: 22, fontWeight: '600', alignSelf: 'center', fontFamily: 'NuosuSIL-Regular' }}>{submit}</Text>
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
const mapStateToProps = state => {
    return { 
      selectedLanguage: state.language,
    }
  }
export default connect(mapStateToProps)(Addcontact);
const styles = StyleSheet.create({
    test: {  fontFamily: 'NuosuSIL-Regular', fontSize: 17, marginVertical: 5 },
    mainview: { backgroundColor: '#0e1024', flex: 1, padding: 10 }
})