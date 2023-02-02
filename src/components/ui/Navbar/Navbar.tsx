import { Navbar as NextUINavbar, Text } from "@nextui-org/react";
import { PokeLogo } from './PokeLogo'

export const Navbar = () => {
    return (
        <NextUINavbar isBordered>
            <NextUINavbar.Brand>
                <PokeLogo />
                <Text b color="inherit" hideIn="xs" size={"$xl"}>
                    Pokemon App
                </Text>
            </NextUINavbar.Brand>
        </NextUINavbar>
    )
}

