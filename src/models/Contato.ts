import * as enums from '../utils/enums/Contatos'

class Contato {
  nome: string
  telefone: string
  email: string
  prioridade: enums.Prioridade
  status: enums.Status
  id: number

  constructor(
    nome: string,
    telefone: string,
    email: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    id: number
  ) {
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.prioridade = prioridade
    this.status = status
    this.id = id
  }
}

export default Contato
