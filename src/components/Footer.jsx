import PropTypes from 'prop-types'
import React from 'react'
import { Grid,Box, Typography} from '@mui/material'


const Footer = () =>{

    return (

        <Box name='Footer' sx={{backgroundColor:'#1D7BBA'}}>
                <Grid container >

                    

                    <Grid sm={4}  alignItems='center'>
                    
                        <Typography variant='h6' component='p'>Cadastre seus email e fique por dentro das novidades!</Typography>

                        
                    </Grid>

                    <Grid sm={4}  alignItems='center' justifyContent='center'>
                    
                        <Typography variant='h7' component='p'>Home</Typography>
                        <Typography variant='h7' component='p' mb={5} mt={5}>Serviços</Typography>
                        <Typography variant='h7' component='p'>Agende uma consulta</Typography>
                    
                    </Grid>

                    <Grid sm={4}  display='flex' alignItems='center' justifyContent='center'>
                    
                    <Typography variant='h5' component='p'>Healthycare</Typography>
                
                </Grid>


                </Grid>
            </Box>
        
        
      )

}



export default Footer