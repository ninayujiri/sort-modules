var unsortedList = [];

function addNumber(x) {
  unsortedList.push(x);
};

function sortList() {
  unsortedList.sort(function(a, b) {return a - b});
};

function returnList() {
  sortList();
  return unsortedList;
};

module.exports = {
  addNumber: addNumber,
  returnList: returnList
}
