import { useEffect, useState } from 'react' 
import { getMenu } from '../../utils/api'


export const MenuPage = () => {
    const [menuList, setMenuList] = useState([]) 

    useEffect(() => {
        getMenu() 
        .then(({ response }) => {
            setMenuList(response)
        })
    },[]) 
    return (
        <>
        {menuList.map(menu => <p>key={menu.id} {JSON.stringify(menu)}</p>)}
        </>
    )
}