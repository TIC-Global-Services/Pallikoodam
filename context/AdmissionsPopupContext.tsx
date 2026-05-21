'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import AdmissionsPopup from '@/components/reuseable/AdmissionsPopup'

interface AdmissionsPopupContextType {
  openPopup: () => void
  closePopup: () => void
}

const AdmissionsPopupContext = createContext<AdmissionsPopupContextType>({
  openPopup: () => {},
  closePopup: () => {},
})

export function useAdmissionsPopup() {
  return useContext(AdmissionsPopupContext)
}

export function AdmissionsPopupProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openPopup = useCallback(() => setIsOpen(true), [])
  const closePopup = useCallback(() => setIsOpen(false), [])

  return (
    <AdmissionsPopupContext.Provider value={{ openPopup, closePopup }}>
      {children}
      <AdmissionsPopup isOpen={isOpen} onClose={closePopup} />
    </AdmissionsPopupContext.Provider>
  )
}
