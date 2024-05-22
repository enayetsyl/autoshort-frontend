import { useState } from "react";
import GradientHeading from "../components/GradientHeading";
import FAQ from "../components/FAQ";

const AffiliateCreate = () => {
  const [isLinkAvailable, setIsLinkAvailable] = useState(true);
  const handleCreateAffiliate = () => {
    console.log("hello");
  };

  return (
    <div>
      {isLinkAvailable ? (
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
              value="https://www.autoshorts.ai.com?ref=yourname"
              readOnly
            />

            <h1 className="font-bold pb-3 mt-10">PAYPAL ACCOUNT EMAIL</h1>

            <div className="flex gap-3 ">
              <input
                type="text"
                name="affiliate"
                id=""
                className="flex-1 rounded-lg border border-solid border-orange-400  p-2.5 focus:border-none"
                placeholder="PAYPAL ACCOUNT EMAIL"
              />
              <button
                className="bg-black text-white py-3 px-10 text-lg rounded-lg font-semibold "
                onClick={handleCreateAffiliate}
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
          <h1 className="font-bold text-2xl pb-3">FREQUENTLY ASKED QUESTIONS</h1>
         <div className="space-y-5">
          <FAQ
          question='How does this work?'          
          answer="The way it works is simple! We give you a unique affiliate URL to share. If someone registers an account and purchases a membership within 30 days after clicking the link, we'll give you a cut of the sale!"
          />
          <FAQ question="What commissions do I get?"
          answer="Our affiliate program offers a 30% recurring commission. Our recurring model means great passive income for you."
          />
          <FAQ question="When are payouts sent out?"
          answer="Payouts will be sent on the 1st of every month through PayPal."
          />
          <FAQ question="Is there a minimum payout requirement?"
          answer="Yes. You need to have a minimum 'unpaid commissions' of $30 before receiving your payout in order to keep transaction fees low."
          />
          <FAQ question="How does affiliate tracking work?"
          answer="The way the AutoShorts.ai affiliate tracking works is if someone clicks on your link, a 30 day cookie is attached in their browser. This tracks them so when they register an account they are locked-in to be attributed to you forever."
          />
          <FAQ question="Can I run ads to promote AutoShorts.ai?"
          answer="In general, you can. However, we DO NOT allow promotion through Google Search ads. You can run ads on other platforms such as Facebook, Instagram, TikTok, Reddit, YouTube, etc."
          />
         </div>
          </div>
        </div>
      ) : (
        <div className="px-5 md:px-16 mt-16">
          <div className="bg-white/60 max-w-2xl mx-auto px-8 py-10 md:px-16 shadow-xl rounded-lg border">
            <div className="flex justify-center items-center pb-10">
              <GradientHeading text={"Create Affiliate Link"} />
            </div>
            <p className="text-center pb-10">
              Create a referral url and share it with others.
            </p>
            <div className="flex flex-col justify-start items-start w-full gap-4">
              <label htmlFor="affiliate">Create your referral URL</label>
              <input
                type="text"
                name="affiliate"
                id=""
                className="rounded-lg border border-solid border-orange-400 w-full p-2.5 focus:border-none"
                placeholder="https://www.autoshorts.ai.com?ref=yourname"
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
