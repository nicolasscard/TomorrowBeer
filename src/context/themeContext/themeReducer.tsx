import { ThemeState } from '../../interfaces/themeState';
import { darkTheme, lightTheme } from '../../theme/theme';

type ThemeAction = 
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export const themeReducer = ( state: ThemeState,  action: ThemeAction ): ThemeState => {
    switch ( action.type ) {
        case 'set_light_theme':
            return { ...lightTheme }
        
        case 'set_dark_theme':
                return { ...darkTheme }
    
        default:
            return state;
    }
}
