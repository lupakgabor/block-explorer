import {Input} from "@material-tailwind/react";


export const SearchBox = () => {
    return <div className="bg-blue-gray-900 left-0 h-64 p-20 text-white -my-3" style={{backgroundImage: `url('https://etherscan.io/images/svg/waves-light.svg')`}}>
        The Ethereum Blockchain Explorer
        <Input label="Search by Address / Txn Hash / Block / Token / Domain Name" crossOrigin />
    </div>
}