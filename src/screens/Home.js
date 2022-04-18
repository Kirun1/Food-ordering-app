import { View, Text, Image } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler'
import React, { useState } from 'react'
import Icon from '@expo/vector-icons/Entypo'
import Product from '../components/Product'

const Home = ({ navigation }) => {
    const [selectedState, setSelectedState] = useState({
        city: 'Los Angeles'
    });
    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <View style={{ 
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 40,
                marginHorizontal: 20,
             }}>
                <View style={{ width: '10%' }}>
                    <Image source={require('../images/1.png')} />
                </View>
                <View style={{ width: '80%' }}>
                    <Picker 
                        selectedValue={selectedState.city}
                        style={{ height: 50, width: 160 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedState({ city: itemValue })}
                    >
                        <Picker.Item label="Los Angeles" value="Los Angeles" style={{ fontWeight: 'bold' }}/>
                        <Picker.Item label="Kampala" value="Kampala" style={{ fontWeight: 'bold' }}/>
                        <Picker.Item label="Nairobi" value="Nairobi" style={{ fontWeight: 'bold' }}/>
                        <Picker.Item label="Dar es Salaam" value="Dar es Salaam" style={{ fontWeight: 'bold' }}/>
                    </Picker>
                </View>
                <View style={{ width: '10%' }}>
                    <Icon name='magnifying-glass' size={30} />
                </View>
            </View>

            <View style={{ 
                paddingHorizontal: 20,
                marginTop: 50,
             }}>
                <Text style={{ 
                    fontSize: 30,
                    fontWeight: 'bold',
                 }}>Food that</Text>
                <Text style={{ 
                    fontSize: 30,
                    fontWeight: 'bold',
                 }}>meets your needs</Text>
            </View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 40 }}
            >
                <View style={{ 
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: '#f9dd7a',
                    marginHorizontal: 15,
                    borderRadius: 25,
                    paddingVertical: 5,
                    paddingHorizontal: 15,
                 }}>
                     <Image 
                        source={require('../images/5.png')}
                        style={{ 
                            width: 40, 
                            height: 40, 
                        }}
                     /> 
                     <Text style={{ 
                         fontWeight: 'bold',
                         fontSize: 18,
                         paddingLeft: 10,
                      }}>Burgers</Text> 
                 </View>

                 <View style={{ 
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: '#e5e4eb',
                    marginHorizontal: 15,
                    borderRadius: 25,
                    paddingVertical: 5,
                    paddingHorizontal: 15,
                 }}>
                     <Image 
                        source={require('../images/10.png')}
                        style={{ 
                            width: 40, 
                            height: 40, 
                        }}
                     /> 
                     <Text style={{ 
                         fontWeight: 'bold',
                         fontSize: 18,
                         paddingLeft: 10,
                      }}>Burrito</Text> 
                 </View>

                 <View style={{ 
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: '#e5e4eb',
                    marginHorizontal: 15,
                    borderRadius: 25,
                    paddingVertical: 5,
                    paddingHorizontal: 15,
                 }}>
                     <Image 
                        source={require('../images/7.png')}
                        style={{ 
                            width: 40, 
                            height: 40, 
                        }}
                     /> 
                     <Text style={{ 
                         fontWeight: 'bold',
                         fontSize: 18,
                         paddingLeft: 10,
                      }}>Salads</Text> 
                 </View>
                 <View style={{ 
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: '#e5e4eb',
                    marginHorizontal: 15,
                    borderRadius: 25,
                    paddingVertical: 5,
                    paddingHorizontal: 15,
                 }}>
                     <Image 
                        source={require('../images/6.png')}
                        style={{ 
                            width: 40, 
                            height: 40, 
                        }}
                     /> 
                     <Text style={{ 
                         fontWeight: 'bold',
                         fontSize: 18,
                         paddingLeft: 10,
                      }}>Pizza</Text> 
                 </View>
            </ScrollView>

            <View style={{ 
                alignItems: 'center',
                marginHorizontal: 20,
                flexDirection: 'row',
                marginTop: 40,
            }}>
                <View style={{ 
                    width: '50%'
                }}>
                    <Text style={{ 
                        fontSize: 22,
                        fontWeight: 'bold',
                    }}>New Products</Text>
                </View>
                <View style={{ 
                    width: '50%',
                    alignItems: 'flex-end',
                }}>
                    <Icon 
                        name='dots-three-horizontal' 
                        size={25}
                        color='#848385'
                    />
                </View>
            </View>

            <View style={{ 
                flexDirection: 'row',
                marginHorizontal: 15,
                marginTop: 30,
             }}>
                 <Product 
                    image={require('../images/4.png')}
                    title='Smoke House'
                    price='12.99'
                    onPress={() => navigation.navigate('Detail')}
                 />
                 <Product 
                    image={require('../images/9.png')}
                    title='Honey Chilli'
                    price='10.99'
                    marginTop={25}
                 />
            </View>

            <View style={{ 
                flexDirection: 'row',
                marginHorizontal: 15,
                marginTop: 30,
             }}>
                 <Product 
                    image={require('../images/6.png')}
                    title='Adios Pizza'
                    price='11.99'
                 />
                 <Product 
                    image={require('../images/10.png')} 
                    title='Burrito'
                    price='10.99'
                    marginTop={25}
                 />
            </View>
        </ScrollView>
    )
}

export default Home