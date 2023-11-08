import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const Changelog = () => {
  return (
    <Box
      className="component-view changelog"
      sx={{
        width: '100%',
        maxWidth: 400,
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
      }}
    >
      <Divider variant="middle" />
      <Typography variant="h5">Changelog</Typography>
      <Box>
        <Typography variant="h6">v2.1.1 - Nov 8, 2023</Typography>
        <Typography variant="body1">
          Added buildings guide.<br/>
          Added search function on villagers guide.<br/>
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">v2.1.0 - Oct 11, 2023</Typography>
        <Typography variant="body1">
          Added search function on crops and fish guides.<br/>
          Added ability to sort crops based on name or season.<br/>
          Added filter to see fish based on weather.<br/>
          Minor color changes.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">v2.0.0 - Jun 8, 2022</Typography>
        <Typography variant="body1">
          Site overhaul. Added crops and removed bundle guide. Legacy site can
          be found&nbsp;
          <Link
            color="primary"
            href="https://kwangric.github.io/stardewtips/index.html"
            target="_blank"
          >
            here
          </Link>
          .
        </Typography>
      </Box>
    </Box>
  )
}

export default Changelog
