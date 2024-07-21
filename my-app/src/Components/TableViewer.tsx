import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
function TableViewer():JSX.Element {
 return (
 <Grid
 rows={[
 { id: 0, name: 'Avraham', city: 'Aram Naharaim' },
 { id: 1, name: 'Itzhak', city: 'Desert' },
 { id: 2, name: 'Yaakov', city: 'Tent' },
 { id: 3, name: 'Esav', city: 'Field' },
 { id: 4, name: 'Moshe', city: 'Cairo' },
 ]}
 columns={[
 { name: 'id', title: 'ID' },
 { name: 'name', title: 'Name' },
 { name: 'city', title: 'City' },
 ]}>
 <Table />
 <TableHeaderRow />
 </Grid>
 );
}
export default TableViewer;