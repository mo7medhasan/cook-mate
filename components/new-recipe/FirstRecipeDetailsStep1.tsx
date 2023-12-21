import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { TextInput, Button, Textarea } from "@mantine/core";
import { UploadFile } from "../UploadFile";
import Icon from "../ui-assets/Icon";

// Define the shape of the form values
interface FormValues {
  recipeName: string;
  recipeDescription: string;
  recipeIngredients: string[];
  recipeImages: File | null;
}

// Define the initial form values
const initialValues: FormValues = {
  recipeName: "",
  recipeDescription: "",
  recipeIngredients: ["", "", ""], // Add initial ingredients here
  recipeImages: null,
};

// Define the validation schema
const validationSchema = Yup.object().shape({
  recipeName: Yup.string().required("Required"),
  recipeDescription: Yup.string().required("Required"),
  recipeIngredients: Yup.array().of(Yup.string().required("Required")).min(1, "Add at least one ingredient").required("Required"),
  recipeImages:  Yup.array().of(Yup.string().required("Required")).min(1, "Add at least one Image").required("Required"),
});

function FirstRecipeDetailsStep1() {
  const [fileUrls, setFileUrls] = useState<File[]>([]);
  const [ingredients, setIngredients] = useState<string[]>(initialValues.recipeIngredients);

  const handleUpload = async (file: File[]) => {
    // Replace this with your actual upload function
    //  const fileUrl = await uploadFile(file);
    setFileUrls(file);
    console.log(file);
  };

  return (
    <>
      <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={(values, { setSubmitting,setFieldValue }) => {
       
         console.log("values", values);
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
      >
        {({ isSubmitting,handleSubmit,setFieldValue}) => (
          <Form>
            <div className="flex lg:gap-x-28  flex-wrap-reverse gap-6">
              <div className="flex-auto grid gap-12">
                <h2 className="text-primary font-bold text-xl -mb-8">
                  First Recipe Details
                </h2>
                <div className="space-y-2">
                  <TextInput
                    label="Recipe Name"
                    name="recipeName"
                    placeholder="Enter Recipe Name"
                    component={Field}
                    radius="xl"
                  />
                  <ErrorMessage
                    name="recipeName"
                    render={(mess) => <p className="text-red-600">{mess}</p>}
                  />
                </div>
                <div className="space-y-2">
                  <Field
                
                    label="Recipe Description"
                    name="recipeDescription"
                    placeholder="Enter Recipe Description"
                    component={'textarea'}
                    className="w-full border rounded-lg p-4 h-32 "
                  />
                  <ErrorMessage
                    name="recipeDescription"
                    render={(mess) => <p className="text-red-600">{mess}</p>}
                  />
                </div>
                <div className="grid gap-6">
                {ingredients.map((_, key) => (
                    <div key={key}>
                      <TextInput
                        radius="xl"
                        name={`recipeIngredients.${key}`}
                        placeholder={`Ingredient ${key + 1}`}
                        component={Field}
                      />
                      <ErrorMessage
                        name={`recipeIngredients.${key}`}
                        render={(mess) => (
                          <p className="text-red-600">{mess}</p>
                        )}
                      />
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      setIngredients((prev) => [...prev, ""]);
                    }}
                    className="bg-slate-300 w-[250px] text-center py-2 rounded-full"
                  >
                    Add new
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={()=>{
                    setFieldValue("recipeImages",fileUrls)
                    handleSubmit()
                  }}
                  className="flex justify-center items-center mt-6 w-full flex-1 rounded-full bg-secondary text-white uppercase p-2 font-semibold"
                >
                  Next
                  <Icon name="arrow-right-2" color={"white"} size={24} />
                </button>
              </div>
              <div className="flex-auto space-y-4 ">
                <h2 className="text-primary font-bold text-xl ">
                  Recipe images
                </h2>

                <UploadFile handleUpload={handleUpload} fileUrls={fileUrls} />
                <ErrorMessage
                    name="recipeImages"
                    render={(mess) => <p className="text-red-600">{mess}</p>}
                  />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FirstRecipeDetailsStep1;
