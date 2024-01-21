
import { ReactNode, useMemo } from "react";
import style from './OldCard.module.css';

interface Props {
    children: ReactNode;
    justifyContent?: 'start' | 'center' |'end';
    display?:'flex' | 'block';
    direction?:'row' | 'column';
}

const OldCard = ({children, justifyContent = 'start', display='flex', direction='row'} : Props) => {

    const justifyContentStyled = useMemo(
        () => {
            
            if(justifyContent === 'start') {
                return style.justifyLeft
            }

            if(justifyContent === 'center') {
                return style.justifyCenter
            }

            return style.justifyRight

        }, [justifyContent]
        
    );

    const displayStyled = useMemo(
        () => {
            
            if(display === 'flex') {
                return style.displayFlex
            }

            return style.displayBlock

        }, [display]
        
    );

    const directionStyled = useMemo(
        () => {
            
            if(direction === 'row') {
                return style.flexDirectionRow
            }

            return style.flexDirectionColumn

        }, [direction]
        
    );


    return (
        <main className={`${style.cardContainer} ${justifyContentStyled} ${displayStyled} ${directionStyled}`}>
            {children}
        </main>
    )
}

export default OldCard