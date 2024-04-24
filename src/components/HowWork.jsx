
const HowWork = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 mb-20">
      {/* heading */}
      <div className="py-20 flex justify-center items-center flex-col">
      <h1 className="bg-gradient-to-r from-primary to-blue-700 text-transparent text-5xl text-center lg:text-left font-bold leading-snug" style={{ backgroundClip: 'text' }}>HOW DOES IT WORK?
</h1>
          <p className='text-2xl text-textColor text-center pt-3 lg:text-left pb-8'>FACELESS CHANNELS ON AUTO-PILOT.</p>
      </div>
    <div className="space-y-40">
  {/* step 1 */}
  <div className="flex justify-center items-center gap-20 flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-slate-600 rounded-lg p-5">
          <img src="./HowItWorks1.png" alt="" 
          className="border-2 border-accent rounded-lg w-full object-cover"
          />

        </div>
        <div className="w-full lg:w-1/2 space-y-5">
          <span className="rounded-2xl py-2 px-4 border-2 border-primary  font-semibold">Step 1</span>
          <h1 className="font-bold text-xl text-textColor pt-2">Pick a Topic</h1>
          <p className="text-lg font-thin">Simply choose a topic that your Faceless video series will be about. You can even customize your own. Our AI will immediately begin creating your first video.</p>
        </div>

      </div>
      {/* step 2 */}
      <div className="flex justify-center items-center gap-20 flex-col-reverse lg:flex-row">
        
        <div className="w-full lg:w-1/2 space-y-5">
          <span className="rounded-2xl py-2 px-4 border-2 border-primary  font-semibold">Step 2</span>
          <h1 className="font-bold text-xl text-textColor pt-2">Preview Video</h1>
          <p className="text-lg font-thin">Posting to your channel is completely automated. Of course, you can preview and edit the contents of your video at anytime before they are scheduled to post. Each video is unique to you.</p>
        </div>
        <div className="w-full lg:w-1/2 bg-slate-600 rounded-lg p-5">
          <img src="./HowItWorks2.png" alt="" 
          className="border-2 border-accent rounded-lg w-full object-cover"
          />

        </div>
      </div>
      {/* step 3 */}
      <div className="flex justify-center items-center gap-20 flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-slate-600 rounded-lg p-5">
          <img src="./HowItWorks3v2.png" alt="" 
          className="border-2 border-accent rounded-lg w-full object-cover"
          />

        </div>
        <div className="w-full lg:w-1/2 space-y-5">
          <span className="rounded-2xl py-2 px-4 border-2 border-primary  font-semibold">Step 3</span>
          <h1 className="font-bold text-xl text-textColor pt-2">Manage Your Series</h1>
          <p className="text-lg font-thin">Easily manage, delete, and preview all of your Faceless Video series in one place.</p>
        </div>

      </div>
    </div>
    </div>
  )
}

export default HowWork