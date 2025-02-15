function salary(employees) {
  let totalSalary = 0;

  for (const emp of employees) {
    let startSalary = emp.starting;
    let increment = emp.increment;
    let experience = emp.experience;
    let monthlySalary = experience * increment + startSalary;

    totalSalary += monthlySalary;
  }

  return totalSalary;
}

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

console.log(salary(employees));
