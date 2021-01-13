import styled from 'styled-components';

export const Wrapper = styled.div`
    flex:10%;

    .priority{
        float:right;
        position:fixed;
        right:0;
        margin: 30px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding:10px;
    }

    .priority-color{
        padding:5px 15px 5px 15px;
        box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
        margin-right:20px;   
        cursor:pointer;     
    }

    .priority-item{
        margin:20px;
    }

    @media only screen and (max-width: 600px) {
        .priority{
            position:static;
            float:none;
        }
    }
`