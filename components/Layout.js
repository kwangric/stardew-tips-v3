import Nav from './Nav'
import styles from '../styles/Layout.module.css'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}</main>
      </div>
              <BottomNavigation
                showLabels
                onChange={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  })
                }}
              >
                <BottomNavigationAction label="Back to top" />
              </BottomNavigation>
    </>
  )
}

export default Layout
