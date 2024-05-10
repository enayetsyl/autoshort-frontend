import React from "react";
import GradientHeading from "../components/GradientHeading";

const Account = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/*update email  */}
      <div>
        <div className="pt-20 px-5 pb-5">
          <GradientHeading text="UPDATE EMAIL" />
        </div>

        <div className="px-5 ">
          <div className="bg-slate-600 max-w-2xl  px-8 py-10 shadow-xl rounded-lg flex justify-center items-center gap-2">
            <input
              type="email"
              placeholder="enayetflweb@gmail.com"
              className="p-2 border w-full rounded-lg"
            />
            <button className="bg-blue-500 py-2.5 px-5 rounded-lg">SAVE</button>
          </div>
          <p className="pt-4 text-black/70 font-semibold">
            {" "}
            Note: This will be your login email. Make sure to remember it!
          </p>
        </div>
      </div>
      {/* change password */}
      <div className="mb-20">
        <div className="pt-5 px-5 pb-5">
          <GradientHeading text="CHANGE PASSWORD" />
        </div>
        <div className="px-5 ">
            <div className="bg-slate-600 max-w-2xl px-8 pt-10 pb-5 shadow-xl rounded-lg space-y-4 ">
              <input
                type="password"
                placeholder="New Password"
                className="p-2 border w-full rounded-lg"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="p-2 border w-full rounded-lg"
              />
              <div className="flex justify-end">
              <button className="bg-blue-500 py-2.5 px-5 rounded-lg">SAVE</button>
              </div>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default Account;
