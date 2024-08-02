import { RowID, RowElement } from "./interface";

declare function createRow(data: RowElement): RowID;
declare function readRow(id: RowID): RowElement;
declare function updateRow(id: RowID, data: RowElement): void;
declare function deleteRow(id: RowID): void;
declare function listRows(): RowID[];

export { createRow, readRow, updateRow, deleteRow, listRows };
