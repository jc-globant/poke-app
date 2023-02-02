import { Text } from '@nextui-org/react';
import Link from 'next/link';
import styles from './PokeLogo.module.css'

export const PokeLogo = () => {
    return (
        <>
            <Link href={'/'} className={styles.logo__container}>
                <div className={styles.pokeball} />
                <Text b hideIn="xs" size={"$xl"}>
                    Pokemon App
                </Text>
            </Link>
        </>
    )
}

