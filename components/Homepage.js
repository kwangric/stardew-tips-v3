import Card from '@mui/material/Card'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography'
import Changelog from './Changelog'

const Homepage = () => {
  return (
    <Card sx={{backgroundColor: "#fcfccc", padding: "3rem", borderRadius: '25px'}} variant="outlined">
      <Typography variant="h3" display="block">
        Stardew Tips
      </Typography>
      <br />
      <Typography variant="caption" color="text.secondary" display="block">
        For any bugs or suggestions, please email richardkwang25@gmail.com
      </Typography>
      <Link href="https://github.com/kwangric/stardew-tips-v3" target="_blank">
        <Typography variant="caption" display="block">Source Code</Typography>
      </Link>
      <br />
      <Changelog />
    </Card>
  )
}

export default Homepage
