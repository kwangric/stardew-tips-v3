import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { buildings as newBuildings } from '../assets/data'

const BuildingsInfo = () => {
    const [buildings, setBuildings] = useState([])

    useEffect(() => {
        setBuildings(newBuildings)
    }, [])

    return (
        <>
            {buildings.length > 0 ? (
                <>
                    <Typography sx={{ paddingBottom: "2rem" }} variant="h3">
                        Buildings
                    </Typography>
                    <Box className="component-view">
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
                            {buildings.map((building) => {
                                return (
                                    <Grid key={building.id} item>
                                        <Card
                                            className="card"
                                            variant="outlined"
                                            sx={{
                                                width: '300px',
                                                height: '425px',
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
                                                    }}
                                                    alt={building.imageUrl}
                                                />
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
                                            <Box
                                                position="relative"
                                                sx={{
                                                    marginTop: '1rem',
                                                }}>
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
                                                                alt='gold cost'
                                                            />
                                                            <Typography variant="body1" sx={{ display: 'inline' }}>
                                                                {cost[1]}
                                                            </Typography>
                                                        </Box>
                                                    )
                                                })}
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
                </>
            ) : (
                <CircularProgress variant="indeterminate" size={150} thickness={3} />
            )}
        </>
    )
}

export default BuildingsInfo