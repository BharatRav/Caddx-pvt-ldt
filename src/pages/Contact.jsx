import { WhatsApp } from "@mui/icons-material";
import ContactForm from "../components/contactus/ContactForm";
import CompanyAddress from "../components/CompanyAddress";

const Contact = () => {
  const timings = [
    {
      day: "Mon",
      isClosed: false,
    },
    {
      day: "Tues",
      isClosed: false,
    },
    {
      day: "Wed",
      isClosed: false,
    },
    {
      day: "Thru",
      isClosed: false,
    },
    {
      day: "Fri",
      isClosed: false,
    },
    {
      day: "Sat",
      isClosed: false,
    },
    {
      day: "Sun",
      isClosed: false,
    },
  ];
  return (
    <div className="bg-white p-8 border-t-2">
      <div className="text-gray-600 text-4xl font-semibold text-center m-4">
        CONTACT US
      </div>
      <div className=" flex flex-col gap-3 m-5">
        <h4 className="font-medium text-black text-center">
          Better yet, see us in person!
        </h4>
        <p className=" text-gray-400 text-center">
          We love our customers, so feel free to visit during normal business
          hours.
        </p>
        <button className="bg-gray-600 px-6 py-2 self-center rounded-lg cursor-pointer hover:bg-gray-900 duration-200 shadow-md">
          <WhatsApp />
          <span>Message us on whatsapp</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-0">
        <CompanyAddress />
        <div className="rounded-lg max-w-2xl px-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
