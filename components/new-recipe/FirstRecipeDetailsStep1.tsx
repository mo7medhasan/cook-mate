import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { TextInput, Button, Textarea } from '@mantine/core';
import { UploadFile } from '../UploadFile';


const validationSchema = Yup.object().shape({
  recipeName: Yup.string().required('Required'),
  recipeDescription: Yup.string().required('Required'),
  recipeIngredients: Yup.array().of(Yup.string().required('Required')).min(1, 'Add at least one ingredient').required('Required'),
  recipeImages: Yup.mixed().optional()
});

function FirstRecipeDetailsStep1() {
  const [fileUrls, setFileUrls] = useState([]);

  const handleUpload = async (file: any) => {
    // Replace this with your actual upload function
     const fileUrl = await uploadFile(file);
     setFileUrls((prev) => [...prev, ...file]);
    console.log(file);

  };

  return (
    <>
      <Formik
        initialValues={{ recipeName: '', recipeDescription: '', recipeIngredients: ['', '', ''], recipeImages: null }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('values', values)
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <div className='w-full grid lg:grid-cols-11 gap-x-28'>
              <div className='col-span-6 grid gap-12'>
                <h2 className='text-primary font-bold text-xl -mb-8'>First Recipe Details</h2>
                <div className='space-y-2'>
                  <TextInput
                    label="Recipe Name"
                    name="recipeName"
                    placeholder="Enter Recipe Name"
                    component={Field}
                    radius="xl"
                  />
                  <ErrorMessage name="recipeName" render={(mess) => <p className='text-red-600'>{mess}</p>} />
                </div><div className='space-y-2'>
                  <Textarea
                    radius="md"
                    autosize
                    minRows={4}
                    maxRows={4}
                    label="Recipe Description"
                    name="recipeDescription"
                    placeholder="Enter Recipe Description"
component={Field} className='h-24'
                  />
                  <ErrorMessage name="recipeDescription" render={(mess) => <p className='text-red-600'>{mess}</p>} />
                </div>
                <div className='grid gap-6'>
                  {[...Array(values.recipeIngredients.length).keys()].map((key) => (
                    <div key={key} >
                      <TextInput

                        name={`recipeIngredients.${key}`}
                        placeholder={`Ingredient ${key + 1}`}
                        component={Field}
                      />
                      <ErrorMessage name={`recipeIngredients.${key}`} render={(mess) => <p className='text-red-600'>{mess}</p>} />
                    </div>
                  ))}
                </div></div>
              <div className='col-span-5'>
                <UploadFile onChange={handleUpload} />
                <div>
                  {fileUrls.map((url, index) => (
                    <div key={index}>{url}</div>
                  ))}
                </div>
              </div>

            </div>
            <Button type="submit" className='mt-6' disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default FirstRecipeDetailsStep1