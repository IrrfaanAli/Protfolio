

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-white flex flex-col lg:flex-row">
                <div className="flex-1 ">
                    <a className="btn btn-ghost  font-bold  look text-xl lg:text-3xl ">Irfan ALi</a>
                </div>
                <div className="flex-none gap-0">
                    <ul className="menu menu-horizontal  lg:px-1">
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#aboutme">About Me</a></li>
                        <li><a href="#qualifications">Qualifications</a></li>
                        <li><a href="#myworks">My Works</a></li>
                        <li><a href="#contract">Contract</a></li>
                       
                      
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;