import React from 'react';
import CardItem from '../components/CardItem';
import './Navbar.css';

function Card() {
    return (
    <div className='grid' >
        <div className="grid-item orange">
            <CardItem
                skillName='html'
                skillDescription='Lorem ipsum dolor, sit amet 
                consectetur adipisicing elit. In, doloribus. '
            />
        </div>

        <div className="grid-item blue"> 
            <CardItem
                skillName='css'
                skillDescription='Lorem ipsum dolor, sit amet 
                consectetur adipisicing elit. In, doloribus. '
            />
        </div>

        <div className="grid-item yellow"> 
            <CardItem
                skillName='javascript'
                skillDescription='Lorem ipsum dolor, sit amet 
                consectetur adipisicing elit. In, doloribus. '
            />
        </div>

        <div className="grid-item purple"> 
            <CardItem
                skillName='reactjs'
                skillDescription='Lorem ipsum dolor, sit amet 
                consectetur adipisicing elit. In, doloribus. '
            />
        </div>

    </div>
    )
}

export default Card
