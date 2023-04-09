import React from 'react'
import { Image, View } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl}) => {
  return (
    <View style = {styles.btnContainer}>
      <Image
        source={iconUrl}
        resizeMode="contain"
        style= {styles.btnImg}
      />
    </View>
  )
}

export default ScreenHeaderBtn