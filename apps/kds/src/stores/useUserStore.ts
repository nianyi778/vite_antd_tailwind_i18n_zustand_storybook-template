import { createPersistentStore } from './createStore'

interface UserState {
  token: string
  username: string
  setToken: (token: string) => void
  clear: () => void
}

export const useUserStore = createPersistentStore<UserState>(
  (set) => ({
    token: '',
    username: '',
    setToken: (token) => set({ token }),
    clear: () => set({ token: '', username: '' }),
  }),
  'UserStore',
)
