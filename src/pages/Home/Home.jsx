import { Box, Toolbar } from "@mui/material";
import Navbar, { drawerWidth } from "../../components/navbar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import SendEmail from "../Send Email/SendEmail";
import Scheduled from "../Scheduled/Scheduled";
import AddTemplate from "../AddTemplate/AddTemplate";
import AllTemplates from "../AllTemplates/AllTemplates";
import Profile from "../Profile/Profile";
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
                        <Route path='add-template' element={<AddTemplate />} />
                        <Route path='templates' element={<AllTemplates />} />
                        <Route path='profile' element={<Profile />} />
                        <Route path="*" element={<Navigate to="/" replace={true} />} />
                    </Routes>
                </Box>
            </Navbar>
        </>
    );
}

export default Home;