import { useContext,createContext,useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ userName: "Suriya", userId: "2200" });
  
    return (
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    );
  };

  
  
  export const useAuth = () => {
    return useContext(AuthContext);
  };