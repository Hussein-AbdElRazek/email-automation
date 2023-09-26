import { Box, Toolbar } from "@mui/material";
import Navbar, { drawerWidth } from "../../components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import SendEmail from "../Send Email/SendEmail";
import Scheduled from "../Scheduled/Scheduled";
const Home = () =>
{

    return (
        <>
            <Navbar>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Routes>
                        <Route index element={<SendEmail />} />
                        <Route path='send' element={<SendEmail />} />
                        <Route path='scheduled' element={<Scheduled />} />
                    </Routes>
                </Box>
            </Navbar>
        </>
    );
}

export default Home;