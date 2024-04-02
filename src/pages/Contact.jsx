import { WhatsApp } from "@mui/icons-material";

const Contact = () => {
  const timings = [
    {
      day:"Mon",
      isClosed:false
    },
    {
      day:"Tues",
      isClosed:false
    },
    {
      day:"Wed",
      isClosed:false
    },
    {
      day:"Thru",
      isClosed:false
    },
    {
      day:"Fri",
      isClosed:false
    },
    {
      day:"Sat",
      isClosed:false
    },
    {
      day:"Sun",
      isClosed:false
    },
  ]
  return <div className="bg-white p-8 border-t-2">
    <div className="text-gray-600 text-4xl font-semibold text-center m-4">CONTACT US</div>
    <div className=" flex flex-col gap-3">
     <h4 className="font-medium text-black text-center">Better yet, see us in person!</h4>
     <p className=" text-gray-400 text-center">We love our customers, so feel free to visit during normal business hours.</p>
     <button className="bg-gray-600 px-6 py-2 self-center rounded-lg cursor-pointer hover:bg-gray-900 duration-200 shadow-md"><WhatsApp/><span>Message us on whatsapp</span></button>
    </div>
    <div className="flex md:flex-row flex-col p-4">
      <div className=" md:w-1/2"><p className=" text-black text-center font-semibold text-3xl">cadxitservices</p></div>
      <div className="flex flex-col gap-1">
        <p className="self-center text-center font-semibold text-black">Hours</p>
        {timings.map((item,idx)=>{
        return <div className="text-black text-center" key={idx}>{`${item.day} ${item.isClosed?"Closed":"09.00am - 05.00pm"}`}</div>
      })}</div>
    </div>
  </div>;
};

export default Contact;
