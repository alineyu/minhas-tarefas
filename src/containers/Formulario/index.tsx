import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Contatos'
import { cadastrar } from '../../store/reducers/contatos'
import { Botao, BotaoSalvar } from '../../components/Contato/styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.AMIGOS)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        nome,
        telefone,
        email,
        prioridade,
        status: enums.Status.COMUNS
      })
    )
    navigate('/')
  }
  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          type="number"
          placeholder="Numero"
        />
        <Campo
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <Opcoes>
          <p>Prioridades</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.AMIGOS}
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.Prioridade)
                }
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar>Adicionar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
