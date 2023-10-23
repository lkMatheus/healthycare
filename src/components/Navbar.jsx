import { AppBar, Toolbar, Box, styled, Link, Button } from '@mui/material'
import React from 'react'
import Logo from './Images/Logo.png'
import { Vaccines } from '@mui/icons-material'


const StyleToolbar = styled(Toolbar)({

    display:"flex",
    justifyContent:'space-between',
    gap:20

});





const Navbar = () => {
    
        return (
            <AppBar position='static' sx={{height:'100%',width:'100%', backgroundColor:'white'}} >
                <StyleToolbar>
                    
                    <Box sx={{display:{xs:'none', sm:'block'}, width: 160,height: '100%',  '& img': {width: '100%', height: '100%', objectFit: 'contain',}}}>
                        <img src={Logo} alt="Logo" />
                    </Box>
                    <Vaccines sx={{display:{xs:'block',sm:'none',color:'blue'}}}/>

                    <Link  href='#' color={'black'} underline='hover' sx={{marginLeft:70}}>Home</Link>
                    <Link  href='#' color={'black'} underline='hover' >Serviços</Link>
                    <Link  href='#' color={'black'} underline='hover' >Agende uma consulta</Link>

                    <Button variant='contained' sx={{width:'10%', marginRight:5}}>Login</Button>

                    
                </StyleToolbar>
               
            </AppBar>
        )
}    

export default Navbar