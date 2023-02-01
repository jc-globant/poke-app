import { Navbar as NextUINavbar, Text, Button, Link } from "@nextui-org/react";


export const Navbar = () => {
    return (
        <>
            <NextUINavbar isBordered>
                <NextUINavbar.Brand>
                    <Text b color="inherit" hideIn="xs">
                        ACME
                    </Text>
                </NextUINavbar.Brand>
            </NextUINavbar>
        </>
    )
}
