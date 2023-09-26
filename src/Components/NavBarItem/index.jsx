import { useContext, useEffect } from 'react';
import { NavLink} from 'react-router-dom'
import { ShoopingCartContext } from '../../Context';

const NavBarItem =({category})=>{
    const context = useContext(ShoopingCartContext)
    const activeStyle = 'underline underline-offset-4'
    useEffect(() => {
      // Extraer la categoría de la ruta actual
      const currentCategory = location.pathname.split('/')[2];
  
      // Actualizar el estado de searchCategory
      context.setSearchCategory(currentCategory || ''); // Si no hay categoría, se establece en vacío
    }, [location.pathname, context]);

    return (
        <li>
            <NavLink
              to={`/category/${category}`}
              className={`hidden lg:flex md:flex xl:flex {({ isActive }) =>
                isActive ? activeStyle : undefined
              }`}
              onClick={()=>context.setSearchCategory(category)}
              >
              {category}
            </NavLink>
        </li>
    )
};

export {NavBarItem}