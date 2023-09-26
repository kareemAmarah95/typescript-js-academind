// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //this is named tuple which stores different types with a fixed length
// } = {
//   name: "Kareem",
//   age: 28,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const person = {
  name: "Kareem",
  age: 28,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favActivities: string[];
favActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
