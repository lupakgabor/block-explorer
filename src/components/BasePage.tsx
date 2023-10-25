import {ReactNode} from "react";
import {Navbar} from "@/components/Navbar";


type BasePageProps = {
    children: ReactNode,
}

export const BasePage = ({children}: BasePageProps) => {
    return <div className="bg-gray-100 h-screen pt-3">
        <div className="mx-auto max-w-screen-xl px-4 ">
            <Navbar/>
            {children}
        </div>
    </div>
}