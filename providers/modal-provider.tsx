'use client'

import { StoreModal } from '@/components/modals/store-modal'
import { useEffect, useState } from 'react'

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // hydration error 위해 사용
  if (!isMounted) {
    return null
  }

  return (
    <>
      <StoreModal />
    </>
  )
}
