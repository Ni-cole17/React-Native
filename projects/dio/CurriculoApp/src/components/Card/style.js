import React from 'react'
import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    card: {
        width: '60%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        backgroundColor: 'white',
      },
      card_container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      card_content: {
        marginTop: 10,
      },
      card_header:{
        color: '#939393',
        fontWeight: 'bold',
        fontSize: 16,
      },
})

export default style;

