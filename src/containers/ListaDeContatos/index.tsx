import Contato from '../../components/Contato'
import { MainContainer, Titulo, Resultado } from '../../styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.status === valor
        )
      }
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filtraContatos()

  return (
    <MainContainer>
      <Titulo>Contatos</Titulo>
      <Resultado>
        {`${
          valor !== undefined
            ? ` ${contatos.length} contato(s) marcado(s) como "${valor}" `
            : ''
        }`}
      </Resultado>
      <ul>
        {contatos.map((t) => (
          <li key={t.nome}>
            <Contato
              nome={t.nome}
              telefone={t.telefone}
              email={t.email}
              prioridade={t.prioridade}
              status={t.status}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
