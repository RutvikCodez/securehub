import React from 'react'
import { Label } from '../ui/label'
import { labelProps } from '@/utils/types'

const CommonLabel = ({id,name}:labelProps) => {
  return (
    <Label htmlFor={id}>{name}</Label>
  )
}

export default CommonLabel