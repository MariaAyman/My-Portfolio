import React from 'react';
import Links from './Links';

function ProfileCard() {
    return (
        <div className='pl-5 w-100 d-flex justify-content-between align-items-center' style={{height: '90%'}}>
            <div className='h-100 d-flex justify-content-around align-items-center fade-in phone-width'> {/*w-75 */}
                <div className='profileCard-phone-width'> {/*style={{width: '350px'}} */}
                    <img className='w-100' src='/profile-img.png' alt='profile-img' style={{borderRadius: '50%', border: '5px solid #F0EEDA', backgroundColor: '#F0EEDA'}}/> {/*020102, fdf4f5 */}
                </div>
                <div className='h-100 w-50 d-flex flex-column justify-content-center'>
                    <h2 className='font-mansalva' style={{fontSize: '3rem', marginBottom: '25px'}}>Hi, My name is <span className='color-magenta'>Maria</span></h2>
                    <h4 className='color-magenta' style={{marginBottom: '25px'}}>React Developer</h4>
                    <p>
                        CS Engineering graduate, with 1 year working on solo HTML/CSS and JavaScript projects, less than 1 year working with React.js. Passionate about design and work perfection.  
                    </p>
                    {/* <a className="w-25 btn danger" href="https://drive.google.com/file/d/192a9HfVZjjlARUA89rhymmk8h9ahendg/view" target="_blank" rel="noopener noreferrer" role="button">My CV</a> */}
                    <a className="button" href="https://drive.google.com/file/d/192a9HfVZjjlARUA89rhymmk8h9ahendg/view" target="_blank" rel="noopener noreferrer" role="button">
                        <span className='circle' aria-hidden='true'>
                            <span className='arrow-icon'></span>
                        </span>
                        <span className='button-text'>My CV</span>
                    </a>
                </div>
            </div>    
            <Links />
        </div>
    );
}

export default ProfileCard;