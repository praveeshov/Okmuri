import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { Header } from './customcomponanats'
import { connect } from 'react-redux';


const Aboutadmin = ({...props}) => {

    const {aboutadmin,adminname}=props.selectedLanguage

    return (
        <View style={styles.maincat}>
            <Header source={require('./assets/images/arrow-left.png')} text={aboutadmin} navigation={props.navigation}/>
            <View style={styles.profile}>
                <Image source={require('./assets/images/Iron.jpg')} style={{ width: 150, height: 150, borderRadius: 20, marginTop: 40 }} />
                <Text style={{ color: '#FFF', fontSize: 30, fontWeight: '600', fontFamily: 'NuosuSIL-Regular', marginVertical: 20 }}>{adminname}</Text>
                <Text style={styles.test}>React Native Developer</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 40 }}>
                <Image style={styles.image} source={require('./assets/images/linkedin.png')} />
                <Image style={styles.image} source={require('./assets/images/whatsapp1.png')} />
                <Image style={styles.image} source={require('./assets/images/instagram.png')} />
                <Image style={styles.image} source={require('./assets/images/facebook.png')} />
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={styles.test}>Contact admin</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:30}}>
                    <Text style={styles.test}>Phone:</Text>
                    <Text style={styles.test1}>             +91 9856232515   </Text>
                    <Image style={{width:30,height:30}} source={require('./assets/images/phone.png')}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={styles.test}>Email:</Text>
                    <Text style={styles.test1}>       ironman@gmail.com    </Text>
                    <Image style={{width:30,height:30}} source={require('./assets/images/gmail.png')}/>

                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    maincat: { backgroundColor: '#0e1024', flex: 1, padding: 10, },
    profile: { alignItems: 'center' },
    image: { width: 50, height: 50 },
    test: { color: '#4b4f7a', fontSize: 22, fontWeight: '600', fontFamily: 'NuosuSIL-Regular' },
    test1: { color: '#fff', fontSize: 22, fontWeight: '600', fontFamily: 'NuosuSIL-Regular' },
})
const mapStateToProps = state => {
    return { 
      selectedLanguage: state.language,
    }
  }
export default connect(mapStateToProps) (Aboutadmin);