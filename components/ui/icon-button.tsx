import { cn } from '@/lib/utils'
import React, { MouseEventHandler } from 'react'

interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    classname?:string;
}

const IconButton: React.FC<IconButtonProps> = ({
    onClick,
    icon,
    classname
}) => {
  return (
    <button
    onClick={onClick}
    className={cn("rounded-full flex items-center justify-center bg-white border shadow-md hover:scale:110 transition", classname)}
    ></button>
  )
}

export default IconButton