const arr: number[] = [1, 2, 3];
const arr2: [number, string] = [12, "sparsh"];
enum UserRoles {
  ADMIN = "admin",
  SUPER_ADMIN = "super_admin",
  USER = "user",
}

function fun(a: number): number {
  return a;
}

let value: string | number;
value="sparsh";
value=12;

interface User{
    name: string,
    email: string,
    password: string,
    gender?: string  // optional
}

// interface extends another interface
interface Admin extends User{
    admin: string
}

// If we define two interface with same name then when we declare that interface to any variable then it shows all peoperties which present in both.(basically they merge properties when they have same name)

const obj2 : User = {
    name: "string",
    email: "string",
    password: "string"
}

function objj(obj: User) : User{
    return obj;
}

console.log(objj({name: "sparsh", email:"sparsh@gmail.com", password: "12345"}))

type value = string | number | boolean;
let a :value;

type User1={
    name: string,
    email: string
}

type Admin1 = User1 & {
    getDetails(user: string): void
}

