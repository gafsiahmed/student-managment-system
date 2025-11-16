console.log('****** Code Seance 2 *******')



// traditional way of creating functions
function multiply (variable1 ,  variable2) {
    return variable1 * variable2
}


function power (a){
    return a*a
}

console.log(multiply(10,3),"old way multiply")
console.log(power(10),"old way power")
// After ES6 : Arrow Functions

let multi = (var1,var2) => var1*var2
// we can remove the parenth in case we have one varibale
let pow = a => a*a 

console.log(multi(10,3),"new way multiply")
console.log(pow(10),"new way power")



// High Order methods of Arrays : map() , filter(), reduce()

let studentsGrades = [
    12.3 , 10 , 13 , 16 ,1 ,14 ,12.78 ,10.5,2,7,19.75
]

console.log("Initial Students Grades")
console.log(studentsGrades)

// the teacher decided to add +1 bonus to everyone
let updatedStudentsGrades = studentsGrades.map((studentGrade)=>{
    return studentGrade+1
})

console.log(updatedStudentsGrades)


// The Admin Wants to get the list of students : grades < 10 

let controlStudentsGrades = updatedStudentsGrades.filter((grade)=> {
    return grade < 10
})

console.log("List of students who failded")
console.log(controlStudentsGrades)


// The Admin wants to calculate some stats 
// 1 - Avg students grades : Moyenne 


const avgStudentsGrade = updatedStudentsGrades.reduce((total ,grade)=>{
    return total +grade
},0) / updatedStudentsGrades.length


console.log("the Avg Grade is : ",avgStudentsGrade.toFixed(2))


// lets counts students passed and students faild count

let count = updatedStudentsGrades.reduce((acc,grade)=> {
    if(grade<10){
        acc.totalFailed +=1
        
    }
    else {
        acc.totalPassed +=1
    }
    return acc
},
{
  totalPassed : 0,
  totalFailed : 0  
})


console.log(
    `The number of passed Students : ${count.totalPassed} \nThe number of failed Students : ${count.totalFailed}
    `
)



const MAX_GRADE = updatedStudentsGrades.reduce((acc, grade)=>{
    return acc > grade ? acc : grade
},0)



const MIN_GRADE = updatedStudentsGrades.reduce((acc, grade)=>{
    return acc < grade ? acc : grade
},updatedStudentsGrades[0])


const MIN_MAX_GRADE =  updatedStudentsGrades.reduce((acc, grade)=>{
   if (acc.MAX < grade){
     acc.MAX = grade
   }
   else if (acc.MIN > grade) {
     acc.MIN = grade
   }
   return acc 
},{
    MAX : 0,
    MIN : Infinity
})


console.log(MIN_MAX_GRADE)

console.log(`The Max Grade : ${MIN_MAX_GRADE.MAX} \nTha Min Grade : ${MIN_MAX_GRADE.MIN} `)





let btnAdd = document.querySelector(".btn-add")
console.log(btnAdd)
let btnClose = document.querySelector('.btn-close')
let form = document.querySelector("form")


btnAdd.addEventListener('click',()=>{
    form.style.display = "flex"
})


btnClose.addEventListener('click',()=>{
    form.style.display = "none"
})

