/* eslint-disable indent */
import { useContext, createContext, useReducer } from "react";

export interface Auth {
  token: string | null;
  userInitials?: string;
}

interface Action {
  type: "login" | "signup" | "logout";
  payload: Auth;
}
type Dispatch = (action: Action) => void;
const initialState: Auth = {
  token: null,
};
const AuthContext = createContext<{ state: Auth; dispatch: Dispatch }>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "To access useAuth your function must be enclose inside of an AuthProvider!"
    );
  }

  return context;
};

const authReducer = (_state: Auth, action: Action) => {
  switch (action.type) {
    case "login": {
      return { ...action.payload };
    }
    case "signup": {
      return { ...action.payload };
    }
    case "logout": {
      return initialState;
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const value = { state, dispatch };
  return <AuthContext.Provider value={value} {...props} />;
};
