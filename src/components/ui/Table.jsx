import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'

const Table = (props) =>
{
    const {
        rows,
        columns,
        isLoading,
        currentPage,
        setCurrentPage,
        pageSize,
        setPageSize,
        totalNumberOfItems,
        rowHeight,
    } = props;

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
            loading={isLoading}
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
            rowHeight={rowHeight}
            sx={{ height: "80vh" }}
        />
    )
}

export default Table