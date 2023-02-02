import { Text } from '@nextui-org/react';
import Link from 'next/link';
import styles from './PokeBrand.module.css'

export const PokeBrand = () => {
    return (
        <Link href={'/'} className={styles.logo__container}>
            <div className={styles.pokeball} />
            <Text b hideIn="xs" size={"$xl"}>
                Pokémon App
            </Text>
        </Link>
    )
}

