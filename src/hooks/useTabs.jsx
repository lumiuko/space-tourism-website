import { useState, useCallback, useEffect } from 'react'

export default function useTabs(maximumValue) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const slide = useCallback(
    increment => {
      const nextSlide = selectedIndex + increment
      if (nextSlide < 0 || nextSlide >= maximumValue) return
      setSelectedIndex(prevIndex => prevIndex + increment)
    },
    [selectedIndex, maximumValue]
  )

  useEffect(() => {
    function handleKeyDown(event) {
      const keyCodeActions = {
        ArrowLeft() {
          slide(-1)
        },
        ArrowRight() {
          slide(1)
        }
      }

      if (!(event.code in keyCodeActions)) return
      keyCodeActions[event.code]()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [slide])

  return {
    selectedIndex,
    setSelectedIndex
  }
}
