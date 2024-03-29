import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { villagers as newVillagers } from '../assets/data'

const VillagersInfo = () => {
  const [villagers, setVillagers] = useState([])
  const [displayedVillagers, setDisplayedVillagers] = useState([])

  const searchFilter = (searchTerm) => {
    if (searchTerm === '') {
      setDisplayedVillagers(villagers)
    } else {
      let filteredVillagers = newVillagers.filter(villager => villager.name.toLowerCase().includes(searchTerm))
      setDisplayedVillagers(filteredVillagers)
    }
  }

  useEffect(() => {
    setVillagers(newVillagers)
    setDisplayedVillagers(newVillagers)
  }, [])

  return (
    <>
      {villagers.length > 0 ? (
        <>
          <Typography sx={{ paddingBottom: "2rem" }} variant="h3" className="new-font">
            Villagers
          </Typography>
          <Box className="component-view">
            <TextField sx={{ marginBottom: '1rem' }} id="outlined-search" label="Search" type="search" size="small"
              onChange={(event) => {
                searchFilter(event.target.value)
              }} />
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              align="center"
              flexWrap="wrap"
              columnGap="50px"
              rowGap="20px"
            >
              {displayedVillagers.map((villager) => {
                return (
                  <Grid key={villager.id} item>
                    <Card
                      className="card"
                      variant="outlined"
                      sx={{
                        width: 230,
                        height: 315,
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'flex-start',
                        justifyContent: 'space-between',
                      }}
                      style={{
                        backgroundColor: '#fdfd96',
                        borderRadius: '25px',
                      }}
                    >
                      <Box>
                        <Box className="card-title" position="relative">
                          {villager.marriage ? (
                            <CardMedia
                              component="img"
                              sx={{
                                width: 20,
                                height: 20,
                                position: 'absolute',
                                top: 10,
                                left: 0,
                              }}
                              image={`/images/icons/mermaids-pendant.png`}
                              alt="mermaids-pendant"
                            />
                          ) : villager.roommate ? (
                            <CardMedia
                              component="img"
                              sx={{
                                width: 20,
                                height: 20,
                                position: 'absolute',
                                top: 10,
                                left: 0,
                              }}
                              image={`/images/icons/void-ghost-pendant.png`}
                              alt="void-ghost-pendant"
                            />
                          ) : (
                            <></>
                          )}

                          <CardMedia
                            component="img"
                            sx={{ width: 75, height: 'auto', margin: "5px", padding: "5px 0 0 0", border: "3px solid black", borderRadius: "25px 25px 5px 5px", background: "#d9ac72" }}
                            image={`/images/villagers/${villager.imageUrl}.png`}
                            alt={villager.imageUrl}
                          />
                          <Typography variant="h5" component="div">
                            {villager.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {villager.birthday}
                            <br />
                          </Typography>
                        </Box>
                        <Box className="card-information">
                          <CardContent>
                            <Box
                              className="gifts"
                              display="flex"
                              flexWrap="wrap"
                              justifyContent="center"
                              gap="10px"
                            >
                              {villager.lovedGifts.map((gift, index) => {
                                return (
                                  <Tooltip key={index} title={gift.name}>
                                    <CardMedia
                                      component="img"
                                      sx={{ width: 35, height: 35 }}
                                      image={`/images/icons/gifts/${gift.imageUrl}.png`}
                                      alt={gift.imageUrl}
                                    />
                                  </Tooltip>
                                )
                              })}
                            </Box>
                          </CardContent>
                        </Box>
                      </Box>

                      {villager.note ? (
                        <Typography
                          sx={{ fontSize: '0.75rem' }}
                          variant="subtitle2"
                        >
                          {villager.note}
                        </Typography>
                      ) : (
                        <></>
                      )}
                    </Card>
                  </Grid>
                )
              })}
            </Grid>
          </Box>
          {displayedVillagers.length > 0 ? <></> : <h2>:(</h2>}
        </>
      ) : (
        <CircularProgress variant="indeterminate" size={150} thickness={3} />
      )}
    </>
  )
}

export default VillagersInfo
