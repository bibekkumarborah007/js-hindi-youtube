//18.objects_de_structure_and_JSON_API.js

//de structuing of objects (also happens with array too)

const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

//normal way to access . or []
course.courseInstructor

//anotherway to use for large no. of access
const {courseInstructor: instructor} = course //:abcd is what we called de structure of object
// console.log(courseInstructor);
console.log(instructor); //hitesh


//eg of react strucure of {company} as destructure
// //generally used in React
// const navbar = ({company}) => {

// }
// navbar(company = "hitesh")


//------------------------APIs--------------------------
//when we want to delegate our work upon others


//API sends data through JSON : without object name
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free",
// }

[
    {},
    {},
    {},
]


//json randomuserme api :https://randomuser.me/
//json formatter since we neeed to read to understand :https://jsonformatter.org/