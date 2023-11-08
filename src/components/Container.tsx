
import {ReactNode} from "react";


export const Container = ({children, className}: {children: ReactNode, className?: string}) => {
    return <div className={`container max-w-screen-xl mx-auto ${className}`}>
        {children}
    </div>
}