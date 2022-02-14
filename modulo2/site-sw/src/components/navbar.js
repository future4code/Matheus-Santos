import { NavBarStyled } from "./styles"
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {
    const navigation = useNavigate()
    return (
       <NavBarStyled> 
            <ul>
                <li onClick={() => navigation('/')}>Home</li> 
                <li onClick={() => navigation('/list')}>Character List</li>
            </ul>
       </NavBarStyled> 
    )
}