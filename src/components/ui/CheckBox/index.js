export const CheckBox = (props) => {
  return (
    <label className="checkbox">
      <input type="checkbox" checked={props.checked} onChange={(e) => props.onChange(e.target.checked)} name={props.inputData.name}/>
      <div className="checkbox__btn"></div>
      <span>{ props.children }</span>
    </label>
  )
}