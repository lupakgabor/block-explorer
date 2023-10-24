import {Card, CardBody} from "@material-tailwind/react";


export const ListCard = ({label, items}: { label: string, items: any[] }) => {
    return <Card className="mx-auto w-full">
        <CardBody>
            <h2 className="font-bold border-b-2">{label}</h2>
            <ul>
                {items.map(item => <li className="border-b-2 py-3">{item}</li>)}
            </ul>
        </CardBody>
    </Card>
}