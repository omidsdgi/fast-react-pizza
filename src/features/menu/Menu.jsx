import {getMenu} from "../../services/apiRestaurant.js";
import {useLoaderData} from "react-router";
import MenuItem from "./MenuItem.jsx";

export async function loader() {
    return  getMenu();
}

export default function Menu() {
  const menu=useLoaderData() ?? [];
  return(
      <ul>
        {menu.map((pizza) => (
            <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
  )
}


