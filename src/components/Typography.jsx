import React from 'react'
import { Typography } from '@mui/material'

const TypographyComponent = ({title ,id ,name,variant}) => {
    return (
        <Typography name={name} id={id} variant={variant} >
            {title}
        </Typography>
    )
}

export default TypographyComponent;