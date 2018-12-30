import React, { Suspense } from 'react'

export default ({children}) => (
  <Suspense fallback={<p>Loading</p>}>
    {children}
  </Suspense>
)
