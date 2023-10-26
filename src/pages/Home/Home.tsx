import {Container, Navbar, SearchBox} from "@/components";
import {MainStats} from "@/pages/Home/MainStats";
import {BlocksListCard} from "@/pages/Home/BlocksListCard";
import {TransactionsListCard} from "@/pages/Home/TransactionsListCard";

export const Home = () => <div>
    <Navbar/>
    <SearchBox/>
    <Container>
        <MainStats/>
        <div className="grid grid-cols-2 gap-4 mt-3">
            <BlocksListCard/>
            <TransactionsListCard/>
        </div>
    </Container>
</div>


