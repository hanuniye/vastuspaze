import { CONTACT_INFO } from "@/constants";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 lg:py-20 border-b-2">
      <h6 className="font-medium uppercase text-lg mb-10 text-center md:text-3xl md:mb-20">
        Contact
      </h6>
      <p className="text-center text-lg mx-2 mb-10">{CONTACT_INFO.text}</p>
      <div className="flex flex-col space-y-4 mx-10 md:mx-4 md:flex-row md:justify-between md:items-start md:space-y-0">
        {CONTACT_INFO.contact.map((contact, index) => {
          return (
            <div key={index} className="flex items-start">
              {contact.label === "Email" ? (
                <Mail className="text-sm" />
              ) : contact.label === "Phone" ? (
                <Phone className="text-sm" />
              ) : (
                <MapPin className="text-sm" />
              )}
              <div className="flex flex-col ml-4 ">
                <h6 className="text-sm font-bold">{contact.label}</h6>
                <p className="text-sm text-neutral-500">{contact.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
