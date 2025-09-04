import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import * as enums from '../../utils/enums/Contatos'

import ContatoClass from '../../models/Contato'

import {
  remover,
  editar,
  cadastrar,
  alteraStatus
} from '../../store/reducers/contatos'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal,
  prioridade,
  status,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    setNome(nomeOriginal)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
  }, [nomeOriginal, telefoneOriginal, emailOriginal])

  function cancelarEdicao() {
    setIsEditing(false)
    setNome(nomeOriginal)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
  }

  function alteraStatusContato(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={id.toString()}>
        <input
          className="checkbox"
          id={id.toString()}
          type="checkbox"
          checked={status === enums.Status.FAVORITOS}
          onChange={alteraStatusContato}
        />
        <i className="fa-solid fa-star"></i>
        <S.Titulo>
          {isEditing && <em>Editando: </em>}
          {nome}
        </S.Titulo>
      </label>
      <S.Tag>{prioridade}</S.Tag>
      <S.Campo
        disabled={!isEditing}
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <S.Campo
        disabled={!isEditing}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.BarraAcoes>
        {isEditing ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    telefone,
                    email,
                    prioridade,
                    status,
                    id
                  })
                )
                setIsEditing(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setIsEditing(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Excluir
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
