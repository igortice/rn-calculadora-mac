import React, {Component} from 'react';

import RowBotoes from './RowBotoes';
import RowVisor from './RowVisor';

const defaultState = {
  valorVisor: 0.0,
  currentValor: 'valor1',
  elementosOperacao: {valor1: 0.0, operacao: '+', valor2: 0.0},
};

export default class AppBody extends Component {
  state = defaultState;

  onClickBotao = valor => {
    this.processarAcaoCalculadora(valor);
  };

  processarAcaoCalculadora(valor) {
    let {valorVisor, currentValor} = this.state;
    let currentValorLocalValue = this.state.elementosOperacao[currentValor];

    switch (valor) {
      // * LIMPAR TELA
      case 'AC':
        this.setState(defaultState);
        break;

      // * TROCAR SINAL NÚMERO
      case '+/-':
        if (Number.isInteger(valorVisor)) {
          valorVisor *= -1;

          this.setState({
            valorVisor,
            elementosOperacao: {
              ...this.state.elementosOperacao,
              [currentValor]: valorVisor,
            },
          });
        }
        break;

      // * OPERAÇÕES MATEMÁTICAS
      case '+':
      case '-':
      case '*':
      case '/':
      case '%':
        this.setState({
          currentValor: 'valor2',
          elementosOperacao: {...this.state.elementosOperacao, operacao: valor},
        });
        break;

      // * PONTO FLUTUANTE
      case ',':
        console.log(valor);
        break;

      // * PROCESSAR RESULTADO
      case '=':
        break;

      // * NÚMEROS DIGITADOS
      default:
        let valorBtnStr = valor.toString();
        let valorLocalStr =
          currentValorLocalValue === 0.0
            ? ''
            : currentValorLocalValue.toString();
        valorVisor = parseFloat(valorLocalStr + valorBtnStr);
        this.setState({
          valorVisor,
          elementosOperacao: {
            ...this.state.elementosOperacao,
            [currentValor]: valorVisor,
          },
        });
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
