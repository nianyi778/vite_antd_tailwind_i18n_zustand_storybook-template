import { useTimeString } from '@/hooks/useTimeString'

import DeliveryContent from './DeliveryContent'

export default function Delivery() {
  const time = useTimeString()
  return (
    <div className="flex h-full w-2/3">
      <div className="my-4 mr-4 flex flex-1 flex-col justify-between rounded-md bg-background">
        <div className="title flex items-center justify-between px-4 py-2 font-semibold">
          <div>
            <span className="text-xl"> お呼出中の番号 </span>
            <span className="text-xs"> Available </span>
          </div>
          <span className="text-xl">{time}</span>
        </div>
        <div className="h-full flex-1">
          <DeliveryContent theme="obvious" />
        </div>
      </div>
    </div>
  )
}
