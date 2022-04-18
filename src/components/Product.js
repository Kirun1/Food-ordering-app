import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Product = ({ onPress, marginTop, image, title }) => {
  return (
    <TouchableOpacity
        onPress={onPress}
        style={{
            backgroundColor: '#f5f5fa',
            height: 280,
            width: 160,
            borderRadius: 20,
            marginTop: marginTop,
            marginLeft: 10,
        }}
    >
      <View style={{ 
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 20,
       }}>
          <Image 
            source={require('../images/3.png')}
            style={{
                height: 25,
                width: 20,
            }}
          />
          <Text style={{ 
              paddingHorizontal: 10,
              fontWeight: 'bold',
              fontSize: 16,
           }}>290 Calories</Text>
      </View>
      <Image 
        source={image}
        style={{ 
            height: 105,
            alignSelf: 'center',
            width: 130,
            marginTop: 15,
            marginBottom: 15,
         }}
      />
      <Text style={{ 
          fontSize: 18,
          fontWeight: 'bold',
          paddingHorizontal: 10,
       }}>{title}</Text>
       <Text style={{ 
           fontSize: 15,
           fontWeight: 'bold',
           paddingHorizontal: 10,
           color: '#848385'
        }}>Beef Burger</Text>
    </TouchableOpacity>
  )
}

export default Product