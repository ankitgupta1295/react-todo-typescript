import styled from 'styled-components';

type todoItemProps = {
    priority: number
}

const priorityColors:any = {
    '1':'red',
    '2':'green',
    '3':'yellow'
}

export const Wrapper = styled.li<todoItemProps>`
    padding: 5px 30px 20px 30px;
    margin: 10px;
    border: ${({priority})=>'3px solid ' + priorityColors[priority]};
    border-radius: 100px;

    &:hover{
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }

    .title{
        width:60%;
        display:inline-block;
    }

    .complete-button{
        float:right;
        margin-right: 20px;
        cursor:pointer;
        background-color: #1476ff;
        color:white;
        box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);    
        padding: 10px 20px 10px 20px;
        border:none;  
    }

    .complete-button:hover{
        background-color: #004cb5;        
    }

    .check-mark{
        align-items:right;
        float:right; 
        margin-right: 20px;   
        margin-top: 8px;       
        box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);              
    }

    .edit-icon{
        float:right;
        margin-right:20px;
        margin-top: 8px;
        cursor:pointer;
    }

    .delete-icon{
        cursor:pointer;
        align-items:right;
        float:right;
        box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
        margin-top: 7px
    }

    @media only screen and (max-width: 600px) {
        .title{
            width:100%;
            display:inline-block;
        }
    }
`