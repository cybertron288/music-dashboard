
import NavBarState from "./NavBar/NavBarState";
import { combineComponents } from './combineContext.tsx';

const providers = [
    NavBarState
]

export const AppContextProvider = combineComponents(...providers);