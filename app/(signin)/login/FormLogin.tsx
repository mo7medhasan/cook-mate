"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { PasswordInput, TextInput } from "@mantine/core";
import Icon from "@/components/ui-assets/Icon";
import Link from "next/link";

// Define the shape of the form values
interface FormValues {
  email: string;
  Password: string;
}

// Define the initial form values
const initialValues: FormValues = {
  email: "",
  Password: "",
};

// Define the validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  Password: Yup.string().required("Required"),
});

function FormLogin() {
  return (
    <div className="max-w-md">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, handleSubmit }) => (
          <Form className="flex-auto grid gap-6">
            <div className="space-y-1">
              <TextInput
                label="Email Address"
                name="email"
                placeholder="Enter Email Address"
                component={Field}
                radius="xl"
              />
              <ErrorMessage
                name="email"
                render={(mess) => <p className="text-red-600">{mess}</p>}
              />
            </div>

            <div className="space-y-1">
              <PasswordInput
                label="Password"
                name="password"
                placeholder="Enter Password"
                component={Field}
                radius="xl"
              />
              <ErrorMessage
                name="password"
                render={(mess) => <p className="text-red-600">{mess}</p>}
              />
            </div>
            <Link href={'/forgot-password'} className="text-[#000] hover:underline">
            Forgot your password?
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              onClick={() => {
                handleSubmit();
              }}
              className="flex justify-center items-center my-2  w-full flex-1 rounded-full bg-secondary text-white uppercase p-3.5 font-semibold"
            >
              Sign in now
              <Icon name="arrow-right-2" color={"white"} size={24} />
            </button>
            <Link href={'/register'} className="text-[#000] hover:underline font-bold ">
            New to CookMate?            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormLogin;
