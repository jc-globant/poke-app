import { Navbar as NextUINavbar } from "@nextui-org/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { PokeBrand } from './PokeBrand'

export const Navbar = () => {

    const { asPath } = useRouter();

    return (
        <NextUINavbar variant={"static"}>
            <NextUINavbar.Brand>
                <PokeBrand />
            </NextUINavbar.Brand>
            <NextUINavbar.Content activeColor={"error"}>
                <NextLink href="/favorites" legacyBehavior passHref>
                    <NextUINavbar.Link isActive={asPath === "/favorites"}>
                        Favorites
                    </NextUINavbar.Link>
                </NextLink>
            </NextUINavbar.Content>
        </NextUINavbar>
    )
}

