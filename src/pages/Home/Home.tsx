import {Container, Navbar, SearchBox} from "@/components";
import {MainStats} from "@/pages/Home/MainStats";
import {ListCard} from "@/components/ListCard";

export const Home = () => {
    return <div>
        <Navbar />
        <SearchBox/>
        <Container>
            <MainStats />
            <div className="grid grid-cols-2 gap-4 mt-3">
                  <ListCard label="Blocks" items={['1', '2']}/>
                  <ListCard label="Transactions" items={['123', '1234']}/>
              </div>
        </Container>
    </div>
}

