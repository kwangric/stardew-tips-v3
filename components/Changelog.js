import { useState, useEffect } from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Fade from '@mui/material/Fade'
import Link from '@mui/material/Link'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

const Changelog = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box
      className="component-view changelog"
      sx={{
        width: '100%',
        maxWidth: 400,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Divider variant="middle" />
      <div>
        <Button variant="text" size="large" onClick={handleOpen}>Changelog</Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={{
              'position': 'absolute',
              'top': '50%',
              'left': '50%',
              'transform': 'translate(-50%, -50%)',
              'width': 600,
              'bgcolor': '#fdfd96',
              'border': '2px solid #000',
              'borderRadius': '25px',
              'boxShadow': 24,
              'p': 4,
            }}>
              <div className="changelog-modal">

                {/* CHANGELOG */}
                <Box>
                  <Typography variant="h6"><strong>v2.1.1 - Nov 8, 2023</strong></Typography>
                  <Typography variant="body1">
                    Added buildings guide.<br />
                    Added search function on villagers guide.<br /><br />
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6"><strong>v2.1.0 - Oct 11, 2023</strong></Typography>
                  <Typography variant="body1">
                    Added search function on crops and fish guides.<br />
                    Added ability to sort crops based on name or season.<br />
                    Added filter to see fish based on weather.<br />
                    Minor color changes.<br /><br />
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6"><strong>v2.0.0 - Jun 8, 2022</strong></Typography>
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
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    </Box>
  )
}

export default Changelog
