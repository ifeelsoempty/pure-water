import InputMask from 'react-input-mask'

export const Text = (props) => {
  return (
    <div className={`input ${!!props.touched && props.error ? 'input--invalid' : ''}`}>
      <input
        onBlur={props.onBlur}
        value={props.value}
        onChange={props.onChange}
        name={props.name} 
        placeholder={props.placeholder} 
      />
      <div className="input-error">
        { !!props.touched && props.error }
      </div>
    </div>
  )
}

export const TextMask = (props) => {
  return (
    <div className={`input ${!!props.touched && props.error ? 'input--invalid' : ''}`}>
      <InputMask
        name={props.name}
        maskChar={props.maskChar} 
        mask={props.mask} 
        value={props.value} 
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
      >
        {(inputProps) => (
          <input
            {...inputProps}
          />
        )}
      </InputMask>
      <div className="input-error">
        { !!props.touched && props.error }
      </div>
    </div>
  )
}