import { FC, PropsWithChildren } from 'react'
import { Container } from "@nextui-org/react";
import Head from "next/head"
import { Navbar } from "@/components/ui"

interface Props {
    title?: string
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="Jorge Calderon Peralta" />
                <meta name="description" content="Informacion sobre el pokemon" />
                <meta name="keywords" content=" pokemon, pokedex" />

                <meta property="og:title" content={`Información sobre el pokémon ${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>
            <Navbar />
            <Container as='main' lg>
                {
                    children
                }
            </Container>
        </>
    )
}
