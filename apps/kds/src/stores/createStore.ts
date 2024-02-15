import { create, StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

// 是否是开发环境
const isDev = process.env.NODE_ENV === 'development'

// 通用封装函数：支持 devtools / persist（可选）
export function createStore<T>(creator: StateCreator<T>, name: string) {
  const withDevtools: StateCreator<T, [], []> = isDev
    ? (devtools(creator, { name }) as StateCreator<T, [], []>)
    : creator

  return create<T>(withDevtools)
}

export function createPersistentStore<T>(
  store: StateCreator<T, [['zustand/persist', unknown]], []>,
  name: string,
) {
  const persistWrapped = persist(store, { name: `store-${name}` })
  const withDevtools = isDev
    ? devtools(persistWrapped, { name })
    : persistWrapped

  return create<T>()(withDevtools as StateCreator<T>)
}
