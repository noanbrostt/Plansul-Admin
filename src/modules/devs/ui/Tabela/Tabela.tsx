import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  ColumnDef,
  flexRender,
  SortingState,
  ColumnFiltersState,
  ColumnOrderState,
  VisibilityState,
  FilterFn,
} from "@tanstack/react-table";
import { useState, useEffect, useRef } from "react";
import {
  FiSearch,
  FiEye,
  FiArrowUp,
  FiArrowDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
  FiDownload, // Novo ícone para exportação
} from "react-icons/fi";
import { rankItem } from "@tanstack/match-sorter-utils";
import { Workbook } from "exceljs";
import { saveAs } from "file-saver";

interface TabelaProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  pagination?: boolean;
  globalFilter?: boolean;
  columnFilters?: boolean;
  columnVisibility?: boolean;
  columnOrdering?: boolean;
  className?: string;
  zebra?: boolean;
  initialSorting?: SortingState;
  storageKey?: string;
  initialHiddenColumns?: string[];
  enableExport?: boolean; // Nova prop para habilitar exportação
  exportFileName?: string; // Nome do arquivo de exportação
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({ itemRank });
  return itemRank.passed;
};

export default function Tabela<T>({
  data,
  columns,
  pagination = true,
  globalFilter: enableGlobalFilter = true,
  columnFilters: enableColumnFilters = false,
  columnVisibility: enableColumnVisibility = false,
  columnOrdering: enableColumnOrdering = false,
  className = "",
  zebra = true,
  initialSorting = [],
  storageKey,
  initialHiddenColumns = [],
  enableExport = true, // Default true
  exportFileName = "Tabela", // Nome padrão do arquivo
}: TabelaProps<T>) {
  const [sorting, setSorting] = useState<SortingState>(initialSorting);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(
    columns.map((col) => (col as any).accessorKey || col.id!)
  );

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
    () => {
      if (storageKey && typeof window !== "undefined") {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          return JSON.parse(saved);
        }
      }

      const initialVisibility: VisibilityState = {};
      initialHiddenColumns.forEach((columnId) => {
        initialVisibility[columnId] = false;
      });
      return initialVisibility;
    }
  );

  // Referência para o botão de exportação
  const exportButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (storageKey && typeof window !== "undefined") {
      localStorage.setItem(storageKey, JSON.stringify(columnVisibility));
    }
  }, [columnVisibility, storageKey]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
      columnVisibility,
      columnOrder,
    },
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: pagination ? getPaginationRowModel() : undefined,
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: fuzzyFilter,
    enableSortingRemoval: false,
  });

  useEffect(() => {
    if (initialSorting.length > 0) {
      table.setSorting(initialSorting);
    }
  }, [initialSorting]);

  // Função para exportar para Excel
  const exportToExcel = async () => {
    if (!exportButtonRef.current) return;

    try {
      // Ativar estado de carregamento
      exportButtonRef.current.classList.add("loading");

      const workbook = new Workbook();
      const worksheet = workbook.addWorksheet("Dados");

      // Obter colunas visíveis
      // const visibleColumns = table.getAllLeafColumns()
      //   .filter(column => column.getIsVisible());
      const allColumns = table.getAllLeafColumns();

      // Preparar cabeçalhos
      const headers = allColumns.map((column) =>
        typeof column.columnDef.header === "string"
          ? column.columnDef.header
          : column.id
      );

      // Adicionar cabeçalhos à planilha
      worksheet.addRow(headers);

      // Preparar dados
      const data = table.getFilteredRowModel().rows.map((row) => {
        const rowData: any = {};
        allColumns.forEach((column) => {
          rowData[column.id] = row.getValue(column.id);
        });
        return rowData;
      });

      // Adicionar dados à planilha
      data.forEach((row) => {
        const rowData = allColumns.map((col) => row[col.id]);
        worksheet.addRow(rowData);
      });

      // Formatar cabeçalhos
      worksheet.getRow(1).eachCell((cell) => {
        cell.font = { bold: true };
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FFD9D9D9" },
        };
      });

      // Auto ajustar colunas
      worksheet.columns.forEach((column) => {
        if (!column.values) return;
        const maxLength = Math.max(
          ...column.values
            .filter((v) => v != null)
            .map((v) => v.toString().length),
          column.header ? column.header.toString().length : 0
        );
        column.width = Math.min(Math.max(maxLength + 2, 10), 50);
      });

      // Gerar buffer e salvar
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      saveAs(blob, `${exportFileName}.xlsx`);
    } catch (error) {
      console.error("Erro ao exportar para Excel:", error);
    } finally {
      // Desativar estado de carregamento
      if (exportButtonRef.current) {
        exportButtonRef.current.classList.remove("loading");
      }
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {/* Filtros e Controles */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <span className="space-x-4">
          {enableColumnVisibility && (
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-outline"
              >
                <FiEye className="mr-1" /> Colunas
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {table.getAllLeafColumns().map((column) => (
                  <li key={column.id}>
                    <label className="label cursor-pointer">
                      <span>{String(column.columnDef.header)}</span>
                      <input
                        type="checkbox"
                        checked={column.getIsVisible()}
                        onChange={column.getToggleVisibilityHandler()}
                        className="checkbox checkbox-primary"
                      />
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Botão de Exportação */}
          {enableExport && (
            <button
              ref={exportButtonRef}
              className="btn btn-ghost btn-outline"
              onClick={exportToExcel}
            >
              <FiDownload className="mr-1" /> Exportar Excel
            </button>
          )}
        </span>
        {enableGlobalFilter && (
          <div className="join">
            <input
              type="search"
              placeholder="Busca global..."
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="input input-bordered join-item"
            />
            <button className="btn join-item">
              <FiSearch />
            </button>
          </div>
        )}
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className={`table ${zebra ? "table-zebra" : ""}`}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="relative">
                    <div
                      className={
                        header.column.getCanSort()
                          ? "cursor-pointer select-none flex items-center"
                          : ""
                      }
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <FiArrowUp className="ml-1" />,
                        desc: <FiArrowDown className="ml-1" />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>

                    {enableColumnFilters && header.column.getCanFilter() && (
                      <div className="mt-2">
                        <input
                          type="text"
                          placeholder={`Filtrar...`}
                          value={
                            (header.column.getFilterValue() as string) ?? ""
                          }
                          onChange={(e) =>
                            header.column.setFilterValue(e.target.value)
                          }
                          className="input input-xs input-bordered w-full"
                        />
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginação */}
      {pagination && (
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="join">
            <button
              className="join-item btn"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <FiChevronsLeft className="text-lg" />
            </button>
            <button
              className="join-item btn"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <FiChevronLeft className="text-lg" />
            </button>
            <button className="join-item btn pointer-events-none">
              Página {table.getState().pagination.pageIndex + 1} de{" "}
              {table.getPageCount()}
            </button>
            <button
              className="join-item btn"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <FiChevronRight className="text-lg" />
            </button>
            <button
              className="join-item btn"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <FiChevronsRight className="text-lg" />
            </button>
          </div>

          <select
            className="select select-bordered"
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Exibir {pageSize} itens
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
