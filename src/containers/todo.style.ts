import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    flex-wrap: wrap;

    .list-wrapper{
        flex:50%;
        margin-right:50px;
    } 
    
    @media only screen and (max-width: 600px) {
        .list-wrapper{
            flex:100%;
        } 
    }
`