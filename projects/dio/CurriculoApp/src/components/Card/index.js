import React from 'react'
import {View, Text} from 'react-native'

import style from './style'

const Card = () =>{
    return(
      <View style={style.card_container}>
        <View style={style.card}>
          <View>
            <Text style={style.card_header}>Experiência Profissional</Text>
          </View>
          <View style={style.card_content}>
            <Text style={style.card_content_text}>Gerente de Execução | BioTech Consultoria</Text>
            <Text style={style.card_content_text}>Assessora de Projetos | BioTech Consultoria</Text>
          </View>
        </View>
      </View>
    )
}

export default Card