import React from 'react'

import spinner from '../../assets/images/spinner.gif'
import { Wrapper } from './spinner.style'

export default () => {
    return (
        <Wrapper>
            <img src={spinner} alt='Loading...' />
        </Wrapper>
    )
}