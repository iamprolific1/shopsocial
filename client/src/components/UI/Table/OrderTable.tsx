import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from './index.module.css';

const theme = createTheme({
    components: {
        MuiPaginationItem: {
        styleOverrides: {
            root: {
            color: "#1DC939",

            "&.Mui-selected": {
                backgroundColor: "#1DC939",
                color: "white",

                "&:hover": {
                backgroundColor: "#17A12E",
                color: "white",
                },
            },
            "&:hover": {
                backgroundColor: "#17A12E",
                color: "white",
            },
            },
        },
        },
    },
});

export interface Column<T> {
    header: string;
    accessor: keyof T;
    width?: string | number;
    align?: 'left' | 'center' | 'right'
    render?: (data: T)=> React.ReactNode;
}

type Data<T> = T[]

interface OrderTableProps<T> {
    columns: Column<T>[];
    data:  Data<T>;
    title?: string;
    subTitle?: string;
    button?: React.ReactNode;
    columnColor: string;
    pageSize?: number;
}

export const OrderTable =<T, > ({
    columns=[],
    data=[],
    title,
    subTitle,
    button,
    columnColor='black',
    pageSize=8
}: OrderTableProps<T>)=> {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [paginationState, setPaginationState] = useState<boolean>(false);

    useEffect(()=> {
        if(data.length > pageSize) {
            setPaginationState(true);
        }else{
            setPaginationState(false)
        }
    }, [pageSize, data.length]);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = data.slice(startIndex, endIndex);
    const totalPages = Math.ceil(data.length / pageSize);

    const handlePageChange = (event:React.ChangeEvent<unknown>, newPage: number)=> {
        // console.log(event.target)
        setCurrentPage(newPage)
    }

    return (
        <div className={styles['container']}>
            <div className=" flex items-center justify-between">
                <div className={styles.recentOrderTitle}>{title}</div>
                <div>{button}</div>
            </div>
            <div>{subTitle}</div>
            <div className={styles['tableHeadings']}>
                {
                    columns.map((column, index)=>(
                        <div key={index} style={{ color: columnColor, fontWeight: '600', fontSize: '15px' }}>{column.header}</div>
                    ))
                }
            </div>
            <div className={styles['tableContentContainer']}>
                {
                    paginatedData.map((item, index)=>(
                        <div className={styles['tableContents']} key={index}>
                            {
                                columns.map((column, columnIndex)=>(
                                    <div key={columnIndex} style={{alignItems: column.align ? column.align : 'center'}}>
                                        {
                                            column.render ? column.render(item) : String(item[column.accessor])
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            
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