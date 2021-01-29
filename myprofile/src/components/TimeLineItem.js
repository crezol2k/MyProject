import React from 'react';

function TimeLineItem(props) {
    return (
        <div className="timeline-item">
            <div className="timeline-heading">
                <h3 className="timeline-entry-name">{props.timeLineEntryName}</h3>
                <span>{props.time}</span>
            </div>
            <p>{props.timeLineText}</p>
        </div>
    )
}

export default TimeLineItem
