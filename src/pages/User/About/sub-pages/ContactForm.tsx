import contactImage from "../../../../assets/contactImage.jpg";

const ContactForm = () => {
  return (
    <div className="py-22">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 p-6">
        <h2 className="font-bold text-4xl text-center">
          <span className="text-primary">CONTACT</span> US
        </h2>
        <div className="flex items-center">
          <div className="hidden md:flex-1/2 md:flex justify-center items-center">
            <img src={contactImage} alt="Contact Image" className="w-120" />
          </div>
          <div className="flex-1/2 flex flex-col gap-8">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email:</label>
                <input
                  type="text"
                  placeholder="Enter email"
                  className="border broder-zinc-50 rounded px-2 py-4 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Subject:</label>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="border broder-zinc-50 rounded px-2 py-4 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Message:</label>
                <textarea
                  rows={4}
                  placeholder="Enter message"
                  className="border broder-zinc-50 outline-none rounded resize-y px-2 py-4"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="submit"
                  value="SUBMIT"
                  className="bg-primary text-white font-semibold rounded px-2 py-4 cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
