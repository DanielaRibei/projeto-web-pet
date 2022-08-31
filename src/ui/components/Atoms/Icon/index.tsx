import React, { ImgHTMLAttributes } from 'react'
import { Icone } from './styles'

type IconProps = ImgHTMLAttributes<HTMLElement>

export const Icon = (props: IconProps) => {
    return <Icone {...props} />
}
