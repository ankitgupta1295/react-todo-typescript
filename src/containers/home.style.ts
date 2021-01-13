import styled from 'styled-components'

export const Wrapper = styled.div`
    margin-top:50px;
    text-align:center;


    >input{
        padding:10px;
        margin-bottom:30px;  
        box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);                  
    }
    
    
    .link{
        text-decoration:none;
        padding:10px 20px 10px 20px;
        background-color: #1476ff;
        box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);  
        color:white;          
        border:none;
        cursor:pointer;
    }

    .link:hover{
        background-color: #004cb5;        
    }
`