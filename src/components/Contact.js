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
        <div className='flex flex-col justify-center items-center text-white pt-20'>
            <div className='text-lg text-[#9F51F6] mb-6'>
                <h1>Contact Me</h1>
            </div>

            <form id="form" className='w-full max-w-4xl flex flex-col gap-6' onSubmit={sendEmail}>
                <div className='flex flex-col md:flex-row md:gap-6'>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="from_name" className="mb-2">Name*</label>
                        <input
                            type="text"
                            name="from_name"
                            id="from_name"
                            className='form-control border-none bg-[#e3c9ff] p-2 rounded-lg outline-none caret-[#9F51F6] text-[#9F51F6] w-full'
                            onChange={userChange}
                            value={user}
                            required
                        />
                    </div>
                    <div className="flex flex-col flex-1 mt-4 md:mt-0">
                        <label htmlFor="reply_to" className="mb-2">E-mail*</label>
                        <input
                            type="text"
                            name="reply_to"
                            id="reply_to"
                            className='form-control border-none bg-[#e3c9ff] p-2 rounded-lg outline-none caret-[#9F51F6] text-[#9F51F6] w-full'
                            onChange={mailChange}
                            value={mail}
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="mb-2">Message*</label>
                    <textarea
                        rows="4"
                        name="message"
                        id="message"
                        className='form-control border-none bg-[#e3c9ff] p-2 rounded-lg outline-none caret-[#9F51F6] text-[#9F51F6] w-full resize-none'
                        onChange={msgChange}
                        value={userMsg}
                        required
                    ></textarea>
                </div>
                <div className='flex justify-center'>
                    <input
                        type="submit"
                        value={sent}
                        className='btn btn-primary w-32 bg-[#9F51F6] rounded-full p-2 hover:bg-[#ad6ef5] cursor-pointer'
                        id='button'
                        disabled={!disabling}
                    />
                </div>
            </form>
        </div>
    );
};
