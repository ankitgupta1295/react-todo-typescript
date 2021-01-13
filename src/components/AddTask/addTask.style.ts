import styled from 'styled-components';

export const Wrapper = styled.div`
    flex:30%;

    .add-task{
        position:fixed;
        left:30px;
        padding:20px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); 
        margin:30px 0px 0px 0px;  

        >input{
            boder:none;
            box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);    
            padding:10px;
            width:64%;
        }
        
        >button{
            cursor:pointer;
            background-color: #1476ff;
            color:white;
            box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);    
            padding: 10px 20px 10px 20px;
            border:none; 
            width:100%;
            margin-top:30px;
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
    }

    @media only screen and (max-width: 600px) {
        flex:100%;

        .add-task{
            position:static;
        }
    }
`