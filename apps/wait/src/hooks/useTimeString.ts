import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

/**
 * 每分钟更新一次，返回当前时间字符串 'HH:mm'
 */
export function useTimeString(): string {
  const [time, setTime] = useState(() => dayjs().format('HH:mm'))

  useEffect(() => {
    // 初次渲染后，设置定时器在整分钟更新
    const now = dayjs()
    const delay = (60 - now.second()) * 1000

    const timeout = setTimeout(() => {
      setTime(dayjs().format('HH:mm'))

      const interval = setInterval(() => {
        setTime(dayjs().format('HH:mm'))
      }, 60 * 1000)

      // 清理定时器
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [])

  return time
}
