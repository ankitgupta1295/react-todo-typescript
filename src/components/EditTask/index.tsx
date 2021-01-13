import React, {useRef} from 'react'

import { Wrapper } from './editTask.style'

type Props = {
    priority: number,
    title: string,
    id: number,
    onEditSaveClick:any
}

const EditTask: React.FC<Props> = ({ priority, title, id, onEditSaveClick }) => {
    let input:any = useRef(null);
    let select:any = useRef(null);

    const handleSaveClick = ()=>{ 
        if(input.current.value){      
            onEditSaveClick(id, {title: input.current.value, priority: +select.current.value})
        }
    }

    return (
        <Wrapper>
            <input 
                type='text' 
                autoFocus placeholder='Enter Task Title' 
                defaultValue={title} 
                ref={input}
            />
            <select ref={select} defaultValue={priority}>
                <option value={1}>P1</option>
                <option value={2}>P2</option>
                <option value={3}>P3</option>
            </select>
            <button className='save-button' onClick={handleSaveClick}>Save</button>
        </Wrapper>
    )
}

export default EditTask