import React from 'react';
import Links from './Links';
import SkillsList from './SkillsList';

function AboutContent(props) {
    const skills = [
        {
            name: 'HTML',
            src: 'https://img.icons8.com/color/48/null/html-5--v1.png'
        },
        {
            name: 'CSS',
            src: 'https://img.icons8.com/color/48/null/css3.png'
        },
        {
            name: 'JavaScript',
            src: 'https://img.icons8.com/fluency/48/null/javascript.png'
        },
        {
            name: 'Bootstrap',
            src: 'https://img.icons8.com/color/48/null/bootstrap.png'
        },
        {
            name: 'React',
            src: 'https://img.icons8.com/office/40/null/react.png'
        },
        {
            name: 'Blender',
            src: 'https://img.icons8.com/color/48/null/blender-3d.png'
        },
    ];

    return (
        <div className='pl-5 w-100 d-flex justify-content-between align-items-center' style={{height: '90%'}}>
            <div className='h-100 w-100 d-flex justify-content-center align-items-center fade-in'>
                <div className='h-100 w-50 p-5 d-flex flex-column justify-content-center'>
                    <h2 className='font-mansalva color-magenta' style={{fontSize: '3rem', marginBottom: '25px'}}>
                        About Me
                    </h2>
                    <p>
                        I graduated in 2020 from CS Engineering and I've always loved Web Development, so after grduation, I started taking HTML/CSS and JS online courses
                        and participating in challenges DailyUI. After that I started an offline course with GoMyCode, Introduction to ReactJS Track.
                        Then I started a customer services job that gave me great communication skills. Now I'm working more on myself to apply learned skills on more real
                        life projects and learn even more to become a very good Front End developer.
                    </p>
                    <div>
                        <h4 className='font-mansalva color-magenta' style={{marginBottom: '25px'}}>Skills</h4>
                        <SkillsList skills={skills}/>
                    </div>
                </div>
                <div style={{width: '350px'}}>
                    <img className='w-100' src='img002-removebg.png' alt='my-profile' style={{borderRadius: '5%', border: '5px solid #F0EEDA', backgroundColor: '#f0eeda'}}/>
                </div>
            </div>
            <Links/>
        </div>
    );
}

export default AboutContent;