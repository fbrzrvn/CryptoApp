import { CryptoTableData } from 'models/Crypto';
import React from 'react';
import { Table, TableCell, TableHeader, TableRow } from './styles';

interface CryptoTableProps {
  tableData: CryptoTableData[];
}

const CryptoTable: React.VFC<CryptoTableProps> = ({ tableData }) => {
  return (
    <Table>
      <thead>
        <TableRow>
          {tableData.map((data, i) => (
            <TableHeader key={i}>{data.title}</TableHeader>
          ))}
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          {tableData.map((data, i) => (
            <TableCell key={i}>{data.value}</TableCell>
          ))}
        </TableRow>
      </tbody>
    </Table>
  );
};

export default CryptoTable;
