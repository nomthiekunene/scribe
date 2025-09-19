"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
}

interface IUserContext {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

// Create context
const UserContext = createContext<IUserContext | undefined>(undefined);

// Provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  // Load user from localStorage when app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for easy usage
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
