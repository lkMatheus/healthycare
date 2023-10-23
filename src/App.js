
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Content from "./components/Conteudo"
import Footer from "./components/Footer";


function App() {
  return (

    <Box>
      <Navbar />

      <Box>
        <Content/>
        <Footer/>
      </Box>
    </Box>


  );
}

export default App;
