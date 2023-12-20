import Link from 'next/link'

import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'

const Nav = () => {
  return (
    <div>
      <AppBar position="static" sx={{ marginBottom: '2rem' }}>
          <Container maxWidth="xl">
            <Toolbar
              sx={{ display: 'flex', justifyContent: 'center', gap: {xs: "5px", sm: "50px"}}}
              disableGutters
              className="new-font"
            >
              <Link href='/'>Home</Link>
              <Link href='/crops'>Crops</Link>
              <Link href='/villagers'>Villagers</Link>
              <Link href='/fish'>Fish</Link>
              <Link href='/buildings'>Buildings</Link>
            </Toolbar>
          </Container>
        </AppBar>
    </div>
  )
}

export default Nav
