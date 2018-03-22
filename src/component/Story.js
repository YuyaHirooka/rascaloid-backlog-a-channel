import React from 'react'
//todo impl props


const Story = ({onClick, title, startDate, expireDate}) => (
    <li onClick={onClick}>
        {title},{startDate},{expireDate}
    </li>
)

export default Story