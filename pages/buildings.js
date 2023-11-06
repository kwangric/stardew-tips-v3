import Head from 'next/head'
import BuildingsInfo from '../components/BuildingsInfo'

const buildings = () => {
    return (
        <div>
            <Head>
                <title>Buildings | Stardew Tips</title>
            </Head>
            <BuildingsInfo />
        </div>
    )
}

export default buildings