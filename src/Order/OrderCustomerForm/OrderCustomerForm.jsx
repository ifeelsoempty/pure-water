import { useState } from 'react';

import { OrderCustomerFormInputs } from './OrderCustomerFormInputs'
import { Input } from '../../components/Input'
import { CheckBox } from '../../components/CheckBox'

export const OrderCustomerForm = () => {
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
          OrderCustomerFormInputs.map(inputObj => {
            return <Input inputData={inputObj} onChange={(name, value) => changeData(name, value)}/>
          })
        }
      </div> 
      <div className="order-customer-form__policy">
        <CheckBox checked={agreement} onChange={setAgreement} inputData={{name: 'policy'}}>
          Я согласен на <a href="#" class="link">обработку персональных данных</a>
        </CheckBox>
      </div>
    </div>
  )
}