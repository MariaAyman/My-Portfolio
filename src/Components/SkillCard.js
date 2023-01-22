import React, { useState } from 'react';

function SkillCard({skill}) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };
    
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div className="card text-center card-phone-width" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
            <div className="card-body">
                <img src={skill.src} alt='icon' />
                { isHovering && (
                    <h5 className="card-title color-white">{skill.name}</h5>
                )}
            </div>
        </div>
    );
}

export default SkillCard;