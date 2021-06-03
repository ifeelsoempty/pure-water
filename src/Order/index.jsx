import { useState } from 'react'

import AnimatedNumber from 'react-animated-number';

import { orderSchema } from './orderFields'
import { Preview } from './Preview'
import { Water } from './Water'
import { Date } from './DatePicker/Date'
import { Time } from './DatePicker/Time'
import { Table } from '../components/ui/Table'
import { Formik, Field, Form } from 'formik';

import { Text, TextMask } from '../components/ui/Text'
import { CheckBox } from '../components/ui/CheckBox'

import { getNextDays } from './DatePicker/utils'

export const Order = () => {
  const [stage, setStage] = useState(1);
  const [price, setPrice] = useState(0);
  const [formData, setFormData] = useState({});

  const setNewPrice = (items) => {
    let newPrice = 0;

    if(items.length) {
      for (let i = 0; i < items.length ; i++) {
        newPrice += items[i].price * items[i].count;
      }
    }

    setPrice(newPrice);
  }

  const getAnimatedNumber = (val) => {
    return (
      <>
        {`${Math.trunc(val)}.`}
        <span className="order-total-price__float">
          {`${val.toFixed(2).split('.')[1]} ₽`}
        </span>
      </>
    )
  }

  const onSubmit = (data) => {
    setFormData(data);
    if(stage === 2){
      setStage(1);
      setPrice(0);
    } else {
      setStage(stage + 1);
    }
  }

  const getOrderInfo = () => {
    return [
        {
          key: `${formData?.date.dayOfMonth} ${formData?.date.monthName}`,
          val: `${formData?.time.startTime ?? ''} - ${formData?.time.endTime ?? ''}`
        },
        {
          key: `Адрес доставки`,
          val: formData?.address ?? ''
        },
        {
          key: `Телефон`,
          val: formData?.phone ?? ''
        },
    ]
  }

  return (
    <div className="order">
      <Preview />
      <div className="order-form">
        <div className="order-form__container">
          <div className={`order-form-title ${stage === 2 ? 'order-form-title--success' : ''}`}>
            <img className="order-form-title__img" src='/img/order-checkmark.svg' alt=""/>
            <div className="order-form-title__label">
              { stage === 1 ? (
                'Заполните данные'
              ) : (
                'Заказ оформлен'
              )}
            </div>
          </div>
          { stage === 1 ? (
            <Formik
              validationSchema={orderSchema}
              initialValues={{
                name: '',
                phone: '',
                email: '',
                address: '',
                agreement: false,
                water: [],
                date: getNextDays(1)[0],
                time: getNextDays(1)[0].intervals[0],
              }}
              onSubmit={onSubmit}
            >
              {(form) => {
                return <Form>
                  <div className="order-customer-form">
                    <div className="order-customer-form__inputs">
                      <Field name="name">
                        {({ form, field }) => (
                          <Text 
                            placeholder="Введите имя"
                            value={field.value} 
                            onChange={field.onChange}
                            onBlur={form.handleBlur}
                            name={field.name}
                            error={form.errors[field.name]}
                            touched={form.touched[field.name]}
                          />
                        )}
                      </Field>
                      <Field name="email">
                        {({ form, field }) => (
                          <Text 
                            placeholder="Введите email" 
                            value={field.value} 
                            onChange={field.onChange}
                            onBlur={form.handleBlur}
                            name={field.name}
                            error={form.errors[field.name]}
                            touched={form.touched[field.name]}
                          />
                        )}
                      </Field>
                      <Field name="phone">
                        {({ form, field }) => (
                          <TextMask
                            key="phone"
                            maskChar={null} 
                            mask="+7 999 999 99 99" 
                            placeholder="Введите телефон" 
                            value={field.value} 
                            onBlur={form.handleBlur}
                            onChange={field.onChange}
                            name={field.name}
                            error={form.errors[field.name]}
                            touched={form.touched[field.name]}
                          />
                        )}
                      </Field>
                      <Field name="address">
                        {({ form, field }) => (
                          <Text 
                            placeholder="Введите адрес" 
                            value={field.value} 
                            onChange={field.onChange}
                            onBlur={form.handleBlur}
                            name={field.name}
                            error={form.errors[field.name]}
                            touched={form.touched[field.name]}
                          />
                        )}
                      </Field>
                    </div>
                    <div className="order-customer-form__policy">
                      <Field name="agreement">
                        {({ form, field }) => (
                          <CheckBox 
                            checked={field.value} 
                            onChange={field.onChange}
                            onBlur={form.handleBlur}
                            name={field.name}
                          >
                            Я согласен на <a className="link" target="blank" href="http://kremlin.ru/acts/bank/24154" rel="noreferrer">обработку персональных данных</a>
                          </CheckBox>
                        )}
                      </Field>
                    </div>
                  </div>
                  <div className="separate"></div>
                  <div className="order-row">
                    <div className="order-col">
                      <div className="order-col__title">
                        Вода
                      </div>
                      <Field name="water">
                        {({ form, field }) => (
                          <Water value={field.value} onChange={async (items) => {
                            await form.setFieldValue(field.name, items);
                            setNewPrice(items)
                          }} />
                        )}
                      </Field>
                    </div>
                    <div className="order-row__separate separate"></div>
                    <div className="order-col">
                      <div className="order-col__title">
                        Дата и время доставки
                      </div>
                      <Field name="date">
                        {({ form, field }) => (
                          <Date value={field.value} onChange={async (item) => {
                            const hasInterval = !!item.intervals.filter((int) => (
                              int.id === form.values?.time?.id
                            ))[0];

                            if(!hasInterval) await form.setFieldValue('time', item.intervals[0])
                            await form.setFieldValue(field.name, item);
                          }}/>
                        )}
                      </Field>
                      <Field name="time">
                        {({ form, field }) => (
                          <Time value={field.value} intervals={form.values?.date?.intervals} onChange={async (item) => {
                            await form.setFieldValue(field.name, item);
                          }}/>
                        )}
                      </Field>
                    </div>
                  </div>
                  <div className="separate"></div>
                  <div className="order-total">
                    <div className="order-total__top">
                      <div className="order-total__title">
                        Итого
                      </div>
                      <AnimatedNumber
                        className="order-total-price"
                        component="div"
                        value={price} 
                        duration={300}
                        formatValue={getAnimatedNumber}
                      />
                    </div>
                    <div className="order-total__hr separate separate--solid"></div>
                  </div>
                  <button disabled={!form.isValid || !form.dirty}  type="submit" className="btn">
                    Заказать воду
                  </button>
                </Form>
              }}
            </Formik>
          ) : (
            <div className="order-form__success">
              <Table rows={getOrderInfo()} />
              <Table className="mt-20" rows={
                formData.water.map((item) => (
                  {
                    key: `Вода ${item.size} л`,
                    val: `${item.count} шт`
                  }
                ))
              } />
              <div className="order-total">
                <div className="order-total__top">
                  <div className="order-total__title">
                    Итого
                  </div>
                  <AnimatedNumber
                    className="order-total-price"
                    component="div"
                    value={price} 
                    duration={300}
                    formatValue={getAnimatedNumber}
                  />
                </div>
                <div className="order-total__hr separate separate--solid"></div>
              </div>
              <button onClick={onSubmit} className="btn">
                Новый заказ
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}