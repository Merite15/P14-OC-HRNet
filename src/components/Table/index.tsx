import { useCallback, useEffect, useMemo, useState } from 'react';
import { useGlobalFilter, useTable, usePagination, useSortBy } from 'react-table';
import { dateParser } from '@/utils/DateFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSelected, setIsDeleted } from '@/store/formStatus';
import { DeleteModal } from '../Modal/Delete';
import { Link } from 'react-router-dom';
import "./style.scss";


/**
 * A custom React component that renders a table of employees.
 *
 * @returns A React element representing the Table component.
 */
export const Table = () => {
  const [dataImport, setDataImport] = useState([]);
  const users = useSelector((state: any) => state.employees);
  const dispatch = useDispatch();
  const [employeeSelected, setEmployedSelected] = useState<string>('');

  useEffect(() => {
    setDataImport(users);
  }, [users]);

  const data = useMemo(() => dataImport, [dataImport]);

  const CustomCell = useCallback(
    ({ row }: { row: any }) => {
      const handleCellClick = (e: any) => {
        const employeeId = e.target.dataset.id;

        dispatch(setIsSelected(true));

        setEmployedSelected(employeeId);

        if (e.target.classList.contains("delete-icon")) {
          dispatch(setIsDeleted(true))
        }
      };

      return (
        <div className="custom-cell-icons">
          <Link title='Edit User' aria-label="View for editing user" to={`/employees/edit/${row.original.id}`}>
            <i className="fa-solid fa-pen-to-square edit-icon" data-id={row.original.id}></i>
          </Link>
          <i className="fa-solid fa-trash-can delete-icon" data-id={row.original.id} onClick={handleCellClick}></i>
        </div>
      );
    },
    []
  );

  const columns = useMemo(
    () => [
      { Header: 'First Name', accessor: 'first_name' },
      { Header: 'Last Name', accessor: 'last_name' },
      {
        Header: 'Date of Birth',
        accessor: 'dateOfBirth',
        Cell: ({ value }: { value: string }) => dateParser(value),
        disableFilters: true,
        sortType: (a: any, b: any) => {
          return (
            new Date(b.values.dateOfBirth).valueOf() - new Date(a.values.dateOfBirth).valueOf()
          );
        },
      },
      {
        Header: 'Start Date',
        accessor: 'startDate',
        Cell: ({ value }: { value: string }) => dateParser(value),
        disableFilters: true,
        sortType: (a: any, b: any) => {
          return new Date(b.values.startDate).valueOf() - new Date(a.values.startDate).valueOf();
        },
      },
      { Header: 'Street', accessor: 'address' },
      { Header: 'City', accessor: 'city' },
      { Header: 'State', accessor: 'state' },
      { Header: 'Zip Code', accessor: 'zipCode' },
      { Header: 'Department', accessor: 'department' },
      {
        id: 'selection',
        Header: 'Selection',
        Cell: CustomCell,
      },
    ],
    [CustomCell]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    setPageSize,
    prepareRow,
  } = useTable(
    { columns, data, enableMultiRowSelection: false },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <DeleteModal employeeSelected={employeeSelected} />

      <div className="list-container">
        <div className="list-header">
          <div className="filter-entries-container">
            <label htmlFor="state">Show:</label>
            <select
              id='state'
              aria-label="State"
              value={pageSize}
              onChange={(e: any) => setPageSize(e.target.value)}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span>entries</span>
          </div>
          <div className="search-container">
            <label>Search : </label>
            <input
              type="text"
              value={globalFilter || ''}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder="keywords"
            />
          </div>
        </div>

        <div className="table-container">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup, index) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                  {headerGroup.headers.map((column, index) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={index}
                    >
                      {column.render('Header')}
                      <span className="sort-icon">
                        {column.isSorted
                          ? column.isSortedDesc
                            ? '▼'
                            : '▲'
                          : '▼▲'}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            {page.length > 0 && (
              <tbody {...getTableBodyProps()}>
                {page.map((row: any, index: any) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} key={index}>
                      {row.cells.map((cell: any, index: any) => (
                        <td {...cell.getCellProps()} key={index}>
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
          {page.length === 0 && (
            <p className="no-match">No matching records found</p>
          )}
        </div>
        {page.length > 0 && (
          <div className="footer-list-container">
            <div className="footer-list-entries-container">
              Page {pageIndex + 1} of {pageOptions.length}
            </div>
            <div className="footer-list-pagination-container">
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                className="btn-pagination"
              >
                Previous
              </button>
              {pageOptions.map((p: any, index: any) => {
                if (
                  (pageIndex > p - 2 && pageIndex < p + 2) ||
                  (p < 3 && pageIndex < 2) ||
                  (pageOptions.length - 4 < p &&
                    pageOptions.length - 1 === pageIndex)
                ) {
                  return (
                    <button
                      key={index}
                      className={
                        pageIndex === p
                          ? 'btn-pagination active-page'
                          : 'btn-pagination'
                      }
                      onClick={() => gotoPage(p)}
                    >
                      {p + 1}
                    </button>
                  );
                } else return null;
              })}
              <button
                onClick={() => nextPage()}
                disabled={!canNextPage}
                className="btn-pagination"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};