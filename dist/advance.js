"use strict";
var _a;
const e1 = {
    name: 'E1',
    privileges: ['admin'],
    startDate: new Date(),
};
function printUnknownEmployee(employee) {
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
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = '';
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'Default';
console.log(storedData);
