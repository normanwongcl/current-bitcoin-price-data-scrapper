export const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <table
      className={`min-w-full divide-y divide-gray-300  ring-1 ring-slate-500 sm:rounded-md `}
    >
      <thead>
        <tr>
          <th scope="col" className="table-column-header-default pr-7">
            Last Updated
          </th>
          <th scope="col" className="table-column-header-default">
            Rate (USD)
          </th>
        </tr>
      </thead>
      <tbody className="div ">{children}</tbody>
    </table>
  );
};
