import { NavLink, NavItem, Nav } from 'reactstrap';
import  Link  from './Link'
import React from 'react'

function navMap({items}) {

    return (
        <div>
              {items.map(item => (
                <NavItem key={item.name} className={item.className}>
                  <Link to={item.to}>
                    {item.name}
                  </Link>
                </NavItem>
              ))}
        </div>
    )
}
  

export default navMap;

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  