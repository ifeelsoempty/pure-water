import { useState } from 'react';

import { CustomerFormInputs } from './CustomerFormInputs'
import { Input } from '../../components/ui/Input'
import { CheckBox } from '../../components/ui/CheckBox'

export const CustomerForm = () => {
  const [formData, setFormData] = useState({});
  const [agreement, setAgreement] = useState(false);

  const changeData = (name, value) => {
    const newFormData = Object.assign({}, formData)
    newFormData[name] = value;
    setFormData(newFormData);
  }

  return (
    <div className="order-customer-form">
      <div className="order-customer-form__title">Заполните данные</div>
      <div className="order-customer-form__inputs">
        {
          CustomerFormInputs.map((inputObj, index) => {
            return <Input key={index} inputData={inputObj} onChange={(name, value) => changeData(name, value)}/>
          })
        }
      </div> 
      <div className="order-customer-form__policy">
        <CheckBox checked={agreement} onChange={setAgreement} inputData={{name: 'policy'}}>
          Я согласен на <a className="link" href="#">обработку персональных данных</a>
        </CheckBox>
      </div>
    </div>
  )
}