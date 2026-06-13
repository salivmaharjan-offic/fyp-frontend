import { FaPaintRoller } from "react-icons/fa";
import { FaShieldHeart, FaTruckFast } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";

const Values = () => {
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
    <div className="bg-zinc-900  py-22">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
        <h1 className="text-4xl text-zinc-50 font-bold">
          <span className="text-primary">WHY</span> US ?
        </h1>
        <div className="flex flex-col gap-12 md:flex-row justify-between">
          {values.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-4">
              <div className="border border-zinc-50 text-zinc-50 p-5 rounded-full">
                {item.icon}
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <h2 className="font-semibold text-lg text-zinc-50">
                  {item.title}
                </h2>
                <p className="text-zinc-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
