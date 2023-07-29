import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'

export function useLoading(): boolean {
  const router = useRouter()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const onStart = () => {
      setLoading(true)
    }
    const onComplete = () => {
      setLoading(false)
    }
    router.events.on('routeChangeStart', onStart)
    router.events.on('routeChangeComplete', onComplete)

    return () => {
      router.events.off('routeChangeStart', onStart)
      router.events.off('routeChangeComplete', onComplete)
    }
  }, [router])

  return isLoading
}
