import React from 'react';
import SkillItem from '../components/SkillItem';
import './Navbar.css';

function Skill() {
    return (
        <div className='grid'>
            <SkillItem
                itemHeadingName= 'Web Developer'
                itemIcon = 'fas fa-wrench'
                nameColor = 'grid-item orange'
            />
            <SkillItem
                itemHeadingName= 'Web Design'
                itemIcon = 'fas fa-image'
                nameColor = 'grid-item blue'
            />
            <SkillItem
                itemHeadingName= 'Graphic Design'
                itemIcon = 'fas fa-image'
                nameColor = 'grid-item yellow'
            />
        </div>
    )
}

export default Skill
