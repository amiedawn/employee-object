let emp = {
  empId: " ",
  empName: " ",
  baseSal: " ",
  baseHrs: " ",
  extraHrs: " ",
};

let consultant = {
  empId: "30",
  empName: "Sheila Harrington",
  baseSal: 4000,
  __proto__: emp,
  extraHrs: 10,
};

let mgr = {
  empId: "32",
  empName: "Mark LaRue",
  baseSal: 6000,
  __proto__: emp,
  extraHrs: 15,
};

let srMgr = {
  empId: "18",
  empName: "Fran Green",
  baseSal: 8000,
  __proto__: emp,
  extraHrs: 12,
};

function calcSal(emp) {
  let totSal = emp.baseSal + emp.extraHrs * 50;
  console.log(totSal);
  return totSal;
};

let consultantSal = calcSal(consultant);
let mgrSal = calcSal(mgr);
let srMgrSal = calcSal(srMgr);

console.log(consultant.empName + " has made $" + consultantSal + " and has worked " + consultant.extraHrs + " extra hours.");
console.log(mgr.empName + " has made $" + mgrSal + " and has worked " + mgr.extraHrs + " extra hours.");
console.log(srMgr.empName + " has made $" + srMgrSal + " and has worked " + srMgr.extraHrs + " extra hours.");




