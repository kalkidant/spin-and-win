import React from "react";

const PlayTable = () => {
  const col1 =
    "border border-amber-200 text-xxs text-white font-semibold uppercase px-1";
  const col2 =
    "border border-amber-200 text-xs text-white font-semibold text-center px-2";

  return (
    <div className="flex flex-col self-center">
      <p className="uppercase text-xxs p-2 px-0 font-semibold text-amber-100">
        ---------------- Pay Table ----------------
      </p>
      <div className="bg-zinc-600 grid">
        <table className="table-auto border-collapse border border-amber-200 m-1">
          <tbody>
            <tr>
              <td className={`${col1}`}>Number</td>
              <td className={`${col2}`}>x36</td>
            </tr>
            <tr>
              <td rowSpan={3} className={`${col1}`}>
                Colors
              </td>
              <td className={`${col2} bg-red-500`}>x2</td>
            </tr>
            <tr>
              <td className={`${col2} bg-black`}>x2</td>
            </tr>
            <tr>
              <td className={`${col2} bg-green-500`}>x36</td>
            </tr>
            <tr>
              <td className={`${col1}`}>Dozens</td>
              <td className={`${col2}`}>x3</td>
            </tr>
            <tr>
              <td className={`${col1}`}>Even/Odd</td>
              <td className={`${col2}`}>x2</td>
            </tr>
            <tr>
              <td className={`${col1}`}>Low/High</td>
              <td className={`${col2}`}>x2</td>
            </tr>
            {/* <tr>
              <td className={`${col1}`}>Low/High & Color</td>
              <td className={`${col2}`}>x4</td>
            </tr>
            <tr>
              <td className={`${col1}`}>Final</td>
              <td className={`${col2}`}>x9</td>
            </tr>
            <tr>
              <td className={`${col1}`}>Mirror</td>
              <td className={`${col2}`}>x18</td>
            </tr>
            <tr>
              <td className={`${col1}`}>Sectors</td>
              <td className={`${col2}`}>x6</td>
            </tr>
            <tr>
              <td className={`${col1}`}>Twins</td>
              <td className={`${col2}`}>x12</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayTable;
