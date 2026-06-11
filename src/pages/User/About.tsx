import { FaPaintRoller } from "react-icons/fa";
import { FaShieldHeart, FaTruckFast } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";

import contactImage from "../../assets/contactImage.jpg";

const About = () => {
  const values = [
    {
      id: 1,
      icon: <FaTruckFast size={38} />,
      title: "Fast Delivery",
      description:
        "Get your hardware and paint supplies delivered quickly and reliably.",
    },
    {
      id: 2,
      icon: <FaShieldHeart size={38} />,
      title: "Quality Products",
      description:
        "We stock trusted brands and durable materials built to last.",
    },
    {
      id: 3,
      icon: <FaPaintRoller size={38} />,
      title: "Wide Color Selection",
      description:
        "Explore a variety of shades and finishes for every project.",
    },
    {
      id: 4,
      icon: <MdSupportAgent size={38} />,
      title: "Expert Support",
      description:
        "Receive guidance from experienced professionals whenever you need it.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-16 my-32">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-primary">ABOUT</span> US
        </h1>
        <div className="max-w-4xl">
          <p className="text-justify">
            MN Hardwares is committed to providing high-quality hardware
            products, paints, and construction supplies to homeowners,
            contractors, and businesses. With a focus on reliability,
            affordability, and customer satisfaction, we offer a carefully
            selected range of products from trusted brands to help bring every
            project to life. Whether you're building, renovating, or simply
            improving your space, our team is dedicated to helping you find the
            right solutions and expert guidance every step of the way.
          </p>
        </div>
      </div>

      {/* Why Us? */}
      <div className="flex flex-col gap-16 items-center my-32">
        <h1 className="text-4xl font-bold">
          <span className="text-primary">WHY</span> US ?
        </h1>
        <div className="flex justify-between">
          {values.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-4">
              <div className="border border-primary text-primary p-5 rounded-full">
                {item.icon}
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <h2 className="font-semibold text-lg text-primary">
                  {item.title}
                </h2>
                <p className="text-zinc-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us */}
      <div className="flex flex-col gap-16 my-32">
        <h2 className="font-bold text-4xl text-center">
          <span className="text-primary">CONTACT</span> US
        </h2>
        <div className="flex items-center">
          <div className="flex-1/2 flex justify-center items-center">
            <img src={contactImage} alt="Contact Image" className="w-120" />
          </div>
          <div className="flex-1/2 flex flex-col gap-8">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter email"
                  className="border rounded px-2 py-4 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="border rounded px-2 py-4 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Message</label>
                <textarea
                  rows={4}
                  placeholder="Enter message"
                  className="border outline-none rounded resize-y px-2 py-4"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="submit"
                  value="SUBMIT"
                  className="bg-primary text-white font-semibold rounded px-2 py-4"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
