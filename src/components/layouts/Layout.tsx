import { FC, PropsWithChildren } from 'react'
import Head from "next/head"
import { Navbar } from "@/components/ui"

interface Props {
    title?: string
}

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="Jorge Calderon Peralta" />
                <meta name="description" content="Informacion sobre el pokemon XXXXX" />
                <meta name="keywords" content="XXXX, pokemon, pokedex" />
            </Head>
            <Navbar />
            <main>
                {
                    children
                }
            </main>
        </>
    )
}
