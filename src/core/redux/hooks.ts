import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// export const useAppDispatch: AppDispatch = useDispatch
export const useAppDispatch = (): AppDispatch => useDispatch<any>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

/* ---------------- now use it in your components like this: ---------------- */

// const state = useAppSelector((state) => state)

// const dispatch = useAppDispatch()

/* -------------------------------------------------------------------------- */

// It will give you all the access to the state type and dispatch functions.
