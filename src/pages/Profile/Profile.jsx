import React, { useContext, useState } from 'react'
import ProfileUi from './ProfileUi'
import useHttp from '../../hooks/use-http';
import ChangePasswordUi from './ChangePasswordUi';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
const Profile = () =>
{
    const navigate = useNavigate();
    const {
        isLoading: isLoadingEditProfile,
        sendRequest: editProfile
    } = useHttp();
    const {
        isLoading: isLoadingChangePassword,
        sendRequest: changePassword
    } = useHttp();
    const authCtx = useContext(AuthContext);
    const profileData = authCtx.userData;
    const [isEdit, setIsEdit] = useState(false);
    let isUserNameOrEmailChanged = false;
    const handleEditProfile = (values) =>
    {
        let submitData = {};
        for (const key in values)
        {
            if (values[key] !== profileData[key])
            {
                submitData[key] = values[key];
                if (key === "userName" || key === "email") isUserNameOrEmailChanged = true;
            }
        }
        const getResponse = ({ message }) =>
        {
            if (message === "success")
            {
                authCtx.updateUserData(values)
                setIsEdit(false)
                //i logout when username change bcs token will be invalid
                if (isUserNameOrEmailChanged) handleLogout();
            }
        };
        editProfile(
            {
                url: "editProfile",
                method: "PATCH",
                body: submitData,
            },
            getResponse
        );
    }
    const handleChangePassword = (values) =>
    {

        const getResponse = ({ message }) =>
        {
            if (message === "success")
            {
                handleCloseChangePassword()
            }
        };
        changePassword(
            {
                url: "changePassword",
                method: "PATCH",
                body: values,
            },
            getResponse
        );
    }
    const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
    const handleCloseChangePassword = () =>
    {
        setIsChangePasswordOpen(false)
    }
    const handleOpenChangePassword = () =>
    {
        setIsChangePasswordOpen(true)
    }
    const handleLogout = () =>
    {
        authCtx.logOut();
        navigate("/login")
    }
    return (
        <>
            <ProfileUi
                profileData={profileData}
                handleEditProfile={handleEditProfile}
                isLoadingEditProfile={isLoadingEditProfile}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                handleOpenChangePassword={handleOpenChangePassword}
                handleLogout={handleLogout}
            />
            <ChangePasswordUi
                open={isChangePasswordOpen}
                handleClose={handleCloseChangePassword}
                handleChangePassword={handleChangePassword}
                isLoadingChangePassword={isLoadingChangePassword} />
        </>

    )
}

export default Profile