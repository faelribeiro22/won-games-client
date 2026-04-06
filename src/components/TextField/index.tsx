import { useState, InputHTMLAttributes } from 'react'
import clsx from 'clsx'

export type TextFieldProps = {
  icon?: JSX.Element
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
  className?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  labelFor = '',
  icon,
  initialValue = '',
  iconPosition = 'left',
  onInput,
  disabled = false,
  error = '',
  className,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    if (onInput) {
      onInput(newValue)
    }
  }

  const wrapperClasses = clsx(className)

  const labelClasses = clsx('text-small cursor-pointer', {
    'text-black': !error && !disabled,
    'text-red': error,
    'text-gray cursor-not-allowed': disabled
  })

  const inputWrapperClasses = clsx(
    'flex bg-light-gray rounded-[0.2rem] px-xsmall border-2',
    'focus-within:shadow-[0_0_0.5rem_#F231A5]',
    {
      'border-light-gray': !error,
      'border-red': error
    }
  )

  const inputClasses = clsx(
    'text-black font-sans text-medium py-xxsmall bg-transparent border-0 outline-none w-full',
    {
      'pl-xsmall': iconPosition === 'left' && icon,
      'pr-xsmall': iconPosition === 'right' && icon,
      'cursor-not-allowed text-gray placeholder:text-gray': disabled
    }
  )

  const iconClasses = clsx('flex w-[2.2rem] text-gray [&>svg]:w-full', {
    'order-1': iconPosition === 'right',
    'order-0': iconPosition === 'left',
    'cursor-not-allowed': disabled,
    'text-red': error
  })

  return (
    <div className={wrapperClasses}>
      {!!label && (
        <label htmlFor={labelFor} className={labelClasses}>
          {label}
        </label>
      )}
      <div className={inputWrapperClasses}>
        {!!icon && <div className={iconClasses}>{icon}</div>}
        <input
          type="text"
          onChange={onChange}
          value={value}
          disabled={disabled}
          className={inputClasses}
          {...props}
        />
      </div>
      {!!error && <div className="text-red text-small">{error}</div>}
    </div>
  )
}

export default TextField
