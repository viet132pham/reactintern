import { createContext, useState } from 'react';

// const initialState = {
//     isLoggedIn: false,
//     isLoginPending: false,
//     loginError: null
// }

const AuthContext = createContext();

function ContextProvider({ children }) {
    const [state, setState] = useState({});

    return (
        <AuthContext.Provider
            value={{ state, setState }}
        >
            {children}
        </AuthContext.Provider>
    );

}

export { AuthContext, ContextProvider }



