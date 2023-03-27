$(document).ready(function(){
    let categoryDesign = ['Work','Personal','Cleaning','Others'];

    let categories = document.querySelectorAll('.category');
    categories.forEach(function(category){
        let index = categoryDesign.indexOf(category.innerHTML.trim());
        if(index !== -1){
            category.classList.add(categoryDesign[index]);
            category.classList.add('commonClass');
        }
    });
});

// making cross line when item is checked
// function checkedOrNot(){ 
//     let deleteCheck = document.querySelectorAll('.deleteCheck');
//     let task = document.querySelectorAll('.task');
//     let date = document.querySelectorAll('.dueDate');
//     for(let i=0;i<task.length;i++){
//         let dueDate = date[i].innerHTML;
//         if(deleteCheck[i].checked){
//             document.getElementById(deleteCheck[i].getAttribute('uniqueID')).style.textDecoration = 'line-through';
//             document.getElementById(deleteCheck[i].getAttribute('uniqueID')+dueDate).style.textDecoration  = 'line-through';
//         } else {
//             document.getElementById(deleteCheck[i].getAttribute('uniqueID')).style.textDecoration = 'none';
//             document.getElementById(deleteCheck[i].getAttribute('uniqueID')+dueDate).style.textDecoration  = 'none';
//         }   
//     } 
// }

// document.getElementById('deleteButton').addEventListener('click',function(){
//     let checkedValues = document.querySelectorAll('.deleteCheck:checked');
//     let ids = Array.from(checkedValues).map(function(checkedValue){
//         return checkedValue.getAttribute('uniqueID');
//     });

//     if(ids.length === 0){
//         swal("No item is checked!!", "please select item to remove!", "error");
//         return;
//     }

//     fetch('/delete-todo/?id='+ids, {
//         method: 'POST'
//     }).then(function(){
//         swal("Item is deleted ", "click ok to go back Home ", "success")
//         .then(function(){
//             window.location = '/';
//         });           
//     }).catch(function(err){ 
//         console.log(err);
//     });
// });
