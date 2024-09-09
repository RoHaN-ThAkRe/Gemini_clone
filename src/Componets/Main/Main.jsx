import React, { useContext, useEffect, useRef } from 'react'
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    // const responseRef = useRef('');

    // useEffect(() => {
    //     if(resultData){
    //         responseRef.current.innerHTML = resultData;
    //     }
    // },[resultData]);


    function appLink() {
        window.open("https://support.google.com/gemini/answer/13594961?visit_id=638608046662442842-3551109289&p=privacy_notice&rd=1#privacy_notice", "_blank");
    }
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="main-container">

                {!showResult
                    ? <>

                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can i Help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautifull places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept: urban Planning</p>
                                <img src={assets.bulb_icon} alt="" />

                            </div>
                            <div className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                // : <p ref={responseRef}></p>
                            }
                        </div>
                    </div>
                }


                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input?<img onClick={() => onSent()} src={assets.send_icon}/>:null}
                        </div>

                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses. <span onClick={appLink} target="_blank">Your privacy and Gemini Apps</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main