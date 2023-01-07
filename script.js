/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
}

function PrintDeveloperbyForEach() {
  //Write your code here
}

function addData() {
  //Write your code here
  var arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  arr.push({id: 4, name: "susan", age: "20", profession: "intern"});
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  var arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  var popped= arr.pop( { id: 3, name: "karen", age: "19", profession: "admin" });
  console.log(arr);
}

function concatenateArray() {
  //Write your code here
  var p1=["1","john","18", "developer"];
  var p2=["2","jack","20","developer"];
  var p3=["3","karen","19","admin"];
  console.log(p1.concat(p2,p3));
}
