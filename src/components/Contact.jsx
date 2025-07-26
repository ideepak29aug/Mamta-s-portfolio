import React, { useRef, useState } from 'react'
import { ValidationFormSchema } from "./Validations.jsx"
import { Formik } from 'formik'
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const handleAdd = async (values, actions) => {
        setIsLoading(true);
        try {
          await emailjs.sendForm(
            "service_kc80kqg",
            "template_a5decrm",
            form.current,
            "1pWWf5cTKp4jdB-ak"
          );
          actions.resetForm();
          // Reset the form ref as well
          form.current.reset();
        } catch (error) {
          console.log("FAILED...", error.text);
        } finally {
          setIsLoading(false);
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
                    <form ref={form} onSubmit={(e) => e.preventDefault()} className='flex flex-col max-w-[600px] w-full'>
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

                        <button 
                            onClick={handleSubmit} 
                            type='submit' 
                            disabled={isLoading}
                            className={`mx-auto my-4 text-gray-300 border-2 px-4 py-3 transition-all duration-300 ${
                                isLoading 
                                ? 'bg-orange-400 border-orange-400 cursor-not-allowed' 
                                : 'hover:bg-orange-400 hover:border-orange-400'
                            }`}
                        >
                            {isLoading ? (
                                <span className="flex items-center">
                                    <svg 
                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-300" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24"
                                    >
                                        <circle 
                                            className="opacity-25" 
                                            cx="12" 
                                            cy="12" 
                                            r="10" 
                                            stroke="currentColor" 
                                            strokeWidth="4"
                                        ></circle>
                                        <path 
                                            className="opacity-75" 
                                            fill="currentColor" 
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    <span className="animate-pulse">Collaborating...</span>
                                </span>
                            ) : (
                                "Let's Collaborate"
                            )}
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Contact