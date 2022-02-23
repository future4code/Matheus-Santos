import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { getMenu } from "../../utils/api";

export const DetailsPage = () => {
  const { id } = useParams()
  const [menu, setMenu] = useState({})

  useEffect(() => {
    const fetch = async () => {
      const { response } = await getMenu(id)
      const menuList = {}
      for (let menuItem of response) {
        if (!menuList[menuItem.group]) menuList[menuItem.group] = [menuItem]
        else menuList[menuItem.group].push(menuItem)
      }
      setMenu(menuList)
    }
    fetch()
  }, [])

  return (
    <div>
    {Object.keys(menu).map((group) => (
        <div>
        <Accordion> 
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{group}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                {menu && menu[group].map((menuItem, i)=> <p> key={i} {JSON.stringify(menuItem)}</p>)}
            </Typography>
          </AccordionDetails>
        </Accordion> 
        </div>
      ))}
    </div>
  );
};
