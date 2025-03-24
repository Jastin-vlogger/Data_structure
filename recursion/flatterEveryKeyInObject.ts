// Question
// Asked in Fractal
// Level ->> Medium

// Write a function flattenObject that takes a nested object and converts it
// into a flat object,where keys represent the path to each value in the original object.
// The function should handle nested objects, arrays, and primitive types and null.

// //Input
// const user = {
//   name: "Vishal",
//   age: null,
//   address: {
//     primary: {
//       house: "109",
//       street: {
//         main: "21",
//         cross: null,
//       },
//     },
//     secondary: null,
//   },
//   phones: [
//     { type: "home", number: "1234567890" },
//     { type: "work", number: null },
//   ],
//   preferences: null,
// };

// //output
// {
//   user_name: "Vishal",
//   user_age: null,
//   user_address_primary_house: "109",
//   user_address_primary_street_main: "21",
//   user_address_primary_street_cross: null,
//   user_address_secondary: null,
//   user_phones_0_type: "home",
//   user_phones_0_number: "1234567890",
//   user_phones_1_type: "work",
//   user_phones_1_number: null,
//   user_preferences: null
// }

// const flattenObject = (obj, prefix = "", result = {}) => { 
// 	//code here
// }

