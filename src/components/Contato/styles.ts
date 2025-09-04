import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Contatos'

type NomeProps = {
  isEditing: boolean
}

export const Card = styled.div`
  padding: 16px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.31);
  margin-bottom: 32px;
  border-radius: 16px;
  border: 1px solid rgb(180, 177, 177);

  label {
    display: flex;
    align-items: center;
    cursor: pointer;

    .fa-star {
      padding-bottom: 8px;
      color: rgb(180, 177, 177);
      margin-right: 8px;
    }

    .checkbox {
      margin-right: 8px;
      height: 16px;
      width: 16px;
      cursor: pointer;
      margin-bottom: 8px;
      display: none;

      &:checked + .fa-star {
        color: #e1a32a;
      }
    }
  }
`
export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`
export const Nome = styled.input<NomeProps>`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  border: none;
  color: ${(props) => (props.isEditing ? 'rgb(180, 177, 177)' : '#333')};
`

export const Campo = styled.input`
  color: #5b5b5b;
  font-size: 14px;
  line-height: 24px;
  width: 100%;
  display: block;
  margin-bottom: 16px;
  margin-top: 16px;
  border: none;
`
export const Tag = styled.span`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: #e1a32a;
  border-radius: 8px;
  margin-bottom: 16px;
  display: block;
  max-width: fit-content;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
