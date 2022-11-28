import "./table.css";

const Table = ({ data, column }) => {
  return (
    <table>
      <thead>
        <tr>
          {column.map((item, index) => (
            <TableHeadItem key={index} item={item} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow key={index} item={item} column={column} />
        ))}
      </tbody>
    </table>
  );
};

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
const TableRow = ({ item, column }) => (
  <tr>
    {column.map((columnItem, index) => {
      if (columnItem.value.includes(".")) {
        const itemSplit = columnItem.value.split(".");
        const tableItem = itemSplit.reduce((prev, next, index) => {
          if (index === 0) {
            prev = item[next];
          } else {
            prev = prev[next];
          }
          return prev;
        }, "");

        return <td key={index}>{tableItem}</td>;
      }

      return <td key={index}>{item[`${columnItem.value}`]}</td>;
    })}
  </tr>
);

export default Table;
