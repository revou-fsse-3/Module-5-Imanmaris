
import Layout from "@/layouts";
import { Card } from "@/components";
import DateUpdate from "@/components/Assets/DateUpdate";
import {useFormik} from "formik";
import * as yup from"yup";
import router from "next/router";
// import Link from "next/link";

// Define an interface for the form data
interface FormData {
    email: string;
    password: string;
  }

const Register = () => {

    const generateCustomToken = () => {
        // Customize this function to generate your custom token logic
        return Math.random().toString(36).substring(2) + Date.now().toString(36);
    };

    const handleInsertToken = (token: string) => {
      // Customize this function to handle how you want to store the token
      // For example, you might use localStorage or a state management solution
      console.log('Token inserted:', token);
    };

    const forMik = useFormik<FormData>({
        initialValues: {
          email: "",
          password: "",
        },
        onSubmit: (values, {resetForm}) => {
          // Handle form submission logic here
          console.log("Form values submitted:", values)

          try {
            // Generate a custom token locally
            const customToken = generateCustomToken();
    
            // Custom token handling function
            handleInsertToken(customToken);
    
            console.log('Silahkan anda sudah login');
    
            // Navigate to the desired route upon successful login
            router.push('/weather');
            
            resetForm();

          } catch (error) {
              console.error(error);
          }
        },

        validationSchema: yup.object({
          email: yup.string().email('invalid email format, example => agus@example.com').required('Email is required'),
          password: yup.string().required(),            
        })

      });

        
      
      


  return (

    <main 
        className={`bg-sky-50/[.9] rounded-b-xl flex min-h-screen flex-col items-center justify-center`}
        >
            <Layout>
                <section className="w-full p-5 bg-sky-100/[.9] text-black flex flex-col justify-center rounded-md">
                    <h1 className="w-full p-5 text-3xl bg-sky-100/[.9] text-black flex justify-center rounded-md">REGISTER HERE</h1>

                    <div className="text-xl m-5 flex justify-center">
                        <DateUpdate/>
                    </div>

                        <Card>
                            <form onSubmit={forMik.handleSubmit} >
                                <div className="w-full p-5 text-2xl bg-sky-100/[.9] text-black flex flex-col justify-center rounded-md">
                                <label>Email</label>
                                <input
                                    className="border-solid border-2 border-sky-500 py-1"
                                    name="email"
                                    value={forMik.values.email}
                                    onBlur={forMik.handleBlur("email")}
                                    onChange={forMik.handleChange("email")}
                                />
                                {
                                  forMik.errors.email && (
                                    <text>{forMik.errors.email}</text>
                                  )
                                  
                                  }
                                </div>

                                <div className="w-full p-5 text-2xl bg-sky-100/[.9] text-black flex flex-col justify-center rounded-md">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="border-solid border-2 border-sky-500 py-1"
                                    name="password"
                                    value={forMik.values.password}
                                    onBlur={forMik.handleBlur("password")}
                                    onChange={forMik.handleChange("password")}
                                />
                                {
                                  forMik.errors.password && (
                                    <text>{forMik.errors.password}</text>
                                  )
                                  
                                  }                                
                                </div>

                                <button
                                type={"submit"}
                                className="w-full mt-3 mb-2 text-2xl bg-green-400 text-gray-100 hover:bg-green-700 hover:text-white rounded-md py-2 font-medium"
                                >
                                {'Register'}
                                </button>
                            </form>
                        </Card>

                </section>
            </Layout>
    </main>

  )
}

export default Register


