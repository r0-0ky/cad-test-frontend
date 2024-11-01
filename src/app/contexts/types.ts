import { Dispatch, SetStateAction } from "react";

export interface FromContextType {
  setIsRequest: Dispatch<SetStateAction<boolean>>
  setRequestMessage: Dispatch<SetStateAction<string>>
}