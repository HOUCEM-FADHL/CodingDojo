import { createContext, useState} from 'react'

export const NameContext = createContext();

export const NameProvider = ({ children }) => { // This is the context provider/ Wrapper Component
    const [name, setName] = useState("");
    return (
        <NameContext.Provider value={{ name, setName }}>
            {children}
        </NameContext.Provider>
    )
}