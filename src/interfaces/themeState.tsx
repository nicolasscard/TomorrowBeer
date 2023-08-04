import { Theme } from "@react-navigation/native";

export interface ThemeState extends Theme {
    colors: {
        primary: string,   
        secondary: string,   
        background: string,
        card: string,  
        text: string,  
        border: string,
        notification: string,  
        placeholder: string,  
    },
}
