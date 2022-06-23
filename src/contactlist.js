import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Header, Listcard, Inputbox, Modals } from './customcomponanats';
import { Apidatas } from './Functions';
import { AccordionList } from "accordion-collapse-react-native";
import { Separator } from 'native-base';

const Contactlist = () => {
    const [dropdown, Setdropdown] = useState(false)

    const [contact, Setcontact] = useState([])

    const [modalplace, Setmodalplace] = useState(false)
    const [places, Setplaces] = useState()
    const [placeChange, Pickplace] = useState()
    const [SubmitPlace, SetSubmitPlace] = useState()

    const [modalmaincats, Setmodalmaincats] = useState(false)
    const [maincats, Setmaincats] = useState()
    const [mainchange, Pickmaincat] = useState()
    const [submitmain, Setsubmitmain] = useState()

    const [modalsubcat, Setmodalsubcat] = useState(false)
    const [subcat, Setsubcats] = useState()
    const [subchange, Picksubcat] = useState()
    const [SubmitSubcat, SetSubmitsubcat] = useState()

    const [QueryParams, SetQueryParams] = useState({})


    useEffect(() => {
        Fetchdata()

    }, [])



    const ChangePlace = (item, params) => {
        Setmodalplace(false)
        
        // console.log(item);
        let Obj = QueryParams
        if (params == '&place=') {
            Obj[params] = item.id
            Pickplace(item.titile_e)
            SetSubmitPlace(item.id)
          
        } else {
            Obj[params] = item.slug
            
            // console.log(Obj);
            if (params == '&main_cat=') {

                Pickmaincat(item.titile_e)
                FetchSubcat(item.slug)
                Setsubmitmain(item.slug)
                Picksubcat('')
            

            }
            else if (params == '&sub_cat=') {
                Picksubcat(item.titile_e)
                SetSubmitsubcat(item.slug)

            }
            // SetQueryParams(Obj)

        }
        
        SetQueryParams(Obj)
        

        // console.log(Obj);
        Setmodalmaincats(false)
        Setmodalsubcat(false)
    }

    const ChangeMaincat = (item) => {
        // Pickmaincat(item.titile_e)
        // Setmodalmaincats(false)
        // FetchSubcat(item.slug)
        // Picksubcat('')
        Setsubmitmain(item.slug)
        // Picksubcat('')
    }
    const ChangeSubcat = (item) => {
        Picksubcat(item.titile_e)
        Setmodalsubcat(false)
        SetSubmitsubcat(item.slug)
    }
    const FetchSubcat = async (slug) => {

        const source = '/contact/list/sub-category/?main_cat=' + slug;
        const method = 'GET';
        const params = '';
        const result = await Apidatas(source, method, params)
        Setsubcats(result)
    }
    const Reset = () => {
        Picksubcat('')
        Pickmaincat('')
        Pickplace('')
        Setsubmitmain('')
        SetSubmitPlace('')
        SetSubmitsubcat('')
        SetQueryParams({})
        // console.log(QueryParams);


        // for(const x in QueryParams){
        //     console.log(`${x}${QueryParams[x]}`);
        // }
    }
// console.log(QueryParams);


    const Submit = async () => {
        console.log(QueryParams);
        // console.log(submitmain,"---",SubmitPlace,'---', SubmitSubcat,"-------submit-------->");
       // const isEmpty = Object.keys(obj).length === 0;
        if (Object.keys(QueryParams).length!=0){
            console.log('not null');
        }else{
            console.log(' null');
        }
        let source = ''
        const method = 'GET';
        const params = '7';
        let result = []
        if (params!='') {
            //http://3.145.145.124:8000/contact/list/contacts/?main_cat=other&place=3&sub_cat=itc
            source = '/contact/list/contacts/?';
            // console.log(source,'source***********************');

            result = await Apidatas(source, method, params)
            // console.log("true");
        } else {
            // console.log("--------------------------");
        }

        Setcontact(result)
        // console.log('jjjjjjjjj');
    }

    const Fetchdata = async () => {

        const source1 = '/contact/list/places/';
        const method1 = 'GET';
        const params1 = '';
        let result1 = await Apidatas(source1, method1, params1)
        // console.log(result1);
        Setplaces(result1)

        const source2 = '/contact/list/category/';
        const methord2 = 'GET'
        const params2 = ''
        const result2 = await Apidatas(source2, methord2, params2)
        Setmaincats(result2)


        // try {
        //     const response = await fetch('http://3.145.145.124:8000/contact/list/contacts/')
        //     const json = await response.json();
        //     Setcontact(json)
        // } catch (error) {
        //     console.error(error);
        // }
    }
    const urls = 'http://3.145.145.124:8000'

    //   const  state={
    //         list:[
    //             {
    //               id:1,
    //               title: 'Getting Started',
    //               body: 'React native Accordion/Collapse component, very good to use in toggles & show/hide content'
    //             },
    //             {
    //               id:2,
    //               title: 'Components',
    //               body: 'AccordionList,Collapse,CollapseHeader & CollapseBody'
    //             }
    //             ],
    //       }

    //    const _head=(item)=>{
    //           return(
    //               <Separator bordered style={{alignItems:'center'}}>
    //                 <Text>{item.title}</Text>
    //               </Separator>
    //           );
    //       }

    //     const  _body=(item)=>{
    //           return (
    //               <View style={{padding:10}}>
    //                 <Text style={{textAlign:'center'}}>{item.body}</Text>
    //               </View>
    //           );
    //       }

    return (



        <View style={styles.mainview}>
            {/* 
            <Header source={require('./assets/images/arrow-left.png')} text='Contact List' />
            <AccordionList
            list={state.list}
            header={_head}
            body={_body}
            keyExtractor={item => `${item.id}`}
          /> */}

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
                            <View style={{ width: '70%', }}>
                                <Inputbox text={placeChange} onPress={() => { Setmodalplace(true) }} />
                            </View>
                            <Modals visible={modalplace} onRequestClose={() => { Setmodalplace(false) }}>
                                <FlatList
                                    ListHeaderComponent={() => {
                                        return (

                                            <View><Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>Select your place</Text></View>
                                        )
                                    }}
                                    data={places}
                                    contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }}
                                    renderItem={({ item }) => {
                                        return (

                                            <TouchableOpacity onPress={() => ChangePlace(item, '&place=')}>

                                                <Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>{item.titile_e}</Text>
                                            </TouchableOpacity>
                                        )
                                    }}>
                                </FlatList>
                            </Modals>
                        </View>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexWrap: 'wrap' }}>
                                <Text style={{ color: '#fff', fontFamily: 'NuosuSIL-Regular', fontSize: 20, }} >Main </Text>
                                <Text style={{ color: '#fff', fontFamily: 'NuosuSIL-Regular', fontSize: 20, }} >categories</Text>
                            </View>
                            <View style={{ width: '70%', borderRightColor: 'red' }}>
                                <Inputbox text={mainchange} onPress={() => { Setmodalmaincats(true) }} />
                            </View>
                            <Modals visible={modalmaincats} onRequestClose={() => { Setmodalmaincats(false) }}>
                                <FlatList
                                    ListHeaderComponent={() => {
                                        return (

                                            <View><Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>Select One Category</Text></View>
                                        )
                                    }}
                                    data={maincats}
                                    contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }}
                                    renderItem={({ item }) => {
                                        return (
                                            <TouchableOpacity onPress={() => ChangePlace(item, '&main_cat=')}>
                                                <Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>{item.titile_e}  ({item.titile_m})</Text>
                                            </TouchableOpacity>
                                        )
                                    }}>
                                </FlatList>
                            </Modals>
                        </View>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexWrap: 'wrap' }}>
                                <Text style={{ color: '#fff', fontFamily: 'NuosuSIL-Regular', fontSize: 20, }} >Sub </Text>
                                <Text style={{ color: '#fff', fontFamily: 'NuosuSIL-Regular', fontSize: 20, }} >categories</Text>
                            </View>
                            <View style={{ width: '70%', borderRightColor: 'red' }}>
                                <Inputbox onPress={() => Setmodalsubcat(true)} text={subchange} />
                            </View>
                            <Modals visible={modalsubcat} onRequestClose={() => { Setmodalsubcat(false) }}>
                                <FlatList
                                ListHeaderComponent={()=>{
                                    return(

                                        <View><Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>Select One Category</Text></View>
                                    )
                                }}
                                    data={subcat}
                                    contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }}
                                    renderItem={({ item }) => {
                                        // console.log(item);
                                        return (
                                            <TouchableOpacity onPress={() => ChangePlace(item, '&sub_cat=')}>
                                                <Text style={{ margin: 20, color: '#000', fontWeight: 'bold', fontSize: 20 }}>{item.titile_e}  ({item.titile_m})</Text>
                                            </TouchableOpacity>
                                        )
                                    }}>
                                </FlatList>
                            </Modals>
                        </View>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={() => { Reset() }} style={styles.buttons}>
                                <Text style={{ color: 'blue', fontSize: 22, fontWeight: '600', alignSelf: 'center', fontFamily: 'NuosuSIL-Regular' }}>Reset</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { Submit(submitmain, SubmitPlace, SubmitSubcat) }} style={[styles.buttons, { backgroundColor: 'blue' }]} >
                                <Text style={{ color: '#FFF', fontSize: 22, fontWeight: '600', alignSelf: 'center', fontFamily: 'NuosuSIL-Regular' }}>Search</Text>
                            </TouchableOpacity>
                        </View>

                    </View> : null}
            </View>

            <FlatList
                data={contact}
                // contentContainerStyle={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }}
                renderItem={({ item }) => {
                    return (
                        <Listcard service={item.sub_cat.titile_e} maincat={item.main_cat.titile_e} text={item.name_e} text1={item.place.titile_e} phone={item.phone} source={{ uri: urls + item.main_cat.image }} />

                    )
                }}
            >

            </FlatList>
            {/* <Animation></Animation> */}

        </View>
    )
}

const styles = StyleSheet.create({
    mainview: { flex: 1, backgroundColor: '#0e1024', padding: 10, },
    test: { color: '#fff', fontSize: 20, marginVertical: 15, fontFamily: 'NuosuSIL-Regular', marginLeft: 10 },
    buttons: { borderColor: 'blue', borderWidth: 2, backgroundColor: '#fff', width: '48%', marginTop: 10, height: 60, borderRadius: 15, justifyContent: 'center' }
})

export default Contactlist;