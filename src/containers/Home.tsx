import React, { useRef } from 'react'
import { useHistory } from "react-router-dom";

import { Wrapper } from './home.style'

const Todo: React.FC = () => {
    const history = useHistory();

    const input: any = useRef(null)

    const handleLinkClick = () => {
        if (input.current.value) history.push(input.current.value)
    }

    return (
        <Wrapper>
            <input type='number' ref={input} autoFocus placeholder='Enter User Id'/>
            <br />
            <button onClick={handleLinkClick} className='link'>Enter</button>
        </Wrapper>
    )
}

export default Todo;