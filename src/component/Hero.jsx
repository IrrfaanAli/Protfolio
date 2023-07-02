
import Typewriter from "typewriter-effect";
import fiveStar from "../../public/scroll-down-animation.json"
import down from "../../public/download1.json"
import Lottie from "lottie-react";
const Hero = () => {
    return (
        <div className="bg-white lg:h-[600px]">
            <div className=" grid grid-cols-1 lg:grid-cols-5 gap-4  lg:mx-72  ">

                <div className=" p-8 lg:p-16 flex flex-row gap-3 lg:flex-col">
                    <small className="font-bold">Connect with me</small>
                    <div className=" w-8 lg:w-12 lg:mt-12"><a href="https://github.com/IrrfaanAli"><img src="/github.png" alt="" /></a></div>
                    <div className=" w-8 lg:w-12 lg:mt-12"><a href="https://www.linkedin.com/in/irrfan-ali/"><img src="/linkedin.png" alt="" /></a></div>
                    <div className=" w-8 lg:w-12 lg:mt-12"><a href="https://www.facebook.com/profile.php?id=100008790459061"><img src="/facebook.png" alt="" /></a></div>
                </div>
                <div className="col-span-2 p-6 lg:p-12">
                    <span className="text-4xl font-bold ">Irfan Ali</span> <br></br>
                    <div>
                        <Typewriter options={{
                            autoStart: true,
                            loop: true,
                        }}

                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Software Developer")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Problem Solver")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Technology Enthusiast")
                                    .start();
                            }}
                        />
                    </div>
                    <p className="lg:mt-10 lg:w-[500px]">Currently, I am studying for Bachelor’s degree in Computer Science at United International Uni-
                        versity. During my academic career, I am developing a foundation in programming languages like C, C++, and JavaScript. I’ve also learned some about algorithms, and data structures.</p>
                    <div>

                        <div className="flex gap-0 outline outline-offset-4 outline-1 mt-4 lg:mt-12  mb-4 lg:mb-12 w-[200px] lg:w-[220px] items-center rounded-lg">
                            <div><a href="./Resume of Irfan Ali.pdf" className="text-black font-bold ml-4" download> Download Resume  </a> </div>
                            <div><Lottie className=" w-8 lg:w-12" animationData={down} /></div>

                        </div>
                        <div >
                            <Lottie className=" w-10 lg:w-16 " animationData={fiveStar} />
                        </div>
                    </div>

                </div>
                <div className="col-span-2 p-3 lg:p-12 ">
                    <img className=" ml-10 lg:ml-20 w-72 lg:mask lg:mask-squircle" src="./picture.jpeg" alt="" />
                </div>



            </div>

        </div>
    );
};

export default Hero;