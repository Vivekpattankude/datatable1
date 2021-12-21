import React, {useMemo} from 'react'
import { useTable } from 'react-table';
import { COLUMNS } from 'react-table';
import DATA from './DATA.json'
import './table.css';

export const Table = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => DATA, [])

   const tableInstance = useTable({
        columns,
        data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRows,
    } = tableInstance

    return (
        <table {...getTableProps()}>

            <thead>
                { headerGroups.map((headerGroups) =>(
                <tr {...headerGroups.getHeaderGroupProps()}>
                    {headerGroups.headers.map( Column => (
                       <th {...Column.getHeaderProps()}>{Column.render('Header')}</th>
                        )) }
                     </tr>   
                    ))}                   
            </thead>

            <tbody {...getTableBodyProps()}>
                {rows.map( row => {
                prepareRows(row)
                    return(                      
                    <tr {...row.getRowProps()}>
                        {row.cells.map( cell => {
                        return    <td {...cell.getCellProps()}>{cell.render('cell')}</td>
                        })}      
                        </tr>
                        )
                    })}
            </tbody>

        </table>
    )
}
