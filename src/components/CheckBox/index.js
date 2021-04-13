export const CheckBox = (props) => {
  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" checked={props.checked} onChange={(e) => props.onChange(e.target.checked)} name={props.inputData.name}/>
        <div className="checkbox__btn"></div>
      </label>
      <span>{ props.children }</span>
    </div>
  )
}