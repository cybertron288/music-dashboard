import NavBarContext from './NavBarContext';
import React, { useState } from 'react'
// import axios from "axios"
// import { BASE_URL } from "../../constants"

const NavBarState = ({children}) => {

  const [tabName, setTabName] = useState('Dashboard')

 

    return (
        <NavBarContext.Provider value={{  setTabName, tabName }}>
          {children}
        </NavBarContext.Provider>
      )
}

export default NavBarState;