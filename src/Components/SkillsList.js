import React from 'react';
import SkillCard from './SkillCard';

function SkillsList({skills}) {
    return (
        <div className='container'>
            <div className="row">
                {skills.map((s,i) => <SkillCard key={i} skill={s} />)}
            </div>
        </div>
    );
}

export default SkillsList;