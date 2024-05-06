type TableProps = {
  tableHeadingList: string[];
  children: React.ReactNode;
};

export const Table = ({ tableHeadingList, children }: TableProps) => {
  return (
    <table
      className={`min-w-full divide-y divide-gray-300  ring-1 ring-slate-500 sm:rounded-md `}
    >
      <thead>
        <tr>
          {tableHeadingList.map((heading) => (
            <th
              key={heading}
              scope="col"
              className="table-column-header-default"
            >
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="div ">{children}</tbody>
    </table>
  );
};
