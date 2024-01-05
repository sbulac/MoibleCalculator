import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },

  calculadoraContainer: {
    paddingHorizontal: 25,
    flex: 1,
    justifyContent: 'flex-end',
  },

  display: {
    marginRight: 10,
  },

  resultadoAnterior: {
    color: '#eeeeee99',
    fontSize: 40,
    textAlign: 'right',
  },

  resultado: {
    color: '#eeeeee',
    fontSize: 60,
    textAlign: 'right',
  },

  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  boton: {
    height: 80,
    width: 80,
    borderRadius: 50,
    justifyContent: 'center',
    margin: 8,
  },

  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
  },
  thanks: {
    color: '#eee',
    textAlign: 'center'
  },
});
