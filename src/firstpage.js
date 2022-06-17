import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';


const Firstpage = ({...props}) => {

    return (

        <View style={styles.mainview}>
            <View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, alignItems: 'center' }}>
                <View >

                    <Text style={{ color: '#fff', fontSize: 50, fontWeight: 'bold', letterSpacing: 10 }}>
                        OK
                    </Text>
                </View>
                <View style={{ backgroundColor: '#fff', height: 55 }}>

                    <Text style={{ color: '#000', fontSize: 50, fontWeight: 'bold', letterSpacing: 10 }}>
                        MURI
                    </Text>
                </View>
            </View>
            <View style={{ padding: 15, alignSelf: 'baseline', backgroundColor: '#151836', width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{flexDirection:'row'}}>
                    <Image style={{ width: 20, height: 20 }} source={require('./assets/images/copy.png')}></Image>

                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: '100' }}>  | Saifzoid</Text>
                </View>
                <TouchableOpacity onPress={()=> {props.navigation.navigate('MyTabs')}}>
                    <Text style={{ color: '#fff' }}>SKIP   </Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}



const styles = StyleSheet.create({
    mainview: { backgroundColor: '#0e1024', flex: 1, alignItems: 'center', justifyContent: 'center' }
});

export default Firstpage;