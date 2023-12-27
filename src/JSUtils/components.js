import Table from 'react-bootstrap/Table';

// headers - a string array of table header names
//           the index of the header must match its corresponding key's index in the keys array
// rows - an array containing js objects with the row data
// keys - a string array containing the keys to use for creating the table rows
//        the index of the key must match its corresponding header's index in the headers array
// size - a string to determine the size of the table: "sm" or null
export const generateTable = (headers, rows, keys, size) => {
    console.log(headers);
    console.log(rows);
    console.log(keys);

    // generate the header
    const tableHeader = (
        <thead>
            <tr>
                {headers.map((header) => (
                    <th key={header}>{header}</th>
                ))}
            </tr>
        </thead>
    );

    // generate the body
    const tableBody = (
        <tbody>
            {
                // make a row for each record passed in through data parameter
                rows.map((rowData, rowID) => {
                    return (
                        <tr key={rowID}>
                            {
                                // create a new cell for each key for the given data
                                keys.map((key, cellID) => {
                                    return <td key={cellID}>{rowData[key]}</td>;
                                })
                            }
                        </tr>
                    );
                })
            }
        </tbody>
    );

    return (
        <Table size={size}>
            {tableHeader}
            {tableBody}
        </Table>
    );
};
