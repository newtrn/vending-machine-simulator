import clsx from 'clsx'

import { ButtonProps } from '@/interfaces/component'

import ButtonStyeld from './styled'

const Button = ({ text, onClick, disabled, textIcon, className, outline, danger, testID }: ButtonProps) => {
  return (
    <ButtonStyeld
      onClick={!disabled ? onClick : undefined}
      className={clsx(
        disabled && 'disabled',
        textIcon && 'text-icon',
        className && className,
        outline && 'outline',
        'flex justify-center align-center',
        danger && 'danger'
      )}
      data-testid={testID}
    >
      {text}
    </ButtonStyeld>
  )
}

export default Button
