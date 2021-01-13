import styled from 'styled-components';

export const Wrapper = styled.div`
    margin:30px; 

    >input{
        boder:none;
        box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);    
        padding:10px;
        width:65%;
    }

    >button{
        cursor:pointer;
        background-color: #1476ff;
        color:white;
        box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);    
        padding: 10px 20px 10px 20px;
        border:none; 
        margin-left: 30px; 
    }

    >button:hover{
        background-color: #004cb5;        
    }

    >select{
        width:70px;
        padding:10px;
        margin-left:30px;
        box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);            
    }
`