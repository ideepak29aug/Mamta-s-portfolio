import React, { useRef } from 'react'
import { ValidationFormSchema } from "../components/Validations.jsx"
import { Formik } from 'formik'
import emailjs from "@emailjs/browser";



const Contact1 = () => {
    const form = useRef();

    const handleAdd = async (values, actions) => {
    
        try {
          await emailjs.sendForm(
            "service_0g7icjb",
            "template_ecko59a",
            form.current,
            "eUaW2fd7u3r7OIvyw"
          );
          actions.resetForm();
        } catch (error) {
          console.log("FAILED...", error.text);
        } 
      };


    return (
        <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
            <Formik
                initialValues={{
                    username: "",
                    email: "example@gmail.com",
                    message: ""
                }}
                onSubmit={handleAdd}
                validationSchema={ValidationFormSchema}
            >
                {({
                    handleChange, handleBlur, handleSubmit, errors, touched,
                }) => (


                    <form className='flex flex-col max-w-[600px] w-full'>
                        <div className='pb-8'>
                            <p className='text-gray-300 font-bold border-b-4 border-orange-400 inline text-4xl'>Contact</p>
                            <p className='py-4 text-gray-300'>{`// Submit the form below or shoot me email - mamtakumawaton@gmail.com`}</p>
                        </div>

                        {/* input fields  */}

                        <div>
                            <input
                                type="text"
                                placeholder='Enter your Full Name'
                                className='p-2 mb-1 bg-gray-100 w-full'
                                name='username'
                                onBlur={handleBlur('username')}
                                onChange={handleChange('username')}
                            />
                            {errors.username && touched.username ? (
                                <p className='text-red-500'>{errors.username}</p>
                            ) : null}
                        </div>

                        <div>
                            <input
                                type="email"
                                placeholder='Enter your Email'
                                className='p-2 mt-3 mb-1 bg-gray-100 w-full'
                                name='email'
                                onBlur={handleBlur('email')}
                                onChange={handleChange('email')}

                            />
                            {errors.email && touched.email ? (
                                <p className='text-red-500'>{errors.email}</p>
                            ) : null}
                        </div>

                        <div>
                            <textarea
                                id=""
                                rows={10}
                                placeholder='Enter your message'
                                className='p-2 mt-3 bg-gray-100 w-full'
                                name="message"
                                onBlur={handleBlur('message')}
                                onChange={handleChange('message')}
                            />
                            {errors.message && touched.message ? (
                                <p className='text-red-500'>{errors.message}</p>
                            ) : null}
                        </div>


                        {/* submit button  */}

                        <button onClick={handleSubmit} className='mx-auto my-4 text-gray-300 border-2 px-4 py-3 hover:bg-orange-400 hover:border-orange-400'>Let's Collaborate</button>
                    </form>
                )}
            </Formik>
            {/* </div> */}
        </div>
    )
}

export default Contact1