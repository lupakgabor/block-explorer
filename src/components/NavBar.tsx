import {
    Navbar as BaseNavbar,
    Typography,
    Button,
} from "@material-tailwind/react";

export const Navbar = () => {

    const renderNavItem = ({label}: { label: string }) => {
        return <Typography
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

    const navList = [
        {label: 'Home'},
        {label: 'Blockchain'},
        {label: 'Tokens'},
        {label: 'NFTs'},
        {label: 'Resources'},
        {label: 'Developers'},
        {label: 'More'},
    ]

    return (
        <BaseNavbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 bg-opacity-0 !bg-white">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-medium"
                >
                    Block Explorer
                </Typography>
                <div className="hidden lg:block">
                    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        {navList.map(item => renderNavItem(item))}
                    </ul>
                </div>
                <div className="flex items-center gap-x-1">
                    <Button
                        variant="gradient"
                        size="sm"
                        className="hidden lg:inline-block"
                    >
                        <span>Sign in</span>
                    </Button>
                </div>
            </div>
        </BaseNavbar>
    );
}