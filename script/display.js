tbody.innerHTML= table;
//}*/

function readStudent(){
const student = document.getElementById("students");
let tr ="";
for(let i=0;i<=student.length;i++){
    let student= student[i];

tr+=`
<td>${student.studentEmail}</td>
<td>${student.studentPassword}</td>
<td>${student.studentFirstName}</td>
<td>${student.studentLastname}</td>
<td>${student.studentAge}</td>
<td>${student.studentGarde101}</td>
<td>${student.studentGrade102}</td>
<td>${student.studentGrade103}</td>

</tr>
`;
}
student.innerHTML = tr;
//getTotal();
}
function init(){//
    let students = readStudent();//getting from the Store manager
    console.log(students);
  //displayUsers(students);// call back the displayUsers function
 }

window.onload = init();

/*unction getTotal(){
    const TOTAL= document.getElementById("total");
    TOTAL.innerHTML=students.length;
    }*/

