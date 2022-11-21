import Head from 'next/head'
import CropsInfo from '../components/CropsInfo'

const crops = () => {
  return (
    <div>
      <Head>
        <title>Crops | Stardew Tips</title>
      </Head>
      <CropsInfo />
    </div>
  )
}

export default crops
