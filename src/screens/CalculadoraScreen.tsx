import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/AppTheme';
import BotonCalc from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';

const CalculadoraScreen = () => {
  const {
    lastNumber,
    number,
    handleRestart,
    changeSign,
    handleDel,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    createNumber,
    calcular
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      <View style={styles.display}>
        <Text style={styles.resultadoAnterior}>{lastNumber}</Text>
        <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
          {number}
        </Text>
      </View>

      <View style={styles.fila}>
        <BotonCalc action={handleRestart} bgcolor="#9b9b9b" texto="C" />
        <BotonCalc action={changeSign} bgcolor="#9b9b9b" texto="⁺∕₋" />
        <BotonCalc action={handleDel} bgcolor="#9b9b9b" texto="del" />
        <BotonCalc action={btnDividir} bgcolor="#df9427" texto="÷" />
      </View>
      <View style={styles.fila}>
        <BotonCalc action={createNumber} texto="7" />
        <BotonCalc action={createNumber} texto="8" />
        <BotonCalc action={createNumber} texto="9" />
        <BotonCalc action={btnMultiplicar} bgcolor="#df9427" texto="×" />
      </View>
      <View style={styles.fila}>
        <BotonCalc action={createNumber} texto="4" />
        <BotonCalc action={createNumber} texto="5" />
        <BotonCalc action={createNumber} texto="6" />
        <BotonCalc action={btnRestar} bgcolor="#df9427" texto="-" />
      </View>
      <View style={styles.fila}>
        <BotonCalc action={createNumber} texto="1" />
        <BotonCalc action={createNumber} texto="2" />
        <BotonCalc action={createNumber} texto="3" />
        <BotonCalc action={btnSumar} bgcolor="#df9427" texto="+" />
      </View>
      <View style={styles.fila}>
        <BotonCalc action={createNumber} ancho texto="0" />
        <BotonCalc action={createNumber} texto="." />
        <BotonCalc action={calcular} bgcolor="#df9427" texto="=" />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
