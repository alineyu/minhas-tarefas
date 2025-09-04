import styled from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;
`

export const Opcoes = styled.div`
  margin-bottom: 16px;
  p {
    margin-bottom: 16px;
  }
  label {
    margin-right: 16px;
  }
  input[type='radio'] {
  margin-right: 6px;

  &:checked {
    accent-color:#333;
}
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
