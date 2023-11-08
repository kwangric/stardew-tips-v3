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
import { buildings as newBuildings } from '../assets/data'

const BuildingsInfo = () => {
    const [buildings, setBuildings] = useState([])
    const [displayedBuildings, setDisplayedBuildings] = useState([])

    const searchFilter = (searchTerm) => {
        if (searchTerm === '') {
            setDisplayedBuildings(buildings)
        } else {
            let filteredBuildings = newBuildings.filter(building => building.name.toLowerCase().includes(searchTerm))
            setDisplayedBuildings(filteredBuildings)
        }
    }

    useEffect(() => {
        setBuildings(newBuildings)
        setDisplayedBuildings(newBuildings)
    }, [])

    return (
        <>
            {buildings.length > 0 ? (
                <>
                    <Typography sx={{ paddingBottom: "2rem" }} variant="h3">
                        Buildings
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
                            {displayedBuildings.map((building) => {
                                return (
                                    <Grid key={building.id} item>
                                        <Card
                                            className="card"
                                            variant="outlined"
                                            sx={{
                                                width: '300px',
                                                height: 'auto',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignContent: 'flex-start',
                                                justifyContent: 'space-between',
                                            }}
                                            style={{
                                                backgroundColor: `${building.type === 'carpenter' ? '#fdfd96' : '#c3bbd7'}`,
                                                borderRadius: '25px',
                                            }}
                                        >
                                            <Box className="card-title" position="relative">
                                                <CardMedia
                                                    component="img"
                                                    image={`/images/buildings/${building.imageUrl}.png`}
                                                    sx={{
                                                        padding: '1rem',
                                                        width: 'auto',
                                                        maxHeight: '200px',
                                                        border: "3px solid black", borderRadius: "25px 25px 25px 25px", backgroundImage: "url('/images/buildings/farm-background.png')"
                                                    }}
                                                    alt={building.imageUrl}
                                                />
                                                <Box sx={{ margin: '1rem' }}>
                                                    <Typography variant="h5" component="div">
                                                        {building.name}
                                                    </Typography>
                                                    <Typography
                                                        sx={{ fontSize: '0.75rem', fontWeight: 'bold' }}
                                                        variant="subtitle2"
                                                    >
                                                        {building.description}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box
                                                position="relative"
                                            >
                                                <Box sx={{ 'textAlign': 'left' }}>
                                                    {Object.entries(building.cost).map((cost, index) => {
                                                        return (
                                                            <Box key={index}>
                                                                <CardMedia
                                                                    component="img"
                                                                    sx={{
                                                                        width: 20,
                                                                        height: 20,
                                                                        display: 'inline',
                                                                        verticalAlign: 'middle'
                                                                    }}
                                                                    image={`/images/resources/${cost[0]}.png`}
                                                                    alt={`${cost[0]}`}
                                                                />
                                                                <Typography variant="body1" sx={{ display: 'inline' }}>
                                                                    &nbsp;{cost[1]}
                                                                </Typography>
                                                            </Box>
                                                        )
                                                    })}
                                                </Box>
                                                <Tooltip title={building.type === "carpenter" ? "Carpenter's Shop" : "Wizard's Tower"}>
                                                    <CardMedia
                                                        component="img"
                                                        sx={{
                                                            width: 25,
                                                            height: 25,
                                                            position: 'absolute',
                                                            borderRadius: 5,
                                                            bottom: 0,
                                                            right: 0,
                                                        }}
                                                        image={`/images/buildings/${building.type}.png`}
                                                        alt={building.type}
                                                    />
                                                </Tooltip>
                                            </Box>
                                        </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                    {displayedBuildings.length > 0 ? <></> : <h2>:(</h2>}
                </>
            ) : (
                <CircularProgress variant="indeterminate" size={150} thickness={3} />
            )}
        </>
    )
}

export default BuildingsInfo