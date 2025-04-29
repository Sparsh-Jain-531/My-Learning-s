"use strict";
const arr = [1, 2, 3];
const arr2 = [12, "sparsh"];
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["SUPER_ADMIN"] = "super_admin";
    UserRoles["USER"] = "user";
})(UserRoles || (UserRoles = {}));
function fun(a) {
    return a;
}
let value;
value = "sparsh";
value = 12;
// If we define two interface with same name then when we declare that interface to any variable then it shows all peoperties which present in both.(basically they merge properties when they have same name)
const obj2 = {
    name: "string",
    email: "string",
    password: "string"
};
function objj(obj) {
    return obj;
}
console.log(objj({ name: "sparsh", email: "sparsh@gmail.com", password: "12345" }));
let a;
