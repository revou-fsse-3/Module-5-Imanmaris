import { ReactNode } from "react"

interface Props {
    children: ReactNode;
    className?: string;
}

const Card = ({children, className}: Props) => {

    return (
        <>
        <div className={`${className} px-5 py-5`}>
            {children}
        </div>
        </>
    )
}

export default Card