import React from 'react'
import { Button } from '@mui/material'

const FormButton = ({title ,id ,name,variant, color ="primary",size}) => {
    return (
        <Button name={name} id={id} variant={variant} size={size} color={color} >
            {title}
        </Button>
    )
}

export default FormButton;