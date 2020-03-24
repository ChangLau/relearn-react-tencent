import React from "react";

const Columns = () => {
  return (
    <>
      <td>Hello</td>
      <td>World</td>
    </>
  );
};

const Table = () => {
  return (
    <table>
      <tbody>
        <tr>
          <Columns></Columns>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
