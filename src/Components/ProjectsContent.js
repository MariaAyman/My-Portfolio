import React, { useState } from 'react';
import Links from './Links';
import ProjectsList from './ProjectsList';

function ProjectsContent(props) {
    const HTMLProjs = [
        {
            name: 'Music Player',
            thumbnail: 'Projects/music-player.png',
            liveDemo: 'https://velvet-music-player.netlify.app/',
            code: 'https://codepen.io/MariaAyman/pen/LYbrzoq'
        },
        {
            name: 'User Profile',
            thumbnail: 'Projects/user-profile.png',
            liveDemo: 'https://user-profile-maxencefvl.netlify.app/',
            code: 'https://codepen.io/MariaAyman/pen/zYopgoE'
        },
        // {
        //     name: '404 page',
        //     thumbnail: 'Projects/404-page.png',
        //     liveDemo: 'https://codepen.io/MariaAyman/full/gOLoVeY',
        //     code: 'https://codepen.io/MariaAyman/pen/gOLoVeY'
        // },
        {
            name: 'Leaderboard',
            thumbnail: 'Projects/leaderboard.png',
            liveDemo: 'https://acotar-leaderboard.netlify.app/',
            code: 'https://github.com/MariaAyman/DailyUI/tree/master/019-Leaderboard'
        },
    ];

    const ReactProjs = [
        {
            name: 'IRead',
            thumbnail: 'Projects/IRead.png',
            liveDemo: 'https://iread-bookshelf-app.netlify.app/login',
            code: 'https://github.com/MariaAyman/BookShelf-React-App'
        },
        {
            name: 'The Office Quiz',
            thumbnail: 'Projects/the-office.png',
            liveDemo: 'https://the-office-quiz-react-app.netlify.app/',
            code: 'https://github.com/MariaAyman/TheOffice-Quiz-React-App'
        },
        {
            name: 'Movie List',
            thumbnail: 'Projects/movie-list.png',
            liveDemo: 'https://watchlist-movie-react.netlify.app/',
            code: 'https://github.com/MariaAyman/Movie-Watchlist-React-Router'
        },
        // {
        //     name: 'Todos',
        //     thumbnail: 'Projects/todos.png',
        //     liveDemo: 'https://react-todolist-77.netlify.app/',
        //     code: 'https://github.com/MariaAyman/Todo-App-React-Redux'
        // },
    ];

    const BlenderProjs = [
        {
            name: 'BlenderGuru Donut',
            thumbnail: 'Projects/donut.png',
            liveDemo: 'https://dribbble.com/shots/19855404-Blender-Guru-Donut',
            code: ''
        },
        // {
        //     name: 'Halloween Pumpkin',
        //     thumbnail: 'Projects/halloween.png',
        //     liveDemo: 'https://dribbble.com/shots/19855473-Halloween-pumpkins',
        //     code: ''
        // },
        {
            name: 'Heart Plushie SKZ',
            thumbnail: 'Projects/heart-plushie.png',
            liveDemo: 'https://dribbble.com/shots/19797664-SKZ-Maxident',
            code: ''
        },
        {
            name: 'Christmas',
            thumbnail: 'Projects/xmas.png',
            liveDemo: 'https://dribbble.com/shots/20086637-Christmas-decoration',
            code: ''
        },
    ];

    const [isHClicking, setIsHClicking] = useState(false);
    const [isRClicking, setIsRClicking] = useState(false);
    const [isBClicking, setIsBClicking] = useState(false);

    const [isHFliping, setIsHFliping] = useState(false);
    const [isRFliping, setIsRFliping] = useState(false);
    const [isBFliping, setIsBFliping] = useState(false);

    const handleHClick = () => {
        setIsHClicking(!isHClicking);
        setIsRClicking(false);
        setIsBClicking(false);

        setIsHFliping(!isHFliping);
        setIsRFliping(false);
        setIsBFliping(false);
    }

    const handleRClick = () => {
        setIsHClicking(false);
        setIsRClicking(!isRClicking);
        setIsBClicking(false);

        setIsHFliping(false);
        setIsRFliping(!isRFliping);
        setIsBFliping(false);
    }

    const handleBClick = () => {
        setIsHClicking(false);
        setIsRClicking(false);
        setIsBClicking(!isBClicking);

        setIsHFliping(false);
        setIsRFliping(false);
        setIsBFliping(!isBFliping);
    }


    return (
        <div className='pl-5 w-100 d-flex justify-content-between align-items-center' style={{height: '90%'}}>
            <div className='h-100 w-100 fade-in'>
                <h2 className='text-center font-mansalva color-magenta' style={{fontSize: '3rem', margin: '25px'}}>
                    Portfolio
                </h2>
                <h5 className='text-center font-mansalva color-magenta' style={{margin: '25px'}}>
                    Work Samples
                </h5>
                <div className='w-100 p-3'>
                    <h4 style={{marginBottom: '25px'}} onClick={(e) => handleHClick(e)}>
                        <i className={`${isHFliping ? 'flip-once' : 'flip-twice'} fa-solid fa-angles-right color-magenta`} onAnimationEnd={() => setIsHFliping(false)}></i>
                        <span className='hover-name'>HTML</span>
                    </h4>
                    { isHClicking && (
                        <ProjectsList projects={HTMLProjs} />
                    )}
                </div>
                <div className='w-100 p-3'>
                    <h4 style={{marginBottom: '25px'}} onClick={handleRClick}>
                        <i className={`${isRFliping ? 'flip-once' : 'flip-twice'} fa-solid fa-angles-right color-magenta`} onAnimationEnd={() => setIsRFliping(false)}></i>
                        <span className='hover-name'>React</span>
                    </h4>
                    { isRClicking && (
                        <ProjectsList projects={ReactProjs} />
                    )}
                </div>
                <div className='w-100 p-3'>
                    <h4 style={{marginBottom: '25px'}} onClick={handleBClick}>
                        <i className={`${isBFliping ? 'flip-once' : 'flip-twice'} fa-solid fa-angles-right color-magenta`} onAnimationEnd={() => setIsBFliping(false)}></i>
                        <span className='hover-name'>Blender</span>
                    </h4>
                    { isBClicking && (
                        <ProjectsList projects={BlenderProjs} />
                    )}
                </div>
            </div>
            <Links/>
        </div>
    );
}

export default ProjectsContent;