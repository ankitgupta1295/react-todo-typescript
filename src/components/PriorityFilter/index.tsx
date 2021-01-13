import React from 'react';

import { Wrapper } from './priorityFilter.style'

type Props = {
    onFilterClick: any
}

const priorityFilter: React.FC<Props> = ({ onFilterClick }) => {
    return (
        <Wrapper>
            <div className='priority'>
                <div className='priority-item'>
                    <span className='priority-color' style={{ backgroundColor: 'red' }} onClick={() => onFilterClick(1)} />
                    <span>Priority 1</span>
                </div>
                <div className='priority-item'>
                    <span className='priority-color' style={{ backgroundColor: 'green' }} onClick={() => onFilterClick(2)} />
                    <span>Priority 2</span>
                </div>
                <div className='priority-item'>
                    <span className='priority-color' style={{ backgroundColor: 'yellow' }} onClick={() => onFilterClick(3)} />
                    <span>Priority 3</span>
                </div>
            </div>
        </Wrapper>
    )
}

export default priorityFilter