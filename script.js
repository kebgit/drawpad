const canvasblock = document.querySelector(".canvasblock");
const sizeinput = document.querySelector("input");

function takeSizeInput(){
    userSizeInput = +(sizeinput.value);
}

function clearBlock(){
    canvasblock.innerHTML='';
}

sizeinput.addEventListener("keypress", function(e){
    if (e.key ==="Enter"){
        takeSizeInput();
        clearBlock();
        addGrid();

        var allPixels = document.getElementsByClassName("pixel")
        function colorPixel (){
            this.className = "colored pixel";
        }

        for (let i=0; i<allPixels.length;i++){
            allPixels[i].addEventListener("mouseover", colorPixel);
    }
}});

function addGrid(){
    for (let i=1 ; i<=userSizeInput ; i++){
        addRow();
    }
}

function addRow(){
    const row = document.createElement("div");
    row.className = "row";

    for (let i=1; i<=userSizeInput;i++){
        const pixel = document.createElement("div");
        
        pixel.className = "pixel";
        row.appendChild(pixel);
    }

    canvasblock.appendChild(row);
}

function clearDrawing(){
    //reset pixel background colors
}


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

