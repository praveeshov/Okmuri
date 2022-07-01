import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity ,StatusBar} from "react-native"
import { connect } from "react-redux";
import { Cards, Header } from "./customcomponanats";
import { Apidatas } from "./Functions";


const Dashboard = ({ ...props }) => {

    const [datas, setdatas] = useState()
    const [subcategory, setsubcategory] = useState()
    const [slug, setslug] = useState('')

    useEffect(() => {
        fetchdata()

    }, [])

    const fetchdata = async () => {
        const source = '/contact/list/category/';
        const method = 'GET';
        const params = '';

        const result = await Apidatas(source, method, params)
        setdatas(result)
        cardclic(result[0].slug)
      

    }

    const cardclic = async (slug) => {

        const source = '/contact/list/sub-category/?main_cat='+slug;
        const method = 'GET';
        const params = '';

        const result = await Apidatas(source, method, params)
        setsubcategory(result)
        setslug(slug)
       


    }


    const [services, setservice] = useState([]);
    const {dashboard,main}=props.selectedLanguage
    const urls = 'http://3.145.145.124:8000'


    return (
        <View style={styles.mainview}>
            <StatusBar backgroundColor={'#0e1024'} barStyle={'light-content'} />

            <View>
                <Text style={styles.test}>{dashboard}</Text>
                <Text style={styles.test1}>{main}</Text>
            </View>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                <FlatList data={datas} numColumns={2}
                    contentContainerStyle={{ flexDirection: 'column' }} renderItem={({ item }) => {
                        // console.log(item.slug,slug);
                        return (

                            <Cards colors={slug == item.slug ? 'blue' : '#201b42'} colour={slug == item.slug ? '#fff' : '#181336'} margin={9} onPress={() => cardclic(item.slug)} source={{ uri: urls + item.image }} text1={item.titile_e} test2={item.titile_m} />
                        )
                    }}>

                </FlatList>


            </View>

            <FlatList data={subcategory}
                ListHeaderComponent={() => {
                    return (

                        <View><Text style={{ color: '#fff', fontFamily: 'NuosuSIL-Regular', fontSize: 20, marginLeft: 10 }}>Sub categories</Text></View>
                    )

                }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', backgroundColor: '#201b42', margin: 10, padding: 10, borderRadius: 10, alignItems: 'center' }}>
                                <View style={{ padding: 10, backgroundColor: '#181336', borderRadius: 15 }}>

                                    <Image style={{ width: 40, height: 40 }} source={{ uri: urls + item.image }} />
                                </View>
                                <View style={{ marginLeft: 20 }}>
                                    <Text style={{ color: '#fff' }}>{item.titile_e}</Text>
                                    <Text style={{ color: '#fff' }}>{item.titile_m}</Text>

                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}>

            </FlatList>


        </View>
    )
}

const styles = StyleSheet.create({
    mainview: { backgroundColor: '#0e1024', flex: 1, padding: 20 },
    test: { color: '#fff', fontSize: 30, fontFamily: 'NuosuSIL-Regular' },
    test1: { color: '#fff', fontSize: 20, marginVertical: 15, fontFamily: 'NuosuSIL-Regular' },
})
const mapStateToProps = state => {
    // console.log(state);
    return {
        selectedLanguage: state.language,
    }
}
export default connect(mapStateToProps) (Dashboard);