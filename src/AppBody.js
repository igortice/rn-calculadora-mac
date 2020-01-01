import React, {Component} from 'react';

import RowBotoes from './RowBotoes';
import RowVisor from './RowVisor';

const defaultState = {
  animation: null,
  valorVisor: 0.0,
  currentValor: 'valor1',
  elementosOperacao: {valor1: 0.0, operacao: '+', valor2: 0.0},
};

export default class AppBody extends Component {
  state = defaultState;

  componentDidUpdate(prevProps, prevState) {
    const {animation} = this.state;

    if (animation) {
      this.turnOffRedTimeout = setTimeout(() => {
        this.setState({animation: null});
      }, 200);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.turnOffRedTimeout);
  }

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
          animation: 'bounceIn',
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
        this.processarResultadoCalculadora();
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

  processarResultadoCalculadora() {
    let {
      valorVisor,
      elementosOperacao: {valor1, operacao, valor2},
    } = this.state;
    const itensOperacao = [valor1, operacao, valor2];
    const strOperacao = itensOperacao.join('');

    // eslint-disable-next-line no-eval
    valorVisor = parseFloat(eval(strOperacao));
    this.setState({
      valorVisor,
      elementosOperacao: {
        ...this.state.elementosOperacao,
        valor1: valorVisor,
      },
    });
  }

  render() {
    const {valorVisor, animation} = this.state;

    return (
      <>
        <RowVisor size={15} textoVisor={valorVisor} animation={animation} />

        <RowBotoes size={85} onClickBotao={this.onClickBotao} />
      </>
    );
  }
}
