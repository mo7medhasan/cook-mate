import Image from "next/image";
import React from "react";
import FormLogin from "./FormLogin";

function Login() {
  return (
    <div className="flex items-center gap-8 mb-[2%]">
      <div className="flex-1 flex flex-col gap-10 ">
        <div>
          <h1 className="font-Natasha text-5xl font-bold leading-[1.5]">
            Welcome to CookMate!
          </h1>
          <p className="text-2xl leading-[1.5]">Sign in to your account</p>
          
        </div>
        <FormLogin/>
      </div>
      <div className=" flex-1 relative h-full w-full aspect-square hidden lg:grid ">
        <Image src={'/Images/Chars.svg'} alt="Chars" sizes="50vw" fill className="object-cover object-right  aspect-square "/>
      </div>
    </div>
  );
}

export default Login;
