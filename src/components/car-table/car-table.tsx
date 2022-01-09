import { CarListItemAvatar } from "@components/car-list-item/car-list-item";
import { TableSimpleItem } from "@components/table-simple-item";
import { faCarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import styles from "./car-table.module.scss";

const cellRender = (cell: any) => {
  if (cell.column === "Brand") {
    return <div></div>;
  }
};

function Table({ columns, data }: any) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup: any, i: number) => (
          <tr key={i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any, idx: number) => (
              <th key={idx} {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: any, i: number) => {
          prepareRow(row);
          return (
            <tr key={i} {...row.getRowProps()}>
              {row.cells.map((cell: any, idx: number) => {
                return (
                  <td key={idx} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export function CarTable({ data }: any) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Auto",
        accessor: "brand",
        Cell: (props: any) => {
          return (
            <CarListItemAvatar
              value={props.value}
              original={props.cell.row.original}
            />
          );
        },
      },

      {
        Header: "Chapa",
        accessor: "plate",
        Cell: (props: any) => <TableSimpleItem value={props.value} />,
      },

      {
        Header: "Precio",
        accessor: "price",
        Cell: (props: any) => <TableSimpleItem value={props.value} />,
      },
    ],
    []
  );

  return (
    <div className={styles.table}>
      <Table columns={columns} data={data} />
    </div>
  );
}
