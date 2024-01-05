import React from 'react';
import {ColorValue, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/AppTheme';

interface Props {
  texto: String;
  bgcolor?: ColorValue;
  ancho?: boolean;
  action: (numberText: String) => void;
}

const BotonCalc = ({
  texto,
  bgcolor = '#2d2d2d',
  ancho = false,
  action,
}: Props) => {
  return (
    <View
      style={{
        ...styles.boton,
        backgroundColor: bgcolor,
        width: ancho ? 180 : 80,
      }}>
      <TouchableOpacity onPress={() => action(texto)}>
        <Text
          style={{
            ...styles.botonTexto,
            color: bgcolor === '#9b9b9b' ? '#000000' : '#eeeeee',
          }}>
          {texto}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BotonCalc;
