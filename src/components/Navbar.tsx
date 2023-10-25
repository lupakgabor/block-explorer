import React from "react";
import {
    Navbar as BaseNavbar,
    Typography,
    Button,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import { Bars3Icon } from '@heroicons/react/24/solid'

const navList = [
    {label: 'Home', key: 'home'},
    {label: 'Blockchain', key: 'blockchain'},
    {label: 'Tokens', key: 'tokens'},
    {label: 'NFTs', key: 'nfts'},
    {label: 'Resources', key: 'resources'},
    {label: 'Developers', key: 'developers'},
    {label: 'More', key: 'more'},
]

export const Navbar = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const renderNavItem = ({key, label}: { key: string, label: string }) => {
        return <Typography
            key={key}
            as="li"
            variant="small"
            color="blue-gray"
            className="flex items-center gap-x-2 p-1 font-medium"
        >
            <a href="#" className="flex items-center">
                {label}
            </a>
        </Typography>
    }

    return (
        <BaseNavbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 bg-opacity-0 !bg-white">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium" >
                    Block Explorer
                </Typography>
                <div className="hidden lg:block">
                    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        {navList.map(item => renderNavItem(item))}
                    </ul>
                </div>

                <div className="flex items-center gap-x-1">
                    <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                        <span>Sign in</span>
                    </Button>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    <Bars3Icon className="h-6 w-6" />
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto">
                    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        {navList.map(item => renderNavItem(item))}
                    </ul>
                    <div className="flex items-center gap-x-1">
                        <Button fullWidth variant="gradient" size="sm" className="">
                            <span>Sign in</span>
                        </Button>
                    </div>
                </div>
            </Collapse>
        </BaseNavbar>
    );
}