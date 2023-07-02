
const Skill = () => {
    return (
        <div id="skills" className=" bg-white text-center">
            <p className="lg:text-3xl  font-bold text-orange-400 font-DancingScript   ">SKILLS</p>
                <p className="lg:mb-7 lg:text-xl text-black look">-- An Overview of my Technical Skills --</p>
            <div className="mx-auto  ">
                <p className=" mb-1 mt-2 lg:mb-3 font-bold">Frontend Development</p>
            <ul className="steps">
               <li  data-content="★" className="step step-accent text-sm  lg:text-xl   font-bold w-12 lg:w-48">HTML</li>
                <li data-content="★" className="step step-secondary text-sm  lg:text-xl  font-bold">CSS</li>
                <li data-content="★" className="step step-warning text-sm lg:text-xl  font-bold">TailwindCSS</li>
                <li data-content="★" className="step step-error text-sm  lg:text-xl  font-bold">React</li>
                <li data-content="★" className="step step-primary text-sm  lg:text-xl  font-bold">JavaScript</li>
                <li data-content="★" className="step step-info text-sm  lg:text-xl  font-bold">Axios</li>
            </ul>
        </div>
            <div className="mx-auto mt-16 ">
                <p className="mb-3 font-bold">Backend Development</p>
            <ul className="steps ">
               <li data-content="★" className="step step-info text-sm lg:text-xl  font-bold w-18 lg:w-48">NodeJS</li>
                <li data-content="★" className="step step-error text-sm lg:text-xl  font-bold">ExpressJS</li>
                <li data-content="★" className="step step-warning text-sm lg:text-xl  font-bold">MongoDB</li>
                <li data-content="★" className="step step-accent text-sm lg:text-xl  font-bold">MySQL</li>
                
                
            </ul>
        </div>
        </div>
    );
};

export default Skill;