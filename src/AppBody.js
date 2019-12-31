import React, {Component} from 'react';

import RowBotoes from './RowBotoes';
import RowVisor from './RowVisor';

const defaultState = {
  valorVisor: 0.0,
  primeiraParte: true,
  elementosOperacao: {valor1: 0.0, operacao: '+', valor2: 0.0},
};

export default class AppBody extends Component {
  state = defaultState;

  onClickBotao = valor => {
    this.processarAcaoCalculadora(valor);
  };

  processarAcaoCalculadora(valor) {
    let {
      primeiraParte,
      elementosOperacao: {valor1, valor2},
    } = this.state;

    switch (valor) {
      // * LIMPAR TELA
      case 'AC':
        this.setState(defaultState);
        break;

      // * TROCAR SINAL NÚMERO
      case '+/-':
        let {valorVisor} = this.state;
        if (Number.isInteger(valorVisor)) {
          valorVisor *= -1;

          this.setState({valorVisor});
        }
        break;

      // * OPERAÇÕES MATEMÁTICAS
      case '+':
      case '-':
      case '*':
      case '/':
      case '%':
        this.setState({
          primeiraParte: false,
          elementosOperacao: {...this.state.elementosOperacao, operacao: valor},
        });
        break;

      // * PONTO FLUTUANTE
      case ',':
        console.log(valor);
        break;

      // * PROCESSAR RESULTADO
      case '=':
        console.log(this.state);
        break;

      // * NÚMEROS DIGITADOS
      default:
        // * FORMAR VALOR 1
        if (primeiraParte) {
          let valorBtnStr = valor.toString();
          let valorLocalStr = valor1 === 0.0 ? '' : valor1.toString();
          valor1 = parseFloat(valorLocalStr + valorBtnStr);
          this.setState({
            elementosOperacao: {
              ...this.state.elementosOperacao,
              valor1,
            },
          });
          this.setState({valorVisor: valor1});
        }
        // * FORMAR VALOR 2
        else {
          let valorBtnStr = valor.toString();
          let valorLocalStr = valor2 === 0.0 ? '' : valor2.toString();
          valor2 = parseFloat(valorLocalStr + valorBtnStr);
          this.setState({
            elementosOperacao: {
              ...this.state.elementosOperacao,
              valor2,
            },
          });
          this.setState({valorVisor: valor2});
        }
        break;
    }
  }

  render() {
    const {valorVisor} = this.state;

    return (
      <>
        <RowVisor size={15} textoVisor={valorVisor} />

        <RowBotoes size={85} onClickBotao={this.onClickBotao} />
      </>
    );
  }
}
