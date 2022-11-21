import Head from 'next/head'
import VillagersInfo from '../components/VillagersInfo'

const villagers = () => {
  return (
    <div>
      <Head>
        <title>Villagers | Stardew Tips</title>
      </Head>
      <VillagersInfo />
    </div>
  )
}

export default villagers
