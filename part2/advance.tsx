type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin{}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'E1',
  privileges: ['admin'],
  startDate: new Date(),
};

type unknownEmployee = Employee | Admin;

function printUnknownEmployee(employee: unknownEmployee) {
  console.log(employee.name);
  if ('privileges' in employee) {
    console.log(employee.privileges);
  }
}

printUnknownEmployee({ name: 'eric', privileges: ['data'] });

const fetchUserData = {
  id: 'u1',
  name: 'John Smith',
  job: { title: 'CEO', description: 'My owen Company' },
};

console.log(fetchUserData?.job?.title);

const userInput = '';

const storedData = userInput ?? 'Default';

console.log(storedData);
