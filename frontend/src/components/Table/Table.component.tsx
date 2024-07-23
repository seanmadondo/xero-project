import React from "react";
import { Cell, Row } from "../../types";
import "./Table.css";

export const Table = ({ rows }: { rows: Row[] }) => {
  const renderCells = (cells: Cell[]) => {
    return (
      <tr>
        {cells.map((cell, index) => (
          <td key={index}>{cell.Value}</td>
        ))}
      </tr>
    );
  };

  const renderRows = (rows: Row[]) => {
    return (
      <tbody>
        {rows.map((row, index) => (
          <React.Fragment key={index}>
            {row.Title === "Header" && renderCells(row.Cells || [])}
            {row.RowType === "Section" && (
              <>
                <tr>
                  <th colSpan={3}>{row.Title}</th>
                </tr>
                {row.Rows && renderRows(row.Rows)}
              </>
            )}
            {row.RowType === "Row" && renderCells(row.Cells || [])}
          </React.Fragment>
        ))}
      </tbody>
    );
  };

  return <table data-test-id="table">{renderRows(rows)}</table>;
};
