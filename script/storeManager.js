const key = "students";// DRY Don't repeat yourself
function save(student){//object
    let students = readUsers();
    students.push(student);
    let stringValue = JSON.stringify(students);//JSON
    localStorage.setItem(key,stringValue);//JSON
}
function readUsers(){
    let data = localStorage.getItem(key);
    if(!data) {//not data?
        return [];//create an array -- empty but it will be there
    }else{
        let studentList=JSON.parse(data);// change back to an object again
        //check if parsed data is an array
        if(Array.isArray(studentList))
        {
            return studentList;
        }
        else{

            [];//empty array
        }
       
        
    }

}

