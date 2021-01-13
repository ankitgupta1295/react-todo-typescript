import React, { useRef } from 'react';

import { Wrapper } from './addTask.style'

type Props = {
    onAddClick:any
}

const AddTask: React.FC<Props> =  ({ onAddClick }) => {
    let input: any = useRef(null);
    let select: any = useRef(null);

    const handleAddClick = () => {
        if (input.current.value) {
            onAddClick({ title: input.current.value, priority: +select.current.value })
        }
    }

    return (
        <Wrapper>
            <div className='add-task'>
                <input
                    type='text'
                    autoFocus placeholder='Enter Task Title'
                    ref={input}
                />
                <select ref={select} defaultValue={1}>
                    <option value={1}>P1</option>
                    <option value={2}>P2</option>
                    <option value={3}>P3</option>
                </select>
                <button className='save-button' onClick={handleAddClick}>Add</button>
            </div>
        </Wrapper>
    )
}

export default AddTask;