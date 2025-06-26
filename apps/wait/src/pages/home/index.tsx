import { useTitle } from '@/hooks/useTitle'

import Delivery from './components/Delivery'
import Equipping from './components/Equipping'
const Home = () => {
  useTitle('待機中')
  return (
    <div className="flex h-full w-full justify-between bg-background-subtle">
      <Equipping></Equipping>
      <Delivery></Delivery>
    </div>
  )
}

export default Home
