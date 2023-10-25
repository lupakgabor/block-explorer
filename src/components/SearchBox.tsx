import {Input} from "@material-tailwind/react";
import {Container} from "@/components/Container";


export const SearchBox = () => {

    return <div
        className="bg-blue-gray-900 left-0 h-64 p-20 text-white -my-3"
        style={{backgroundImage: `url('https://etherscan.io/images/svg/waves-light.svg')`}}
    >
        <Container>
            The Ethereum Blockchain Explorer
            {/*Known issue: https://github.com/creativetimofficial/material-tailwind/issues/427*/}
            <Input label="Search by Address / Txn Hash / Block / Token / Domain Name" crossOrigin="anonymus"/>
        </Container>
    </div>
}