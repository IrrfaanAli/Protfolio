
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contract = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
  
        emailjs.sendForm('service_9mlwrvi', 'template_jdiu99v', form.current, 'GtT-nGk0DPVvymahP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
           
    };
    return (
        <div id='contract' className='bg-white lg:p-12'>

            <p className="text-3xl font-bold text-orange-400 font-DancingScript text-center">Get in touch</p>
            <p className="mb-7 text-xl text-black look text-center">-- Contact Me --</p>
            <div className="mx-auto  "></div>
            <form className=' p-20 lg:p-20 border rounded-xl w-90 lg:w-96 mx-5 lg:ml-[700px]' ref={form} onSubmit={sendEmail} >
                <label className='font-bold '>Name</label>
                <input type="text" placeholder="Type here" name="user_name" className="input input-bordered input-error w-full max-w-xs bg-slate-50" /> <br />
              
                <label className='font-bold  '>Email</label>
                <input type="text" placeholder="Type here" name="user_email" className="input input-bordered input-error w-full max-w-xs bg-slate-50" /> <br />
              
                <label className='font-bold '>Message</label>
               
                <textarea className="textarea p-3 w-56 lg:w-56 textarea-error bg-slate-50" name="message" placeholder="Type here"></textarea>
                <input className='font-bold w-56 lg:w-56 bg-red-400 p-2 rounded-lg text-white' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contract;