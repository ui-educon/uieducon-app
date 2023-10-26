import React ,{ useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
  

export default function SendMsg() {
    const form = useRef();
    const [state, setState] = useState({
        user_name: "",
        user_email:"",
        course: "",
        message:""
      })
    function handleChange(evt) {
        
        setState({
          ...state,
          [evt.target.name]: evt.target.value
        });        
    } 
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(process.env.REACT_APP_SECRET_CODE,process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setState({
            user_name: "",
            user_email:"",
            course: "",
            message:""
            });  
         
    };
    return (
        <form ref={form} onSubmit={sendEmail} autoComplete="off">
            <div className="form-group mb-6">
                <input type="text" className="form-control block w-full px-3 py-1.5         text-base font-normal  text-gray-700
                                              bg-white bg-clip-padding
                                              border border-solid border-gray-300
                                              rounded
                                              transition
                                              ease-in-out
                                              m-0
                                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                             " id="user_name" name="user_name" placeholder="Name"
                                             value={state.user_name}
                                             onChange={handleChange}   
                                             required/>
            </div>
            <div className="form-group mb-6">
                <input type="email" className="form-control block
                                              w-full
                                              px-3
                                              py-1.5
                                              text-base
                                              font-normal
                                              text-gray-700
                                              bg-white bg-clip-padding
                                              border border-solid border-gray-300
                                              rounded
                                              transition
                                              ease-in-out
                                              m-0
                                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="user_email" name="user_email" placeholder="Email address"
                                              value={state.user_email}
                                              onChange={handleChange}
                                              required/>
            </div>
            <div className="form-group mb-6">
                <input type="text" className="form-control block
                                              w-full
                                              px-3
                                              py-1.5
                                              text-base
                                              font-normal
                                              text-gray-700
                                              bg-white bg-clip-padding
                                              border border-solid border-gray-300
                                              rounded
                                              transition
                                              ease-in-out
                                              m-0
                                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="course" name="course" placeholder="Course"
                                              value={state.course}
                                              onChange={handleChange}  
                                              required/>
            </div>
            <div className="form-group mb-6">
                <textarea className="
                                              form-control
                                              block
                                              w-full
                                              px-3
                                              py-1.5
                                              text-base
                                              font-normal
                                              text-gray-700
                                              bg-white bg-clip-padding
                                              border border-solid border-gray-300
                                              rounded
                                              transition
                                              ease-in-out
                                              m-0
                                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                            " id="message" name='message'
                    rows={3}
                    placeholder="Message"
                    defaultValue={""}
                    value={state.message}
                    onChange={handleChange}    
                    required/>
            </div>
           
            <button type="submit" className="
                                    w-full
                                    px-6
                                    py-2.5
                                    bg-blue-600
                                    text-white
                                    font-medium
                                    text-xs
                                    leading-tight
                                    uppercase
                                    rounded
                                    shadow-md
                                    hover:bg-blue-700 hover:shadow-lg
                                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                    active:bg-blue-800 active:shadow-lg
                                    transition
                                    duration-150
                                    ease-in-out" value="Send">Send</button>
        </form>
    )
}
