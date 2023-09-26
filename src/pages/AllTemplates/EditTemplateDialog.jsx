import {  Dialog, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import AddTemplateUi from '../AddTemplate/AddTemplateUi';

const EditTemplateDialog = (props) =>
{
    const {
        open,
        handleClose,
        editingTemplate,
        handleEditTemplate,
        isLoadingEditTemplate
    } = props;
    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle color="primary">Edit Template</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>            
            <AddTemplateUi
                initialValues={editingTemplate}
                handleEditTemplate={handleEditTemplate}
                isLoading={isLoadingEditTemplate}
                isEdit={true}
            />

        </Dialog>
    )
}

export default EditTemplateDialog