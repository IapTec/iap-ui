import { ReducersType, RootState } from '@/store/@types'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

export const useMapState = <Data>(key?: ReducersType) => {
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
    return useAppSelector(state => (key ? state[key] : state)) as Data
}
