import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contatos'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Ana',
      telefone: '11987654321',
      email: 'ana@gmail.com',
      prioridade: enums.Prioridade.AMIGOS,
      status: enums.Status.COMUNS,
      id: 1
    },

    {
      nome: 'Paula',
      telefone: '31998765432',
      email: 'paula@gmail.com',
      prioridade: enums.Prioridade.FAMILIA,
      status: enums.Status.COMUNS,
      id: 2
    },

    {
      nome: 'Julia',
      telefone: '21912345678',
      email: 'julia@gmail.com',
      prioridade: enums.Prioridade.TRABALHO,
      status: enums.Status.COMUNS,
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoExiste) {
        alert('Esse contato ja existe')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexContato >= 0) {
        state.itens[indexContato].status = action.payload.finalizado
          ? enums.Status.FAVORITOS
          : enums.Status.COMUNS
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } =
  contatosSlice.actions
export default contatosSlice.reducer
