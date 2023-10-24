import {Card, CardBody} from "@material-tailwind/react";


export const MainStats = () => {
    return <Card className="mx-auto max-w-screen-xl px-4">
      <CardBody>
        <div className="grid grid-flow-col">
            <div className="border-r-2 px-5">
                <div className="h-20 border-b-2">1</div>
                <div className="h-20">2</div>
            </div>
            <div className="border-r-2 px-5">
                <div className="h-20 border-b-2">3</div>
                <div className="h-20">4</div>
            </div>
            <div className="h-40 px-5">
                5
            </div>
        </div>
      </CardBody>
    </Card>
}