import { Stack, Box, Grid, Typography, Button, Link, Card, Avatar, Rating } from '@mui/material'
import React from 'react'
import Content1 from './Images/Content1.png'
import Content2 from './Images/Content2.png'
import MedicaSorrindo from './Images/MedicaSorrindo.png'
import FormasContent3 from './Images/FormasContent3.png'
import styled from '@emotion/styled'
import { ArrowUpward } from '@mui/icons-material'


const StyledCard = styled(Card)({
    width: 400,
    marginTop: 5,
    marginBottom: 5,
    border: '1px solid #000',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)'



})

const StyledAvatar = styled(Avatar)({

    width: 60,
    height: 60,
    


})



const Content = () => {

    return (
        <Stack direction="column" sx={{backgroundColor:'white'}}>
            <Box sx={{  height: '100%', width: '100%', '& img': { width: '100%', height: '100%', objectFit: 'contain' } }}>
                <img src={Content1} alt="Pessoa Sorrindo" />
            </Box>
            <Box sx={{  height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', '& img': { width: '80%', height: '80%', objectFit: 'contain' } }}>
                <img src={Content2} alt="Servicos" />
            </Box>

            <Box sx={{ width: '100%', }}>

                <Grid container  >


                    <Grid xs={4}>
                        <Box sx={{ height: '100%', width: '100%', '& img': { width: '100%', height: '100%', objectFit: 'contain' } }}>
                            <img src={MedicaSorrindo} alt="Medica Sorrindo" />
                        </Box>
                    </Grid>

                    <Grid xs={8} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box width='50%' sx={{ display: 'flex', textAlign: 'center', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant='h2' component='p'>Marcar consultas nunca foi tão simples</Typography>
                            <Typography variant='h4' component='p' sx={{ marginTop: 3 }}>Agende sua consulta com facilidade, no momento que melhor lhe convier.</Typography>
                            <Link sx={{ marginTop: 1, color: 'black' }}>Sua saúde está a um clique de distância!</Link>
                            <Button sx={{ marginTop: 3 }} href='#' variant='contained' > Agendar consulta</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>



            <Box>

                
                <Grid mt={5} mb={25} container >

                    <Grid xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <StyledCard>
                            <Grid container  mt={6} mb={6}>

                                <Grid sm={2} ml={1}>
                                    <StyledAvatar></StyledAvatar>
                                </Grid>
                                <Grid sm={9}>
                                    <Typography className='nome'mt={.5}>Ederson</Typography>
                                    <Typography className='profissao'>Dentista</Typography>
                                </Grid>
                            </Grid>
                            <Grid name='GridRating' display='flex'  alignItems='center' justifyContent='center' direction='column' mt={1} mb={1} >
                                <Rating name='read-only' value={3} sx={{ mb: 1 }}></Rating>
                                <Typography className='descricao'>O melhor dentista do meu bairro</Typography>
                            </Grid>

                        </StyledCard>

                    </Grid>


                    <Grid xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                        <StyledCard>

                            <Grid container  mt={6} mb={6}>

                                <Grid sm={2} ml={1}>
                                    <StyledAvatar></StyledAvatar>
                                </Grid>
                                <Grid sm={9}>
                                    <Typography className='nome' mt={.5}>Ederson</Typography>
                                    <Typography className='profissao'>Dentista</Typography>
                                </Grid>
                            </Grid>
                            <Grid name='GridRating' display='flex'  alignItems='center' justifyContent='center' direction='column' mt={1} mb={1} >
                                <Rating name='read-only' value={3} sx={{ mb: 1 }}></Rating>
                                <Typography className='descricao'>O melhor dentista do meu bairro</Typography>
                            </Grid>
                        </StyledCard>

                    </Grid>


                </Grid>
                <Grid  mb={5} display='flex' justifyContent='center' alignItems='center'alignContent='center'>
                    <Link href='#' display='flex'alignContent='center' mt={1}><ArrowUpward display='flex' alignItems='center'/>Voltar ao topo </Link>
                </Grid>
            </Box>

            
        </Stack>



    )




}




export default Content