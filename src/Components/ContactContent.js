import React from 'react';
import Links from './Links';

function ContactContent(props) {
    return (
        <div className='pl-5 w-100 d-flex justify-content-between align-items-center' style={{height: '90%'}}>
            <div className='h-100 w-100 d-flex justify-content-center align-items-center fade-in'>
                <div className="card mb-3" style={{width: '60rem', height: '30rem', backgroundColor: '#f3f4f8', pointerEvents: 'none'}}>
                    <h2 className="card-header color-white font-mansalva" style={{fontSize: '3rem', backgroundColor: '#821431'}}>Contact Me</h2>
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div className='h-100 w-50 p-3 color-magenta' style={{backgroundColor: '#F0EEDA'}}>
                            <h5 className="card-title font-mansalva">Let's talk</h5>
                            <h6 className="card-text">Always happy to hear. Don't hesitate to contact me!</h6>
                            <div className='mt-5'>
                                <p>
                                    <i className="fa-solid fa-location-dot " style={{fontSize: '1.5em', marginRight: '1.5rem'}}></i>
                                    <span style={{color: '#1c1620'}}>Shubra, Egypt</span>
                                </p>
                                <p>
                                    <i className="fa-solid fa-envelope" style={{fontSize: '1.5em', marginRight: '1rem'}}></i>
                                    <span style={{color: '#1c1620'}}>maria.ayman1877@gmail.com</span>
                                </p>
                                <p>
                                    <i className="fa-solid fa-phone " style={{fontSize: '1.5em', marginRight: '1rem'}}></i>
                                    <span style={{color: '#1c1620'}}>01223419968</span>
                                </p>
                            </div>
                        </div>
                        <div className='h-100 w-50 p-3 d-flex justify-content-center align-items-center'>
                            <img src='personal.svg' alt='personal info svg' style={{width: '300px', height: '300px'}}/>
                        </div>
                    </div>
                </div>
            </div>
            <Links/>
        </div>
    );
}

export default ContactContent;