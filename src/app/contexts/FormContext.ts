import { createContext } from "react";
import { FromContextType } from "./types";

export const FormContext = createContext<FromContextType>({
  setIsRequest: () => '',
  setRequestMessage: () => ''
});