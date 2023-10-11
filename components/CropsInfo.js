/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Grid from '@mui/material/Grid'
import Tooltip from '@mui/material/Tooltip'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { crops as newCrops } from '../assets/data'

const CropsInfo = () => {
  const [crops, setCrops] = useState([])
  const [seasons, setSeasons] = useState(['spring', 'summer', 'fall'])
  const [displayedCrops, setDisplayedCrops] = useState([])
  const [cropOrder , setCropOrder] = useState('name')
  const [priceMultiplier, setPriceMultiplier] = useState(1)

  const getCropsBySeason = (season, crops) => {
    if (Array.isArray(season)) {
      return crops.filter((crop) => {
        const combinedSeasons = new Set(crop.season.concat(season))
        return combinedSeasons.size != crop.season.length + season.length
      })
    }
    return crops.filter((crop) => crop.season.includes(season))
  }

  const changeCrops = (season) => {
    let newSeasons = [...seasons]
    if (seasons.includes(season)) {
      newSeasons.splice(seasons.indexOf(season), 1)
      setSeasons(newSeasons)
      setDisplayedCrops(sortCrops(getCropsBySeason(newSeasons, crops), cropOrder))
    } else {
      newSeasons.push(season)
      setSeasons(newSeasons)
      setDisplayedCrops(sortCrops(getCropsBySeason(newSeasons, crops), cropOrder))
    }
  }

  const updateCrops = (order) => {
    setCropOrder(order)
    setDisplayedCrops(sortCrops(getCropsBySeason(seasons, crops), order))
  }

  const searchFilter = (searchTerm) => {
    if (searchTerm === '') {
      setCrops(newCrops)
      setDisplayedCrops(sortCrops(getCropsBySeason(seasons, newCrops), cropOrder))
    } else {
      let filteredCrops = newCrops.filter(crop => crop.name.toLowerCase().includes(searchTerm))
      if (filteredCrops.length === 0) {
        setDisplayedCrops([])
      } else {
        setCrops(filteredCrops)
        setDisplayedCrops(sortCrops(getCropsBySeason(seasons, filteredCrops), cropOrder))
      }
    }
  }

  const sortCrops = (currentCrops, order) => {
    if (order === 'season') {
      return currentCrops.sort((a, b) => {
        if (a.id < b.id) {
          return -1
        }
        if (a.id > b.id) {
          return 1
        }
        return 0})
    }
    if (order === 'name') {
      return currentCrops.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0})
    }
    return currentCrops
  }

  useEffect(() => {
    setCrops(newCrops)
    setDisplayedCrops(sortCrops(newCrops, cropOrder))
  }, [])

  return (
    <>
      {crops.length > 0 ? (
        <>
          <Typography sx={{ paddingBottom: '2rem' }} variant="h3">
            Crops
          </Typography>
          <Box className="component-view">
            <Container
              className="filters"
              display="flex"
              align="center"
              direction="row"
            >
              <TextField sx={{marginBottom: '1rem'}} id="outlined-search" label="Search" type="search" size="small" 
              onChange={(event) => {
                      searchFilter(event.target.value)
                    }}/>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '20px 100px',
                  flexWrap: 'wrap',
                }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  gap="1rem"
                  height="190px"
                >
                  <FormLabel>Seasons</FormLabel>
                  <Box>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            className="seasonFilter"
                            defaultChecked
                            size="small"
                            value="spring"
                            onChange={(event) => {
                              changeCrops(event.target.value)
                            }}
                          />
                        }
                        label="Spring"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            className="seasonFilter"
                            defaultChecked
                            size="small"
                            value="summer"
                            onChange={(event) => {
                              changeCrops(event.target.value)
                            }}
                          />
                        }
                        label="Summer"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            className="seasonFilter"
                            defaultChecked
                            size="small"
                            value="fall"
                            onChange={(event) => {
                              changeCrops(event.target.value)
                            }}
                          />
                        }
                        label="Fall"
                      />
                    </FormGroup>
                  </Box>
                </Box>
                {/* Profession */}
                <Box
                  display="flex"
                  flexDirection="column"
                  gap="1rem"
                  height="150px"
                >
                  <FormLabel>Profession</FormLabel>
                  <RadioGroup
                    value={priceMultiplier}
                    onChange={(event) => {
                      setPriceMultiplier(event.target.value)
                    }}
                  >
                    <FormControlLabel
                      value={1}
                      control={<Radio size="small" />}
                      label="None"
                    />
                    <FormControlLabel
                      value={1.1}
                      control={<Radio size="small" />}
                      label="Tiller"
                    />
                  </RadioGroup>
                </Box>
                {/* Sort */}
                <Box
                  display="flex"
                  flexDirection="column"
                  gap="1rem"
                  height="150px"
                >
                  <FormLabel>Sort By:</FormLabel>
                  <RadioGroup
                    value={cropOrder}
                    onChange={(event) => {
                      updateCrops(event.target.value)
                    }}
                  >
                    <FormControlLabel
                      value="name"
                      control={<Radio size="small" />}
                      label="Name"
                    />
                    <FormControlLabel
                      value="season"
                      control={<Radio size="small" />}
                      label="Season"
                    />
                  </RadioGroup>
                </Box>
              </Box>
            </Container>
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
              {displayedCrops.map((crop) => {
                return (
                  <Grid key={crop.id} item>
                    <Card
                      className="card"
                      variant="outlined"
                      sx={{
                        width: 275,
                        height: 390,
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'flex-start',
                        justifyContent: 'space-between',
                      }}
                      style={{
                        backgroundColor: crop.backgroundColor,
                        borderRadius: '25px',
                      }}
                    >
                      <Box className="card-title">
                        <Typography variant="h5" component="div">
                          {crop.name}
                        </Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '30px',
                            margin: '4% 0',
                          }}
                        >
                          {crop.season.map((season, index) => {
                            return (
                              <Tooltip
                                key={index}
                                title={
                                  season[0].toUpperCase() +
                                  season.slice(1, season.length)
                                }
                              >
                                <CardMedia
                                  component="img"
                                  sx={{
                                    width: 25,
                                    height: 25,
                                    borderRadius: 5,
                                  }}
                                  image={`/images/icons/${season}.png`}
                                  alt={season}
                                />
                              </Tooltip>
                            )
                          })}
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <Box className="card-information">
                            <Typography variant="body1">
                              Cost
                              <br />
                            </Typography>
                            {crop.jojaPrice ? (
                              <>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {crop.price}g ({crop.shop})
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {crop.jojaPrice}g (JojaMart)
                                </Typography>
                              </>
                            ) : crop.price ? (
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {crop.price}g ({crop.shop})
                              </Typography>
                            ) : (
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                N/A
                              </Typography>
                            )}

                            <Typography variant="body1">
                              Grow Time
                              <br />
                            </Typography>
                            {crop.regrowthTime ? (
                              <>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {crop.growTime} days
                                  <br />
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {crop.regrowthTime} days (Regrowth)
                                  <br />
                                </Typography>
                              </>
                            ) : crop.irrigatedGrowTime ? (
                              <>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {crop.growTime} days
                                  <br />
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {crop.irrigatedGrowTime} days (Irrigated)
                                  <br />
                                </Typography>
                              </>
                            ) : (
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {crop.growTime} days
                                <br />
                              </Typography>
                            )}

                            <Typography variant="body1">
                              Sell Price
                              <br />
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Normal:{' '}
                              {Math.floor(crop.sellPrice * priceMultiplier)}g{' '}
                              <br />
                              Silver:{' '}
                              {Math.floor(
                                Math.floor(crop.sellPrice * 1.25) *
                                  priceMultiplier
                              )}
                              g <br />
                              Gold:{' '}
                              {Math.floor(
                                Math.floor(crop.sellPrice * 1.5) *
                                  priceMultiplier
                              )}
                              g <br />
                              Iridium:{' '}
                              {Math.floor(
                                Math.floor(crop.sellPrice * 2) * priceMultiplier
                              )}
                              g
                              <br />
                            </Typography>
                          </Box>
                          <Box
                            sx={{ display: 'flex', alignContent: 'center' }}
                            className="card-image"
                          >
                            <CardMedia
                              component="img"
                              sx={{ width: 75, height: 75 }}
                              image={`/images/crops/${crop.imageUrl}.png`}
                              alt={crop.imageUrl}
                            />
                          </Box>
                        </Box>
                      </Box>

                      {crop.note ? (
                        <Typography
                          sx={{ fontSize: '0.75rem', fontWeight: 'bold' }}
                          variant="subtitle2"
                        >
                          {crop.note}
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
          {displayedCrops.length > 0 ? <></> : <h2>:(</h2>}
        </>
      ) : (
        <CircularProgress variant="indeterminate" size={150} thickness={3} />
      )}
    </>
  )
}

export default CropsInfo
