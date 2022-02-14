import styled from 'styled-components' 


export const NavBarStyled = styled.nav`
    background-color: #1F2738; 
    height: 10vh; 
    >ul {
        list-style: none; 

        >li {
            display: flex; 
            justify-content: center;   
            padding: 15px; 
            border-radius: 10px;
            &:hover {
                cursor: pointer; 
                background-color: white;
            }
        }
    }
`