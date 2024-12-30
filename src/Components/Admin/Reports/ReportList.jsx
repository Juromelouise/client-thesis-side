import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableCell, TableRow, Card, Button } from '@nextui-org/react';

const reports = [
  { id: 1, title: 'Report 1', author: 'Author 1', date: '2023-01-01' },
  { id: 2, title: 'Report 2', author: 'Author 2', date: '2023-02-01' },
  { id: 3, title: 'Report 3', author: 'Author 3', date: '2023-03-01' },
  // Add more reports as needed
];

const ReportList = () => {
  return (
    <div className="mt-14 p-6">
      <Card className="shadow-lg">
        <h3 className="text-2xl font-semibold mb-5 text-center">Reports</h3>
        <Table aria-label="Example table with dynamic content" className="w-full">
          <TableHeader>
            <TableColumn className="text-center w-1/12">ID</TableColumn>
            <TableColumn className="text-center w-3/12">Title</TableColumn>
            <TableColumn className="text-center w-3/12">Author</TableColumn>
            <TableColumn className="text-center w-2/12">Date</TableColumn>
            <TableColumn className="text-center w-3/12">Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.id}>
                <TableCell className="text-center">{report.id}</TableCell>
                <TableCell className="text-center">{report.title}</TableCell>
                <TableCell className="text-center">{report.author}</TableCell>
                <TableCell className="text-center">{report.date}</TableCell>
                <TableCell className="text-center">
                  <Button auto flat color="primary" className="mr-2">View</Button>
                  <Button auto flat color="error">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default ReportList;