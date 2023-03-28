// Creating common class for list of category section to design it

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
