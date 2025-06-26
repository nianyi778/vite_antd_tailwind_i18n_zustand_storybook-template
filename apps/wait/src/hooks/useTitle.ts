import { useEffect, useRef } from 'react'

/**
 * 设置页面标题，可选是否在卸载时恢复原始标题
 * @param title 要设置的新标题
 * @param restoreOnUnmount 卸载时是否恢复原始标题（默认 true）
 */
export function useTitle(title: string, restoreOnUnmount = true) {
  const originalTitle = useRef(document.title)

  useEffect(() => {
    document.title = title

    return () => {
      if (restoreOnUnmount) {
        document.title = originalTitle.current
      }
    }
  }, [title, restoreOnUnmount])
}
