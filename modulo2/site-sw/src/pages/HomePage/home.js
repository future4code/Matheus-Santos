import { HomePageContainer, ActionButton } from "./styles" 
import { useNavigate } from "react-router-dom"

export const HomePage = () => {
    const navigation = useNavigate()
    return (
        <HomePageContainer> 
            <ActionButton onClick={() => navigation('/list')}>
                Character list
            </ActionButton>
        </HomePageContainer>
    )
}