export function cols(colNumber) {
  var col1 = [1, 11, 21, 31, 41, 51, 61, 71];
  var col2 = [2, 12, 22, 32, 42, 52, 62, 72];
  var col3 = [3, 13, 23, 33, 43, 53, 63, 73];
  var col4 = [4, 14, 24, 34, 44, 54, 64, 74];
  var col5 = [5, 15, 25, 35, 45, 55, 65, 75];
  var col6 = [6, 16, 26, 36, 46, 56, 66, 76];
  var col7 = [7, 17, 27, 37, 47, 57, 67, 77];
  var col8 = [8, 18, 28, 38, 48, 58, 68, 78];
  var col9 = [9, 19, 29, 39, 49, 59, 69, 79];
  var col10 = [10, 20, 30, 40, 50, 60, 70, 80];

  if (colNumber === 1) return col1;
  else if (colNumber === 2) return col2;
  else if (colNumber === 3) return col3;
  else if (colNumber === 4) return col4;
  else if (colNumber === 5) return col5;
  else if (colNumber === 6) return col6;
  else if (colNumber === 7) return col7;
  else if (colNumber === 8) return col8;
  else if (colNumber === 9) return col9;
  else if (colNumber === 10) return col10;
}
export function gameTypeValues(game) {
  var games = { Spin: "89b14e80-c402-11ec-a9d1-65b049643e90" };
  return games[game];
}
