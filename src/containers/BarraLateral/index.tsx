import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { alterarTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/Contatos'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <S.Input
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(e) => dispatch(alterarTermo(e.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Prioridade.AMIGOS}
                criterio="prioridade"
                legenda="amigos"
              />
              <FiltroCard
                valor={enums.Prioridade.FAMILIA}
                criterio="prioridade"
                legenda="familia"
              />
              <FiltroCard
                valor={enums.Prioridade.TRABALHO}
                criterio="prioridade"
                legenda="trabalho"
              />
              <FiltroCard
                valor={enums.Status.FAVORITOS}
                criterio="status"
                legenda="favoritos"
              />
              <FiltroCard criterio="todos" legenda="todos" />
            </S.Filtros>
          </>
        ) : (
          <S.BotaoVoltar onClick={() => navigate('/')}>
            <i className="fa-solid fa-arrow-left"></i>
            Voltar
          </S.BotaoVoltar>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
