import { useEffect } from 'react'

export default function useBackground(pageName) {
  useEffect(() => {
    document.body.classList.add('background', `background-${pageName}`)

    return () => {
      document.body.classList.remove('background', `background-${pageName}`)
    }
  }, [pageName])
}
