import * as yup from 'yup';

export const orderSchema = yup.object().shape({
  name: yup.string()
    .trim()
    .required('Обязательное поле'),
  
  phone: yup.string()
    .transform((val) => val.replace(/\s/g, ''))
    .transform((val) => val.replace('+7', ''))
    .required('Обязательное поле')
    .min(10, 'Незаполненное поле')
    .max(10),

  email: yup.string()
    .trim()
    .required('Обязательное поле')
    .email('Некорректный email'),
  
  address: yup.string()
    .trim()
    .required('Обязательное поле'),
  
  agreement: yup.boolean()
    .isTrue(),
  
  water: yup.array()
    .min(1),

    
  date: yup.object()
    .required(),
  
  time: yup.object()
    .required(),
});