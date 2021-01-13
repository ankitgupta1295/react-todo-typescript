import React from 'react';

import TodoItem from './TodoItem'
import { Wrapper } from './TodoList.style'

import { todoItem } from '../../constants/types'

type Props = {
    data: todoItem[],
    onDeleteClick: any,
    onCompleteClick: any,
    onEditSaveClick: any
}

const TodoList: React.FC<Props> = ({ data, onDeleteClick, onCompleteClick, onEditSaveClick }) => {
    return (
        <Wrapper>
            {data.map(item => <TodoItem 
             key={item.id}
             title={item.title} 
             completed={item.completed} 
             id={item.id} 
             priority={item.priority} 
             onDeleteClick={onDeleteClick} 
             onCompleteClick={onCompleteClick} 
             onEditSaveClick={onEditSaveClick}
             />)}
        </Wrapper>
    )
}

export default TodoList