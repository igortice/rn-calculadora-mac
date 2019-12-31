import React, {Component} from 'react';

import RowBotoes from './RowBotoes';
import RowVisor from './RowVisor';

const defaultState = {
  valorVisor: 0.0,
  elementosOperacao: {valor1: 0.0, operacao: null, valor2: 0.0},
};

export default class AppBody extends Component {
  state = defaultState;

  onClickBotao = valor => {
    this.processarAcaoCalculadora(valor);
  };

  processarAcaoCalculadora(valor) {
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
        console.log(valor);
        break;

      // * PONTO FLUTUANTE
      case ',':
        console.log(valor);
        break;

      // * PROCESSAR RESULTADO
      case '=':
        console.log(valor);
        break;

      // * NÚMEROS DIGITADOS
      default:
        let {valor1, operacao, valor2} = this.state.elementosOperacao;
        // * FORMAR VALOR 1
        if (operacao == null) {
          let valorBtnStr = valor.toString();
          let valorLocalStr = valor1 === 0.0 ? '' : valor1.toString();
          valor1 = parseFloat(valorLocalStr + valorBtnStr);
          this.setState({elementosOperacao: {valor1}});
          this.setState({valorVisor: valor1});
        }
        // * FORMAR VALOR 2
        else {
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
