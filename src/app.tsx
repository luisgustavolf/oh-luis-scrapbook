import { CssBaseline } from '@mui/material'
import React from 'react'
import { AppRoutes } from './appRoutes'

export function App() {
  return (
    <React.Fragment>
      <CssBaseline enableColorScheme/>
      <AppRoutes />
    </React.Fragment>
  )
}