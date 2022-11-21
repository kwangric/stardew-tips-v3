import Head from 'next/head'
import FishInfo from '../components/FishInfo'

const fish = () => {
  return (
    <div>
      <Head>
        <title>Fish | Stardew Tips</title>
      </Head>
      <FishInfo />
    </div>
  )
}

export default fish
