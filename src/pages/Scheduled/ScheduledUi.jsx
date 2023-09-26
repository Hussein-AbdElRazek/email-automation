import { useEffect, useState } from 'react';
import
{ DeleteOutlined as DeleteIcon } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import
{
    DataGrid,
} from '@mui/x-data-grid';
const ScheduledUi = (props) =>
{
    const {
        rows,
        isLoading,
        currentPage,
        setCurrentPage,
        pageSize,
        setPageSize,
        totalNumberOfItems,
        handleCancelScheduledEvent,
        isLoadingCancelScheduledEvent,
    } = props;
    const columns = [
        {
            field: 'eventName',
            headerName: 'Event Name',
            minWidth: 50,
            flex: 1,
            align: 'left',
            headerAlign: 'left',
        },
        {
            field: 'templateName',
            headerName: 'Template Name',
            minWidth: 50,
            flex: 1,
            align: 'left',
            headerAlign: 'left',
        },
        {
            field: 'recivers',
            headerName: 'To',
            minWidth: 150,
            flex: 2,
            align: 'left',
            headerAlign: 'left',
            renderCell: (params) => (
                <Box
                    sx={{
                        height: "100%",
                        width: '100%',
                        overflow: "auto",
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap"
                    }}
                >
                    {params.row.recivers.map(({ email, _id }) => (

                        <Typography
                            key={_id}

                        >
                            {email}
                        </Typography>
                    ))}
                </Box>
            )
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
            field: 'sendAt',
            headerName: 'Will Send At',
            minWidth: 50,
            flex: 1,
            align: 'left',
            headerAlign: 'left',
        },
        {
            field: 'eventStatus',
            headerName: 'Status',
            minWidth: 50,
            flex: 0.5,
            align: 'left',
            headerAlign: 'left',

        },
        {
            field: 'cancel',
            headerName: 'Cancel',
            minWidth: 50,
            flex: 0.5,
            renderCell: (params) =>
            ((params.row.eventStatus === "pending") && (
                <IconButton
                    onClick={() => handleCancelScheduledEvent(params.row.id)}
                    disabled={isLoadingCancelScheduledEvent}
                >
                    <DeleteIcon color='error' />
                </IconButton>))
        },
    ];
    //handlePagination
    const [rowCountState, setRowCountState] = useState(totalNumberOfItems);
    useEffect(() =>
    {
        setRowCountState((prevRowCountState) =>
            totalNumberOfItems !== undefined ? totalNumberOfItems : prevRowCountState,
        );
    }, [totalNumberOfItems, setRowCountState]);
    const handlePaginationModelChange = (params) =>
    {
        setCurrentPage(params.page)
        setPageSize(params.pageSize)
    }
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            loading={isLoading || isLoadingCancelScheduledEvent}
            initialState={{
                pagination: {
                    paginationModel: { pageSize: 10, page: 0 },
                },
            }}
            pagination
            paginationMode="server"
            page={currentPage}
            pageSize={pageSize}
            pageSizeOptions={[10]}
            rowCount={rowCountState}
            rowsPerPageOptions={[10]}
            onPaginationModelChange={handlePaginationModelChange}
            rowHeight={80}
            sx={{ height: "80vh" }}
        />
    )
}

export default ScheduledUi