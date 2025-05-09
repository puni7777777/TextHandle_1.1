import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
    const [sent, setSent] = useState('Send')
    const [disabling, setDisabling] = useState(true)
    const [user, setUser] = useState('');
    const [mail, setMail] = useState('');
    const [userMsg, setUserMsg] = useState('');

    const userChange = event => { setUser(event.target.value); };  //if one event handler then all the inputs follow the same message
    const mailChange = event => { setMail(event.target.value); };
    const msgChange = event => { setUserMsg(event.target.value); };

    const sendEmail = (e) => {
        e.preventDefault();

        let name1 = document.getElementById('from_name');
        let mail1 = document.getElementById('reply_to');
        let msg1 = document.getElementById('message');
        if (name1.value === '') {
            alert('please fill the Name section')
        } if (mail1.value === '') {
            alert('please fill the Name section')
        } if (msg1.value === '') {
            alert('please fill the Name section')
        }
        else {
            emailjs.sendForm('service_027qzjq', 'template_xw74ook', 'form', 'IQrBik6qWPSKopwkF')
                .then((result) => {
                    setSent('Sent');
                    setDisabling((prevEnabled) => !prevEnabled);
                    setUser('');
                    setMail('');
                    setUserMsg('');
                }, (error) => {
                    setSent(error.text);
                });
        }
    };

    return (
        <div className='vh-100 flex-row justify-center text-white'>
            <div className='flex justify-center p-4 text-lg text-[#9F51F6]'>
                <h1>Contact Me</h1>
            </div>

            {/* <form action="?" method="POST">
                <div className="g-recaptcha" data-sitekey="your_site_key"></div>
                <br />
                <input type="submit" value="Submit" />
            </form> */}

            <div className='flex justify-center'>
                <form id="form" className='flex-col'>
                    <div className='flex gap-5'>
                        <div className="flex justify-start gap-7 py-4">
                            <label htmlFor="from_name">Name*</label>
                            <input type="text" name="from_name" id="from_name" className='form-control border-none bg-[#e3c9ff] p-2 rounded-lg outline-none caret-[#9F51F6] text-[#9F51F6]' onChange={userChange}
                                value={user} required />
                        </div>
                        <div className="flex justify-start gap-6 py-4">
                            <label htmlFor="reply_to">E-mail*</label>
                            <input type="text" name="reply_to" id="reply_to" className='form-control border-none bg-[#e3c9ff] p-2 rounded-lg outline-none caret-[#9F51F6] text-[#9F51F6]' onChange={mailChange}
                                value={mail} required />
                        </div>
                    </div>
                    <div>
                        <div className="py-4">
                            <div className='pb-2'>
                                <label htmlFor="message">Message*</label>
                            </div>
                            <div>
                                <textarea rows="4" cols="69" name="message" id="message" className='form-control border-none bg-[#e3c9ff] p-2 rounded-lg outline-none caret-[#9F51F6] text-[#9F51F6]' onChange={msgChange}
                                    value={userMsg} required ></textarea>
                            </div>
                        </div>
                        <div className='flex justify-center align-center mw-100 py-4' >
                            <input type="submit" value={sent} className='btn btn-primary w-32 bg-[#9F51F6] rounded-full p-2 hover:bg-[#ad6ef5]' id='button' onClick={sendEmail} disabled={!disabling} />
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};
