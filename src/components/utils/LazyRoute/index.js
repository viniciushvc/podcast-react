import React, { Suspense, lazy } from 'react'

export default function (Component) {
  const ComponentLoadable = lazy(Component)

  return () => (
    <Suspense fallback={<></>}>
      <ComponentLoadable />
    </Suspense>
  )
}
