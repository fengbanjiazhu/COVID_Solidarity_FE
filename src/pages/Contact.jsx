import React from "react";
import ContactInfo from "../components/Contact/ContactInfo";

function Contact() {
  return (
    <div className="w-full p-2">
      <h1 className="text-4xl mb-8">Contact</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-blue-50">Form</div>
        <div className="col-span-1">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

export default Contact;
