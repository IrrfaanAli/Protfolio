
import Lottie from "lottie-react";
import arrow from "/public/arrow.json"
const Aboutme = () => {
  return (
    <div id="aboutme" className="bg-white text-center p-12">
      <p className="text-2xl font-bold text-orange-400">About Me</p>
      <p className="mb-7 text-xl look text-black">--  My Information  --</p>
      <div className="flex flex-col lg:flex-row  gap-7 justify-center">
        <div>
          <img className=" w-72 ml-2 lg:ml-12 lg:w-96" src="/picture4.jpg" alt="" />
        </div>
        <div className="p-3">
          <div className="flex flex-col lg:flex-row  gap-4 mb-8">
            <div className=" p-2 ml-12 lg:ml-1 w-48 outline outline-offset-1 outline-cyan-100 rounded-lg">
              <p className="look text-xl">Email</p>

              <div className="flex items-center ml-12">
                <div> <small><a href="mailto:alimohammadirfan7@gmail.com">Write me  </a></small></div>
                <div><Lottie className="w-8" animationData={arrow} /></div>
              </div>

            </div>
            <div className=" p-2 w-48 ml-12 lg:ml-1 outline outline-offset-1 outline-cyan-100 rounded-lg  ">
              <p className="look text-xl">WhatsApp</p>

              <div className="flex items-center ml-12">
                <div> <small><a href="https://wa.me/01779896964">Write me  </a></small></div>
                <div><Lottie className="w-8" animationData={arrow} /></div>
              </div>


            </div>
            <div className=" p-2 w-48 ml-12 lg:ml-1 outline outline-offset-1 outline-cyan-100 rounded-lg">
              <p className="look text-xl">Telegram</p>

              <div className="flex items-center ml-12">
                <div> <small><a href="https://t.me/irfaanaali">Write me  </a></small></div>
                <div><Lottie className="w-8" animationData={arrow} /></div>
              </div>


            </div>
          </div>
          <div className=" lg:w-[600px] mt-12">Aside from technical skills, I bring to any team a strong work ethic, attention to detail, and a
            collaborative approach. I improve in places that promote creativity, innovation, and lifelong
            learning.</div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;