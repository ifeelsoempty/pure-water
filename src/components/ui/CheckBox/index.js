export const CheckBox = (props) => {
  return (
    <label className={`checkbox ${props.error ? 'checkbox--invalid' : ''}`}>
      <input type="checkbox" checked={props.checked} onChange={props.onChange} name={props.name}/>
      <div className="checkbox__btn"></div>
      <span>{ props.children }</span>
    </label>
  )
}