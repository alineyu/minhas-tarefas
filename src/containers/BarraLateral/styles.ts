import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`

export const Input = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  color:"#666666;
  border-color: #666666;
  width: 100%;
`

export const BotaoVoltar = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;

  i {
    margin-right: 8px;
  }
`
