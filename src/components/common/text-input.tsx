import { Controller } from 'react-hook-form'

interface TextInputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  containerClassName?: string
  inputClassName?: string
  labelClassName?: string
  label?: string
  control: any
  htmlFor?: string
  name: string
  errorMessage?: string
  pattern?: any
  placeholder?: string
  required?: boolean
  type?: React.HTMLInputTypeAttribute
}

export const TextInput: React.FC<TextInputProps> =
  (
    {
      onChange,
      containerClassName,
      inputClassName,
      labelClassName,
      label,
      control,
      htmlFor,
      name,
      errorMessage,
      pattern,
      placeholder,
      required,
      type
    },
  ) => {

    return (
      <div className={`${containerClassName}`}>
        <label htmlFor={htmlFor} className={`${labelClassName}`}>
          {label}
        </label>

        <Controller
          name={name}
          control={control}
          rules={{
            required: required,
            pattern: pattern,
          }}
          render={({ field, fieldState }) => (
            <>
              <input
                type={type}
                ref={field.ref}
                onChange={(e) => { field.onChange(e); onChange && onChange(e) }}
                value={field.value}
                id={htmlFor}
                className={`${inputClassName}`}
                placeholder={placeholder}
              />
              {fieldState.error && (
                <p className='text-xs mt-2 text-red-500'>
                  {errorMessage || fieldState.error.message}
                </p>
              )}
            </>
          )}
        />
      </div>
    )
  }
