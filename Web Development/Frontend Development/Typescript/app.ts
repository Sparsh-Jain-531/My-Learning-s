function abcd(arg: string | number | any) {
  if (typeof arg === "number") {
    return "number";
  } else if (typeof arg === "string") {
    return "string";
  } else {
    throw new Error("pagal how gaya hai kya fraaaaaands");
  }
}
console.log(abcd(12));
console.log(abcd("hello"));
abcd(true);
