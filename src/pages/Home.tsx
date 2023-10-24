import { Button} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import alchemy from "@/services/alchemy.ts";
import {BasePage, SearchBox} from "@/components";
import {MainStats} from "@/pages/MainStats.tsx";
import {ListCard} from "@/components/ListCard.tsx";

export const Home = () => {
    const [blockNumber, setBlockNumber] = useState<number | null>(null);

    useEffect(() => {
        async function getBlockNumber() {
            setBlockNumber(await alchemy.core.getBlockNumber());
        }

        getBlockNumber();
    });


    return <BasePage>
        <SearchBox />
        <MainStats />
        <div className="grid grid-cols-2 gap-4 mt-3">
            <ListCard label="Blocks" items={['alma', 'korte']} />
            <ListCard label="Transactions" items={['Sanyi', 'béla']} />
        </div>
    </BasePage>
}

