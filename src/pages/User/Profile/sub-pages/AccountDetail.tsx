import { useAuth } from "../../../../context/AuthContext";

const AccountDetail = () => {
  const { userDTO } = useAuth();
  return (
    <div className="flex flex-col gap-2 p-8">
      <h1 className="text-3xl font-semibold text-zinc-50">
        <span className="text-primary">Account</span> Details
      </h1>
      <form>
        {/* Basic Detail */}
        <h2 className="text-xl text-zinc-300 my-5">Basic Details</h2>
        <div className="flex gap-6">
          <div className="flex-1/2 flex flex-col gap-2">
            <label>Username</label>
            <input
              type="text"
              value={userDTO?.username}
              readOnly
              className="border border-zinc-300 rounded px-4 py-3 outline-none cursor-default"
            />
          </div>
          <div className="flex-1/2 flex flex-col gap-2">
            <label>Email</label>
            <input
              type="text"
              value={userDTO?.email}
              readOnly
              className="border border-zinc-300 rounded px-4 py-3 outline-none cursor-default"
            />
          </div>
        </div>
        {/* Contact Detail */}
        <h2 className="text-xl text-zinc-300 my-5">Contact Details</h2>
        <div className="flex flex-col gap-3">
          <div className="flex gap-6">
            <div className="flex-1/2 flex flex-col gap-2">
              <label>City</label>
              <input
                type="text"
                value="Kathmandu"
                readOnly
                className="border border-zinc-300 rounded px-4 py-3 outline-none cursor-default"
              />
            </div>
            <div className="flex-1/2 flex flex-col gap-2">
              <label>Province</label>
              <input
                type="text"
                value="Bagamti"
                readOnly
                className="border border-zinc-300 rounded px-4 py-3 outline-none cursor-default"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-1/2 flex flex-col gap-2">
              <label>Contact Number</label>
              <input
                type="text"
                value="+977 9866445340"
                readOnly
                className="border border-zinc-300 rounded px-4 py-3 outline-none cursor-default"
              />
            </div>
            <div className="flex-1/2 flex flex-col gap-2">
              <label>Landline Number</label>
              <input
                type="text"
                value="01 - 4335102"
                readOnly
                className="border border-zinc-300 rounded px-4 py-3 outline-none cursor-default"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountDetail;
