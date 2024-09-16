import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import styles from './index.module.css';

//Create a Theme provider for the Pagination
const theme = createTheme({
    components: {
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    color: "#1DC939",
                    
                    "&.Mui-selected": {
                        backgroundColor: "#1DC939",
                        color: "white",

                        '&:hover': {
                            backgroundColor: "#17A12E",
                            color: "white"
                        }
                    },
                    "&:hover": {
                        backgroundColor: "#17A12E",
                        color: "white"
                    },
                },
            },
        },
    },
});

// prefered use case of interface for better defining of the column data structure, in case of extensibility
export interface Column<T> {
    header: string; //Column Header
    accessor: keyof T; //Key in the data object corresponding to respective column.
    width?: string | number; //optional column width.
    align?: 'left' | 'center' | 'right'; //optional column alignment.
    render?: (data: T) => React.ReactNode;
}

//prefered use case of type alias for cases like union types.
type Data<T> = T[]

interface TableProps<T> {
    columns: Column<T>[];
    data: Data<T>;
    title?: string;
    subTitle?: string;
    columnColor?: string;
    pageSize?: number;
    button?: React.ReactNode;
}

export const Table =<T,>({
    columns=[],
    data=[],
    title,
    subTitle,
    columnColor='black',
    pageSize=10,
    button,
}: TableProps<T>) => {
    //set the current table page.
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [paginationState, setPaginationState] = useState<boolean>(false);

    useEffect(()=> {
        if(data.length > pageSize) {
            setPaginationState(true)
            
        }else{
            setPaginationState(false)
        }
    }, [pageSize, data.length])

    //calculate start and end index based on currentPage and pageSize;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = data.slice(startIndex, endIndex);
    //calculate total pages based on data length and pageSize;
    const totalPages = Math.ceil(data.length / pageSize);

    // const handleNextPage = ()=> {
    //     setCurrentPage((prevPage)=> Math.min(prevPage + 1, totalPages))
    // }

    // const handlePrevPage = ()=> {
    //     setCurrentPage((prevPage)=> Math.max(prevPage - 1, 1))
    // }

    const handlePageChange = (event:React.ChangeEvent<unknown>, newPage: number)=> {
        // console.log(event.target)
        setCurrentPage(newPage)
    }

    return(
        <div className={styles['tableContainer']}>
            <div className=' flex items-center justify-between mb-4'>
                <div className={styles['tableTitle']}>
                    <h3>{title}</h3>
                </div>
                <div className=' flex items-center gap-x-3'>
                    {button}
                </div>
            </div>
            <div className={styles['subtitle']}>
                <h4>{subTitle}</h4>
            </div>
            <table className={`${styles['table']} min-w-full`}>
                <thead
                    className={`text-sm font-medium pr-6 ${columnColor ? columnColor : 'text-gray-800'} py-4 text-left whitespace-nowrap`}
                >
                    <tr>
                        {
                            columns.map((column, index)=>(
                                <th
                                    key={index}
                                    style={{
                                        width: column.width,
                                        textAlign: column.align || 'left',
                                        color: columnColor
                                    }}
                                >
                                    {column.header}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        paginatedData.map((item, rowIndex)=>(
                            <tr key={rowIndex}>
                                {
                                    columns.map((column, columnIndex)=>(
                                        <td key={columnIndex} style={{ textAlign:  column.align || 'left' }}>
                                            {
                                                column.render ? column.render(item) : String(item[column.accessor])
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>

            {
                paginationState &&(
                    <div className='flex justify-center gap-x-3 mt-3 mb-3'>
                        
                        <ThemeProvider theme={theme}>
                            <Pagination
                                count={totalPages}
                                page={currentPage}
                                onChange={handlePageChange}
                                className={styles['pagination']}
                                size="small"
                            />
                        </ThemeProvider>

                    </div>
                )
            }
        </div>
    )
}
