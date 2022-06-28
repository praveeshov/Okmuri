import React, { useEffect, useState } from 'react';
import { ToastAndroid,Modal, View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView, ActivityIndicator, StatusBar, TextInput } from 'react-native';
import { SinmpleInputbox, Inputbox, Modals, Activeindicator, Header, } from './customcomponanats';
import { Apidatas } from './Functions';

const Addcontact = () => {

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
    const Change = (value) => {
        console.log(value, 'vulll');
    }
    const fetchdata = async () => {
        const source = '/contact/list/places/';
        const methord = 'GET'
        const params = ''

        SetIndicator(true)
        const result = await Apidatas(source, methord, params)
        // console.log(result);
        setSelectplace(result)

        // try {
        //     const response = await fetch('http://3.145.145.124:8000/contact/list/places/')
        //     const json = await response.json();
        //     setSelectplace(json)
        // } catch (error) {
        //     console.error(error);
        // }
        const source1 = '/contact/list/category/';
        const methord1 = 'GET'
        const params1 = ''
        const data = await Apidatas(source1, methord1, params1)
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
        ShowSubcat(item.titile_e + '  (' + item.titile_m + ')')
        showModalSubcat(false)
        setSubId(item.id)
    }

    const reSet = () => {
        Showplace('Select Your Place')
        ShowMaincat('Select One Category')
        ShowSubcat('Select One Category')

    }

    // const Submit = () => {
    //    const requestValue = {
    //         method:'POST',
    //         header:{'content-type':'application/json'},
    //         body: JSON.stringify({
    //             titile_e: 'Anchuparamab',
    //             titile_m: 'അഞ്ചുപറമ്പ്',
    //             slug:'haiw',
    //             ward:16,
    //         })
    //     }
    //      fetch('http://3.145.145.124:8000/contact/list/places/',requestValue)
    //     .then(response => console.log(response.json(),'rwesp--------------->'))
    //     .then(data => console.log(data.id,'data--------------->'))


    //    const arr=place.split(" ")
    //     console.log(arr[0],JSON.response);

    // }
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
            // console.log(`${key}: ${bodys[key]}`);
            if (arr[key] == ' ' || arr[key] == 0) {
                sum.push(key)
                // console.log("missed");
            } else {
                // console.log("ok");

            }
        }
        setAllsum(sum)
        // console.log(allsum,'suuuuuuuuum');
        const permission = []
        
        for (const x in sum) {

            // console.log(sum[x]);

            if (sum[x] == 'name_e') {
                console.log('enter english name');
                ToastAndroid.show('Enter english name',ToastAndroid.SHORT)
                permission.push(0)
            } else if (sum[x] == 'name_m') {
                console.log('enter malayalam name');
                permission.push(1)
            } else if (sum[x] == 'phone') {
                console.log('enter phone number');
                permission.push(2)
            } else if (sum[x] == 'place') {
                console.log('enter your place');
                permission.push(3)
            } else if (sum[x] == 'main_cat') {
                console.log('Select main cat');
                permission.push(4)
            } else if (sum[x] == 'sub_cat') {
                console.log('select sub cat');
                permission.push(5)
            }

            // Submit()


        }
        
       


        if(sum.length==0){
            console.log('fetch+++++++++++++++++++++++++');
        }

        // console.log(permission);
        // if ( sum.length == 0) {
        //     console.log("no blank");
        //     // fetch('http://3.145.145.124:8000/contact/create/contacts/', requestValue)
        // } else {
        //     console.log("fill blanks");


        // }
        // if (nameEnglish == ' ') {
        //     console.log("Enter your name");
        // } else if (nameMalayalam == " ") {
        //     console.log("Enter your name");
        // } else if (moblieNumber == " ") {
        //     console.log("Enter phone number");
        // } else if (placeId == 0) {
        //     console.log("fill place");
        // } else if (mainId == 0) {
        //     console.log("select main cat");
        // } else if (subId == 0) {
        //     console.log("select sub cat");
        // }
    }
    const Submit = async () => {


        // console.log(place);
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

        // let sum = []
        // for (const key in bodys) {
        //     // console.log(`${key}: ${bodys[key]}`);
        //     if (bodys[key] == ' ' || bodys[key] == 0) {
        //         sum.push(key)
        //         console.log("missed");
        //     } else {
        //         // console.log("ok");
        //     }
        // }
        // console.log(sum);
        // if ( sum.length == 0) {
        //     console.log("no blank");
        //     // 
        // } else {
        //     console.log("fill blanks");


        // }
        // if (nameEnglish == ' ') {
        //     console.log("Enter your name");
        // } else if (nameMalayalam == " ") {
        //     console.log("Enter your name");
        // } else if (moblieNumber == " ") {
        //     console.log("Enter phone number");
        // } else if (placeId == 0) {
        //     console.log("fill place");
        // } else if (mainId == 0) {
        //     console.log("select main cat");
        // } else if (subId == 0) {
        //     console.log("select sub cat");
        // }

        // else{
        //     console.log("ok");
        // }
        // console.log(placeId, mainId, subId, nameEnglish, nameMalayalam, moblieNumber);

        // let obj = {}


        // 
        // console.log(resp);
        // 
        // console.log(requestValue);
        // console.log(resp);
        // .then((response) => response.json())
        // .then((json) => {
        //    const resp=response.status
        //     return console.log(resp);

        // })

        // .catch((error) => {
        //     console.error(error, "yuhygygb");
        // });



        //   fetch('http://3.145.145.124:8000/contact/create/contacts/', {
        //         method: 'POST',
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             fcm_token: "asd",
        //             place: 3,
        //             main_cat: 1,
        //             sub_cat: 1,
        //             name_e: "vvvv",
        //             name_m: "പ",
        //             phone: 9846654526,
        //         })
        //     });
    };

    return (
        <ScrollView style={styles.mainview}>
            <StatusBar backgroundColor={'#0e1024'} barStyle={'light-content'} />
            <Header source={require('./assets/images/arrow-left.png')} text='Add Contact' />

            {/* {indicator ?
            <Text style={styles.test}>jvtyvtyvgjyvgyvy</Text>
            :null} */}
            <View>
                <SinmpleInputbox onChangeText={newText => setNameEnglish(newText)} placeholder="Enter Your Name in English"  emptycheck={allsum.includes('name_e')?'red':'blue'} emptycheck1={allsum.includes('name_e')?'red':'#fff'} title="Enter your name in english"></SinmpleInputbox>
                <SinmpleInputbox onChangeText={newText => setNameMalayalam(newText)} placeholder="Enter Your Name in Malayalam" emptycheck={allsum.includes('name_m')?'red':'blue'} emptycheck1={allsum.includes('name_m')?'red':'#fff'} title="Enter your name in malayalam"></SinmpleInputbox>
                <SinmpleInputbox onChangeText={newText => setMobileNumber(newText)} placeholder="Enter Your Mobile Number" emptycheck={allsum.includes('phone')?'red':'blue'} emptycheck1={allsum.includes('phone')?'red':'#fff'} title="Enter your place"></SinmpleInputbox>
                <Inputbox placeholder={'Select Your Place'} text={place} onPress={() => inputClick()} emptycheck={allsum.includes('place')?'red':'blue'} title="Enter your place" emptycheck1={allsum.includes('place')?'red':'#fff'}  ></Inputbox>
                <Inputbox placeholder='Select One Category' text={Maincat} onPress={() => Maincatinputclick()} emptycheck={allsum.includes('main_cat')?'red':'blue'} title="Select one main category" emptycheck1={allsum.includes('main_cat')?'red':'#fff'} ></Inputbox>
                <Inputbox placeholder='Select One Category' text={Subcat} onPress={() => showModalSubcat(!ModalSubcat)} emptycheck={allsum.includes('sub_cat')?'red':'blue'} title="Enter one sub category" emptycheck1={allsum.includes('sub_cat')?'red':'#fff'} ></Inputbox>
                <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginBottom: 50 }}>
                    <TouchableOpacity onPress={() => { reSet() }} style={{ borderColor: 'blue', borderWidth: 2, backgroundColor: '#fff', width: '45%', marginTop: 10, height: 60, alignSelf: 'center', borderRadius: 15, justifyContent: 'center' }}>
                        <Text style={{ color: 'blue', fontSize: 22, fontWeight: '600', alignSelf: 'center', fontFamily: 'NuosuSIL-Regular' }}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSubmit()} style={{ backgroundColor: 'blue', width: '45%', marginTop: 10, height: 60, alignSelf: 'center', borderRadius: 15, justifyContent: 'center' }} >
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
    test: {  fontFamily: 'NuosuSIL-Regular', fontSize: 17, marginVertical: 5 },
    mainview: { backgroundColor: '#0e1024', flex: 1, padding: 10 }
})