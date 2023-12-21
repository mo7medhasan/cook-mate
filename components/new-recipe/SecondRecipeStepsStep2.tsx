
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import * as Yup from "yup";
import Icon from '../ui-assets/Icon';
import Image from 'next/image';

interface FormValues {
  recipeSteps: string[];
}

// Define the initial form values
const initialValues: FormValues = {
 
  recipeSteps: ["", "", ""], // Add initial ingredients here
 
};

// Define the validation schema
const validationSchema = Yup.object().shape({
  recipeSteps: Yup.array().of(Yup.string().required("Required")).min(1, "Add at least one Step").required("Required"),
});

function SecondRecipeStepsStep2({setData}:{setData:React.Dispatch<React.SetStateAction<{}>>}) {
  const [steps, setSteps] = useState<string[]>(initialValues.recipeSteps);
  
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting}) => {
    
      console.log("values", values);
      setData(values)
      setTimeout(() => {
        setSubmitting(false);
      }, 400);
    }}
   >
     {({ isSubmitting,handleSubmit,setFieldValue}) => (
       <Form>
         <div className="flex lg:gap-x-28  flex-wrap-reverse gap-6">
           <div className="flex-auto grid gap-12">
             <h2 className="text-primary font-bold text-xl -mb-8">
             Second add Recipe Steps
             </h2>
         
        
          
             {steps.map((_, key) => (
                
                  <div className="space-y-2" key={key}>
                       <label htmlFor={`recipeSteps.${key}`}>{`Step ${key + 1}`}</label>


          
                  <Field
                id={`recipeSteps.${key}`}
                    label={`Step ${key + 1}`}
                    name={`recipeSteps.${key}`}
                    placeholder={`put some details of your recipe`}
                    component={'textarea'}
                    className="w-full border rounded-xl p-4 h-44  "
                  />
                  <ErrorMessage name={`recipeIngredients.${key}`}
                     render={(mess) => (
                       <p className="text-red-600">{mess}</p>
                     )}
                  />
                </div>
               ))}
               <button
                 onClick={() => {
                   setSteps((prev) => [...prev, ""]);
                 }}
                 className="bg-slate-300 w-[250px] text-center py-2 rounded-full"
               >
                 Add new
               </button>
             
             <button
               type="submit"
               disabled={isSubmitting}
               onClick={()=>{
               
                 handleSubmit()
               }}
               className="flex justify-center gap-3 items-center mt-6 w-full flex-1 rounded-full bg-secondary text-white uppercase p-2 font-semibold"
             >
               Save 
               <Icon name="arrow-right-2" color={"white"} size={24} />
             </button>
           </div>
           <div className="flex-auto flex ">
           <div className='relative flex-1'>
            <Image className='object-contain object-top pt-6' src={'/Images/layoutNewRecipe.svg'} fill alt='layoutNewRecipe'/>
           </div>
           </div>
         </div>
       </Form>
     )}
   </Formik>
  )
}

export default SecondRecipeStepsStep2