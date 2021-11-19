let emp = {
  empId: "",
  empName: "",
  baseSal: "",
  baseHrs: "",
  extraHrs: "",
};

let consultant = {
  baseSal: 4000,
  __proto__: emp,
  extraHrs: 10,
};

let mgr = {
  baseSal: 6000,
  __proto__: emp,
  extraHrs: 15,
};

let srMgr = {
  baseSal: 8000,
  __proto__: emp,
  extraHrs: 12,
};

function calcSal(emp) {
  let totSal = emp.baseSal + emp.extraHrs * 50;
  console.log(totSal);
}

calcSal(consultant);
calcSal(mgr);
calcSal(srMgr);
