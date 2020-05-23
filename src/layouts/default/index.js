import React from 'react'

import { Header, Footer } from '@/components/base'

export default function ({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
