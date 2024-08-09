const canvasblock = document.querySelector(".canvasblock");
const sizeinput = document.querySelector("input");

function takeSizeInput(){
    userSizeInput = +(sizeinput.value);
    alert(userSizeInput);
}

sizeinput.addEventListener("keypress", function(e){
    if (e.key ==="Enter"){
        takeSizeInput();
    }
})





// Take user input as number
// clear current canvas



// take side length as n
// (create n divs
// add to a row
// add row to canvasblock)
// repeat n times 

// [for i up to n: create one row div, create i to n divs and append to row,
// then append row to canvasblock]
// add n divs
// add n divs to each div

