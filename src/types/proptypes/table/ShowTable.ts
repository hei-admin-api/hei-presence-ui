import { GridColDef, DataGridProps } from '@mui/x-data-grid';
import {student} from "../../models/Student";
export type ShowTablePropTypes = {
  // data: Array<DrinkWithId | CocktailWithId>
  columns: GridColDef[];
  ressource: student[];
  dataGridPropTypes?: Partial<DataGridProps>;
}