import { useContext, useState } from "react";
import GradientHeading from "../components/GradientHeading";
import FAQ from "../components/FAQ";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const AffiliateCreate = () => {
  const [paypalEmail, setPaypalEmail] = useState("");
  const { userPlan, setUserPlan } = useContext(AuthContext);
  const [baseUrl] = useState("https://www.autoshorts.ai.com?ref=");
  const [referralCode, setReferralCode] = useState("");

  console.log("ref code ", referralCode);
  console.log("user in affiliate", userPlan);

  const handleCreateAffiliate = () => {
    if (!userPlan || !userPlan._id) {
      alert("User plan data is missing");
      console.error("User plan data is missing");
      return;
    }

    if (referralCode.trim() === "") {
      alert("Referral code is empty");
      console.error("Referral code is empty");
      return;
    }

    const requestData = {
      userId: userPlan._id,
      referralCode: `${baseUrl}${referralCode}`,
    };
    axios
      .post(`${import.meta.env.VITE_BACKEND}/affiliate-create`, requestData)
      .then((response) => {
        if (response.data.message === `Referral link added successfully`)
          setUserPlan(null);
        alert(`${response.data.message}`);
        // Handle success, if needed
      })
      .catch((error) => {
        console.error("Error creating affiliate link:", error);
        alert(`${error.response.data.message}`);
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const baseUrlLength = baseUrl.length;

    // Ensure the input value starts with the base URL
    if (value.startsWith(baseUrl)) {
      setReferralCode(value.slice(baseUrlLength));
    } else {
      setReferralCode(value);
    }
  };

  const handleUpdateEmail = async () => {
    if (
      window.confirm(
        "Are you sure you want to update your PayPal account email?"
      )
    ) {
      try {
        const requestData = {
          userId: userPlan._id,
          email: paypalEmail,
        };
        console.log(requestData);
        const response = await axios.put(
          `${import.meta.env.VITE_BACKEND}/update-payment-email`,
          requestData
        );

        if (response.status === 200) {
          alert("Email updated successfully");
        } else {
          alert("Failed to update email");
        }
      } catch (error) {
        console.error("Error updating email:", error);
        alert("Error updating email");
      }
    }
  };

  return (
    <div>
      {userPlan?.referralLink ? (
        <div>
          <h1 className="text-center font-bold text-3xl pt-20">
            Welcome to our Affiliate Dashboard
          </h1>
          <div className="bg-white/60 max-w-2xl mx-auto px-8 py-10 md:px-16 shadow-xl rounded-lg border mt-10">
            <h1 className="font-bold pb-3">YOUR UNIQUE AFFILIATE LINK</h1>
            <input
              type="text"
              name="affiliate"
              id=""
              className="rounded-lg border border-solid border-orange-400 w-full p-2.5 focus:border-none"
              value={userPlan?.referralLink}
              readOnly
            />

            <h1 className="font-bold pb-3 mt-10">PAYPAL ACCOUNT EMAIL</h1>

            <div className="flex gap-3 ">
              <input
                type="email"
                name="affiliate"
                id=""
                className="flex-1 rounded-lg border border-solid border-orange-400 p-2.5 focus:border-none"
                placeholder="PAYPAL ACCOUNT EMAIL"
                value={paypalEmail}
                onChange={(e) => setPaypalEmail(e.target.value)}
              />
              <button
                className="bg-black text-white py-3 px-10 text-lg rounded-lg font-semibold "
                onClick={handleUpdateEmail}
              >
                UPDATE
              </button>
            </div>
            <p className="pt-2">You will get your commission here.</p>

            <h1 className="font-bold pb-10 mt-10">YOUR METRICS</h1>

            <div className="flex gap-5 justify-center">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl text-center">0</h1>
                <h1 className="text-lg">LINK CLICKS</h1>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl text-center">0</h1>
                <h1 className="text-lg">SIGN UPS</h1>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl text-center">0</h1>
                <h1 className="text-lg">CONVERSION</h1>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl text-center">0</h1>
                <h1 className="text-lg">PENDING COMMISSION</h1>
              </div>
            </div>
          </div>
          {/* FAQ */}
          <div className="bg-white/60 max-w-2xl mx-auto px-8 py-10 md:px-16 shadow-xl rounded-lg border my-10">
            <h1 className="font-bold text-2xl pb-3">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <div className="space-y-5">
              <FAQ
                question="How does this work?"
                answer="The way it works is simple! We give you a unique affiliate URL to share. If someone registers an account and purchases a membership within 30 days after clicking the link, we'll give you a cut of the sale!"
              />
              <FAQ
                question="What commissions do I get?"
                answer="Our affiliate program offers a 30% recurring commission. Our recurring model means great passive income for you."
              />
              <FAQ
                question="When are payouts sent out?"
                answer="Payouts will be sent on the 1st of every month through PayPal."
              />
              <FAQ
                question="Is there a minimum payout requirement?"
                answer="Yes. You need to have a minimum 'unpaid commissions' of $30 before receiving your payout in order to keep transaction fees low."
              />
              <FAQ
                question="How does affiliate tracking work?"
                answer="The way the AutoShorts.ai affiliate tracking works is if someone clicks on your link, a 30 day cookie is attached in their browser. This tracks them so when they register an account they are locked-in to be attributed to you forever."
              />
              <FAQ
                question="Can I run ads to promote AutoShorts.ai?"
                answer="In general, you can. However, we DO NOT allow promotion through Google Search ads. You can run ads on other platforms such as Facebook, Instagram, TikTok, Reddit, YouTube, etc."
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="px-5 md:px-16 mt-16">
          <div className="bg-white/60 max-w-2xl mx-auto px-8 py-10 md:px-16 shadow-xl rounded-lg border">
            <div className="flex justify-center items-center pb-10">
              <h2 className="text-2xl font-bold text-center pb-5">
                Create Affiliate Link
              </h2>
            </div>
            <p className="text-center pb-10">
              Create a referral URL and share it with others.
            </p>
            <div className="flex flex-col justify-start items-start w-full gap-4">
              <label htmlFor="affiliate">Create your referral URL</label>
              <input
                type="text"
                name="affiliate"
                value={`${baseUrl}${referralCode}`}
                onChange={handleChange}
                className="rounded-lg border border-solid border-orange-400 w-full p-2.5 focus:border-none"
                placeholder="Enter your referral code"
              />
            </div>

            <div className="flex justify-center items-center">
              <button
                className="bg-black text-white py-3 px-20 text-lg rounded-lg font-semibold my-5"
                onClick={handleCreateAffiliate}
              >
                CREATE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AffiliateCreate;
