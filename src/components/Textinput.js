import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export default function Textinput(props) {

    const [text, setText] = useState('Enter Text Here');
    const [history, setHistory] = useState([]);
    const prevHistory = []
    const [text_count, setText_count] = useState('3');
    const [find, setFind] = useState('');
    const [replase, setReplase] = useState('');
    const btnstyle = 'border-2 p-1 rounded border-purple-500 text-xl hover:bg-purple-500 transition duration-300 ease-in-out'
    const resetbtnstyle = 'p-1 border-2 rounded border-[#ea0007] hover:bg-[#ea0007] transition duration-300 ease-in-out'

    function toggleChars(msg) {
        for (let i = 0; i < msg.length; i++) {
            if (msg[i] >= 'A' && msg[i] <= 'Z')
                msg[i] = String.fromCharCode(msg[i].charCodeAt(0) + 'a'.charCodeAt(0) - 'A'.charCodeAt(0));
            else if (msg[i] >= 'a' && msg[i] <= 'z')
                msg[i] = String.fromCharCode(msg[i].charCodeAt(0) + 'A'.charCodeAt(0) - 'a'.charCodeAt(0));
        }
    }

    const capsText = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const lowerText = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const sentenceCase = () => {
        let newText = text
            .toLowerCase()
            .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
                return c.toUpperCase();
            });
        setText(newText);
    };

    const capsEachword = () => {
        let newText = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        setText(newText);
    };

    const remove_lineBreaks = () => {
        let newText = text.replace(/[\r\n]/gm, ' ');
        setText(newText);
    };

    const add_lineBreaks = () => {
        let rm_spaces = text.replaceAll('. ', '.');
        let newText = rm_spaces.replaceAll('.', '.\n');
        setText(newText);
    };

    const num_to_text = () => {
        try {
            var converter = require('number-to-words');
            let words = converter.toWords(text);
            let newText = words.replaceAll(',', '')
            setText(newText);
        } catch (err) {
            setText('Enter a number to change it to words');
        }
    };

    const count_words = () => {
        let newText = 0;
        let check = false;

        for (let i = 0; i < text.length; i++) {
            if (text[i] !== ' ' && !check) {
                newText++;
                check = true;
            } else if (text[i] === ' ') {
                check = false;
            }
        }
        setText_count(newText);
    };

    useEffect(() => {
        count_words();
    }, [text]);

    const toggle = () => {
        let msg = text.split('');
        toggleChars(msg);
        let newText = msg.join('');
        setText(newText);
    };

    const clear = () => {
        let newText = 'Enter Text Here';
        setText(newText);
    };

    const selectAll = () => {
        document.getElementById('text-box').select();
    }

    const findText = () => {
        const inputSelect = document.getElementById('text-box')
        const index = inputSelect.value.indexOf(find);
        if (index !== -1) {
            inputSelect.focus();
            inputSelect.setSelectionRange(index, index + find.length);
        }
    }

    const rePlace = () => {
        setText(text.replace(find, replase))
    }

    const rePlaceAll = () => {
        setText(text.replaceAll(find, replase))
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
        // setHistory([...prevHistory, event.target.value]);
        // console.log(history)
    };

    const handleFindChange = (event) => {
        setFind(event.target.value);
    };

    const handleReplaseChange = (event) => {
        setReplase(event.target.value);
    };

    return (
        <div className='mt-3'>
            <div className='flex justify-between items-center mb-3 text-3xl'>
                <h1>{props.heading}</h1>
                <h6>{text_count} Words</h6>
            </div>
            <div className='my-3 flex justify-center'>
                <textarea
                    className='w-3/4 my-3 bg-black px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#750288] border-[#2B3040]'
                    value={text}
                    onChange={handleOnChange}
                    id='text-box'
                    rows='7'
                    onFocus={selectAll}
                ></textarea>
            </div>
            <div className='flex justify-center gap-3 flex-wrap mb-3'>
                <button className={btnstyle} onClick={selectAll}>
                    selectAll
                </button>
                <button className={btnstyle} onClick={remove_lineBreaks}>
                    rm_linebreaks
                </button>
                <button className={btnstyle} onClick={add_lineBreaks}>
                    add_linebreaks
                </button>
                <button className={btnstyle} onClick={capsText}>
                    capitalize
                </button>
                <button className={btnstyle} onClick={lowerText}>
                    lower
                </button>
                <button className={btnstyle} onClick={sentenceCase}>
                    Sentence case
                </button>
                <button className={btnstyle} onClick={capsEachword}>
                    capEachword
                </button>
                <button className={btnstyle} onClick={toggle}>
                    toggle_case
                </button>
                <button className={btnstyle} onClick={num_to_text}>
                    num_to_words
                </button>
                <button className={resetbtnstyle} onClick={clear}>
                    Reset
                </button>
            </div>
            <div className='flex justify-center gap-3 flex-wrap'>
                <div className='d-flex justify-content-center gap-2 flex-wrap'>
                    <div className='flex items-center'>
                        <label htmlFor='find' className='flex flex-col justify-content-center'>
                            Find
                            <input type="text" id='find' className='bg-black px-1 py-1 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#03AC13] border-[#2B3040]' onChange={handleFindChange} />
                        </label>
                    </div>
                    <div className='flex items-center'>
                        <label htmlFor='replace' className='flex flex-col justify-content-center'>
                            Replace with
                            <input type="text" className='bg-black px-1 py-1 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#03AC13] border-[#2B3040]' onChange={handleReplaseChange} />
                        </label>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <button className={btnstyle} onClick={findText}>
                        Find
                    </button>
                    <button className={btnstyle} onClick={rePlace}>
                        replace
                    </button>
                    <button className={btnstyle} onClick={rePlaceAll}>
                        replaceall
                    </button>
                    {/* <button className='btn btn-outline-primary overflow-hidden' onClick={()=>{const prevText = history[-1];setText(prevText)}}>
                        back
                    </button> */}
                </div>
            </div>
        </div>
    );
}


Textinput.propTypes = {
    heading: PropTypes.string,
}

Textinput.defaultProps = {
    heading: 'Enter text',
}
