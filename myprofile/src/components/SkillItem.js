import React from 'react';
import './Navbar.css';

function SkillItem(props) {
    return (
        <div>
            <div className={props.nameColor}>
                <span className="item-icon">
                    <i class={props.itemIcon}></i>
                </span>
                <h3 className="item-heading"> {props.itemHeadingName} </h3>
            </div>
        </div>
    )
}

export default SkillItem