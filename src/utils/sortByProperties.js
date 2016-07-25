/* eslint  no-restricted-syntax: 0 */
/* eslint no-nested-ternary: 0 */

export const sortByProperties = (obj, sortedBy = 1, isNumericSort = false, reverse = false) => {
  /**
   * sortedBy = sortedBy || 1; // by default first key
   * isNumericSort = isNumericSort || false; // by default text sort
   * reverse = reverse || false; // by default no reverse
   */

  const reversed = (reverse) ? -1 : 1;
  const sortable = [];
  let aSort;
  let bSort;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      sortable.push([key, obj[key]]);
    }
  }
  if (isNumericSort) {
    sortable.sort((a, b) => {
      aSort = a[1];
      bSort = b[1];
      sortedBy.split('.').map(key => {
        aSort = aSort[key];
        bSort = bSort[key];
        return true;
      });
      return reversed * (aSort - bSort);
    });
  } else {
    sortable.sort((a, b) => {
      aSort = a[1];
      bSort = b[1];
      sortedBy.split('.').map(key => {
        aSort = aSort[key];
        bSort = bSort[key];
        return true;
      });
      const x = aSort.toLowerCase();
      const y = bSort.toLowerCase();
      return x < y ? reversed * -1 : x > y ? reversed : 0;
    });
  }
  /**
   * sortable has view as [ [ key1, val1 ], [ key2, val2 ], ... ]
   */
  const result = [];
  sortable.map((value, index) => (
    result[index] = value[1]
  ));
  return result;
};
