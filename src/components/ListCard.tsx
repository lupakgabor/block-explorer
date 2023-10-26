import {ReactNode} from "react";
import {Card, CardBody} from "@material-tailwind/react";

type ListCardProps<T extends {hash: string}> = {
    label: string;
    items: T[];
    renderItems: (item: T) => ReactNode;
}


export const ListCard = <T extends {hash: string},>({label, items, renderItems}: ListCardProps<T>) => {
    return <Card className="mx-auto w-full">
        <CardBody>
            <h2 className="font-bold border-b-2">{label}</h2>
            <ul>
                {items.map(item => <li key={item.hash} className="border-b-2 py-3">{renderItems(item)}</li>)}
            </ul>
        </CardBody>
    </Card>
}