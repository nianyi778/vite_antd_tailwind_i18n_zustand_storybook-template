import { Space, Typography } from '@elestyle/ui'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'

import { useTitle } from '@/hooks/useTitle'
import { useUserStore } from '@/stores/useUserStore'

const About = () => {
  useTitle('关于')
  const { t } = useTranslation()
  const { token, clear, setToken } = useUserStore()
  const setCookie = () => {
    setToken(Date.now().toString())
  }

  useEffect(() => {
    return () => clear()
  }, [])

  return (
    <div className="p-4 text-center">
      <Space direction="vertical" size={0.5}>
        <Typography>{t('welcome')}</Typography>
        <button onClick={setCookie}>set cookie - {token}</button>
        <Link to={'/setting'}>link setting</Link>
      </Space>
    </div>
  )
}

export default About
