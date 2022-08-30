import { Context, createContext } from "react";
import { RedefineContext } from "./Redefined";

export const AuthContext = (<RedefineContext>createContext)();
