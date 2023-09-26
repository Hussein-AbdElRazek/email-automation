import { IconButton } from '@mui/material';
import { DeleteOutlined as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import Table from '../../components/ui/Table';

const AllTemplatesUi = (props) =>
{
    const {
        rows,
        isLoading,
        currentPage,
        setCurrentPage,
        pageSize,
        setPageSize,
        totalNumberOfItems,
        handleDeleteTemplate,
        isLoadingDeleteTemplate,
        handleOpenEditDialog,
    } = props;

    const columns = [
        {
            field: 'templateName',
            headerName: 'Template Name',
            minWidth: 50,
            flex: 1,
            align: 'left',
            headerAlign: 'left',
        },
        {
            field: 'emailSubject',
            headerName: 'Email Subject',
            minWidth: 50,
            flex: 1,
            align: 'left',
            headerAlign: 'left',
        },
        {
            field: 'emailContent',
            headerName: 'Email Content',
            minWidth: 100,
            flex: 2,
            align: 'left',
            headerAlign: 'left',
        },
        {
            field: 'createdAt',
            headerName: 'Created At',
            minWidth: 50,
            flex: 1,
            align: 'left',
            headerAlign: 'left',
        },
        {
            field: 'edit',
            headerName: 'Edit',
            minWidth: 50,
            flex: 0.5,
            sortable: false,
            renderCell: (params) =>
            (
                <IconButton
                    onClick={() => handleOpenEditDialog(params.row)}
                >
                    <EditIcon />
                </IconButton>)
        },
        {
            field: 'delete',
            headerName: 'Delete',
            minWidth: 50,
            flex: 0.5,
            sortable:false,
            renderCell: ({ id }) =>
            (
                <IconButton
                    onClick={() => handleDeleteTemplate(id)}
                    disabled={isLoadingDeleteTemplate}
                >
                    <DeleteIcon color='error' />
                </IconButton>)
        },
    ]
    return (
        <Table
            rows={rows}
            columns={columns}
            isLoading={isLoading || isLoadingDeleteTemplate}
            page={currentPage}
            setCurrentPage={setCurrentPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
            totalNumberOfItems={totalNumberOfItems}
            rowHeight={50}
        />
    )
}

export default AllTemplatesUi