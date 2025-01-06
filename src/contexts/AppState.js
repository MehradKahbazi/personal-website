import { createContext, useState } from "react";


const AppState = createContext(null);


export const AppProvider = ({children}) =>{
  const [collapsed, setCollapsed] = useState(false)

    return <AppState.Provider value={{collapsed, setCollapsed}}>{children}</AppState.Provider>
}

export default AppState;