import { create, StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

// 是否是开发环境
const isDev = process.env.NODE_ENV === 'development'

// 通用封装函数：支持 devtools / persist（可选）
export function createStore<T extends object>(
  creator: StateCreator<T>,
  name: string,
) {
  let initialState: T

  const enhancedCreator: StateCreator<T & { clear: () => void }> = (
    set,
    get,
    api,
  ) => {
    const store = creator(set, get, api)
    initialState = { ...store }

    return {
      ...store,
      clear: () => {
        set(initialState)
      },
    }
  }

  const withDevtools = isDev
    ? (devtools(enhancedCreator, { name }) as StateCreator<
        T & { clear: () => void }
      >)
    : enhancedCreator

  return create<T & { clear: () => void }>(withDevtools)
}

export function createPersistentStore<T>(
  store: StateCreator<T, [['zustand/persist', unknown]], []>,
  name: string,
) {
  const persistWrapped = persist(store, { name: `kds-store-${name}` })
  const withDevtools = isDev
    ? devtools(persistWrapped, { name })
    : persistWrapped

  return create<T>()(withDevtools as StateCreator<T>)
}
