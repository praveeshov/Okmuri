import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from "react-native"
import { Cards } from "./customcomponanats";


const Dashboard = ({...props}) => {

    const [datas, setdatas] = useState()
    const [subcategory, setsubcategory] = useState()
    const [slug, setslug] = useState('')

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        try {
            const response = await fetch(
                'http://3.145.145.124:8000/contact/list/category/'
            );
            
            const json = await response.json();
           
            setdatas(json)
            // setslug(json[0].slug)
            cardclic(json[0].slug)
        } catch (error) {
            console.error(error);
        }

    }

    const cardclic = async (slug) => {
        try {
            // console.log(slug);
            const response = await fetch(
                'http://3.145.145.124:8000/contact/list/sub-category/?main_cat='+slug
                
            );
            const json = await response.json();
            setsubcategory(json)
            setslug(slug)
        } catch (error) {
            console.log(error);
        }
        
        
        
    }


    const [services, setservice] = useState([]);
    const urls = 'http://3.145.145.124:8000'

    
    return (
        <View style={styles.mainview}>
            <View>
                <Text style={styles.test}>Dashboard</Text>
                <Text style={styles.test1}>Main Categories</Text>
            </View>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                <FlatList data={datas} numColumns={2} 
                    contentContainerStyle={{ flexDirection: 'column' }} renderItem={({ item }) => {
                        
                        return (

                            <Cards colors={slug==item.slug?'blue':'#292d57'} colour={slug==item.slug?'#fff':'#292d57'} margin={9} onPress={() => cardclic(item.slug)} source={{ uri: urls + item.image }} text1={item.titile_e} test2={item.titile_m} />
                        )
                    }}>

                </FlatList>

              
            </View>

            <FlatList data={subcategory}
                ListHeaderComponent={() => {
                    return (

                        <View><Text style={{ color: '#fff',fontFamily:'NuosuSIL-Regular',fontSize:20,marginLeft:10 }}>Sub categories</Text></View>
                    )

                }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', backgroundColor: '#292d57', margin: 10, padding: 10, borderRadius: 10 }}>
                                <Image style={{ width: 20, height: 20 }} source={{ uri: urls + item.image }} />
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

export default Dashboard;