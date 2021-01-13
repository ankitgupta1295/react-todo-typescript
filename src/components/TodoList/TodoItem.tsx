import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { GrEdit } from 'react-icons/gr'

import EditTask from '../EditTask';
import { Wrapper } from './TodoItem.style'

type Props = {
    completed: boolean,
    id: number,
    priority: number,
    title:string,
    onDeleteClick: any,
    onCompleteClick: any,
    onEditSaveClick:any
}

const TodoItem: React.FC<Props> = ({ title, completed, id, priority, onDeleteClick, onCompleteClick, onEditSaveClick }) => {
    const [isEditEnabled, setEditEnabled] = useState(false)

    const handleEditClick = () => {
        setEditEnabled((prevState) => !prevState)
    }

    return (
        <>
            <Wrapper priority={priority}>
                <>
                    <div className='title'>{title}</div>
                    <AiFillDelete className='delete-icon' onClick={() => onDeleteClick(id)} />
                    <GrEdit className='edit-icon' onClick={handleEditClick} />
                    {completed ? <IoMdCheckmarkCircleOutline className='check-mark' />
                        : <button className='complete-button' onClick={() => onCompleteClick(id)}>Complete</button>}
                </>
            </Wrapper>
            {isEditEnabled && <EditTask priority={priority} title={title} id={id} onEditSaveClick={onEditSaveClick}/>}
        </>
    )
}

export default TodoItem