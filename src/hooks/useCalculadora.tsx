import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [lastNumber, setLastNumber] = useState('');
  const [number, setNumber] = useState('0   ');

  const operacion = useRef<Operadores>();

  const handleRestart = () => {
    setNumber('0');
    setLastNumber('');
  };

  const handleDel = () => {
    if (number.includes('-') && number.length === 2) {
      setNumber('0');
    } else if (number !== '0' && number.length === 1) {
      setNumber('0');
    } else if (number.length > 1) {
      const newNumber = number.substring(0, number.length - 1);
      setNumber(newNumber);
    }

    // Fdo. H
    // let negativo = '';
    // let numberTemp = number;

    // if (number.includes('-')) {
    //   negativo = '-';
    //   numberTemp = number.substr(1);
    // }

    // if (numberTemp.length > 1) {
    //   setNumber(negativo + numberTemp.slice(0, -1));
    // } else {
    //   setNumber('0');
    // }
  };

  const createNumber = (numberText: String) => {
    // Doble punto

    if (number.length > 10) {
      return;
    } else if (number.includes('.') && numberText === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal

      if (numberText === '.') {
        setNumber(number + '.');

        // Otro 0 y hay punto
      } else if (number.includes('.')) {
        setNumber(number + numberText);
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const changeSign = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const changeNumb = () => {
    if (number.endsWith('.')) {
      setLastNumber(number.slice(0, -1));
    } else {
      setLastNumber(number);
    }
    setNumber('0');
  };

  const btnDividir = () => {
    changeNumb();
    operacion.current = Operadores.dividir;
  };

  const btnMultiplicar = () => {
    changeNumb();
    operacion.current = Operadores.multiplicar;
  };

  const btnRestar = () => {
    changeNumb();
    operacion.current = Operadores.restar;
  };

  const btnSumar = () => {
    changeNumb();
    operacion.current = Operadores.sumar;
  };

  const calcular = () => {
    const number1 = Number(number);
    const number2 = Number(lastNumber);

    switch (operacion.current) {
      case Operadores.sumar:
        setNumber(`${number2 + number1}`);
        break;

      case Operadores.restar:
        setNumber(`${number2 - number1}`);
        break;

      case Operadores.multiplicar:
        setNumber(`${number2 * number1}`);
        break;

      case Operadores.dividir:
        setNumber(`${number2 / number1}`);
        break;
    }
    setLastNumber('');
  };

  return {
    number,
    lastNumber,
    handleRestart,
    handleDel,
    changeSign,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    createNumber,
    calcular,
  };
};
