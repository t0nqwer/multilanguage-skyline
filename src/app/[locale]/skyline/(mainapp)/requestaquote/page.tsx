import ContactForm from "@/app/[locale]/_components/ContactForm";
import React from "react";

const page = () => {
  return (
    <div className=" flex justify-center p-20">
      <h1 className="text-4xl font-bold">Request a Quote</h1>
      <ContactForm />
    </div>
  );
};

export default page;
