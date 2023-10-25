
import {ReactNode} from "react";


export const Container = ({children}: {children: ReactNode}) => {
    return <div className="container max-w-screen-xl mx-auto ">
        {children}
    </div>
}