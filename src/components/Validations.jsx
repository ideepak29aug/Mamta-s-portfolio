import * as Yup from 'yup'

export const ValidationFormSchema = Yup.object({
    username: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format').required('Required!'),
    message: Yup.string().required('Required!')
  })