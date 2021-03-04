import { Box } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import React from 'react'

const NotFound = (props) => {
  const {text, title} = props
  return (
    <Box width='50%'>
      <Alert severity='error'>
        <AlertTitle>{title}</AlertTitle>
        {text}
      </Alert>
    </Box>
  )
}

export default NotFound
