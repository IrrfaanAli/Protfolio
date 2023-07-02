const Work = () => {
    return (
        <div id="myworks" className="bg-white text-center p-12 mt-12 ">
             <p className="text-3xl font-bold text-orange-400 font-DancingScript text-center">My Works</p>
            <p className=" text-xl text-black look text-center">-- Most recent works --</p>

            <div className="flex flex-col lg:flex-row justify-center p-3 gap-4 mt-12">
                <div className="border p-4">
                    <div><img className="w-96 h-48" src="./p3.png" alt="" /></div>
                    <div className="flex justify-center p-6">
                        
                        <div>
                           <small> <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-IrrfaanAli">Client Github Link</a></small>   | <small> <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-IrrfaanAli">Server Github link</a> </small> 
                     <a href="https://creaturecove-client.web.app/"> <small> | Live link</small></a> </div>
                    </div>
                </div>
                <div className="border p-4">
                    <div><img className="w-96 h-48" src="./p2.png" alt="" /></div>
                    <div className="flex justify-center p-6">
                        <div>
                           <small><a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-IrrfaanAli">Client Github Link</a></small>   | <small> <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-IrrfaanAli">server Github link </a> </small> 
                     <a href=" https://chefs-recipe-client.web.app/"> <small> | Live link</small></a> </div>
                    </div>
                </div>
                <div className="border p-4">
                    <div><img className="w-96 h-48" src="./p4.png" alt="" /></div>
                    <div className="flex justify-center p-6">
                        <div>
                           <small> <a href="https://github.com/Porgramming-Hero-web-course/b7a9-career-hub-IrrfaanAli">Github Link</a></small>    
                      <small> | <a href="https://chic-cendol-8a15b9.netlify.app/">Live link</a> </small> </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Work;