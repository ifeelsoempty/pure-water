import { useState } from 'react';

export const Input = (props) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const onBlur = (e) => {
    if(props.inputData.required && value == false){
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }
  const onChange = (e) => {
    setValue(e.target.value);
    props.onChange(e.target.value);
  }
  return (
    <div className={`${!isValid ? 'input input--invalid' : 'input'}`}>
      <input
        onBlur={onBlur} 
        value={value} 
        type="text" 
        onChange={onChange} 
        name={props.inputData.name} 
        placeholder={props.inputData.placeholder} 
      />
    </div>
  )
}