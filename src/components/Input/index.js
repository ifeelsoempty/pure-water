export const Input = (props) => {
  return (
    <div className="input">
      <input type="text" onChange={(e) => props.onChange(props.inputData.name, e.target.value)} name={props.inputData.name} placeholder={props.inputData.placeholder} />
    </div>
  )
}