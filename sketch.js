let pencilButton, eraserButton, squareButton, scissorsButton;
let isPencilSelected = false;
let isEraserSelected = false;
let isSquareSelected = false;
let isScissorsSelected = false;
let x, y;
let px, py;
function setup() {
    createCanvas(500,500)
    strokeWeight(10)

  

    // Selecione os elementos do menu usando p5.js
    pencilButton = select('#pencil');
    eraserButton = select('#eraser');
    squareButton = select('#quadrado');
    scissorsButton = select('#scissors');

    // Adicione um ouvinte de clique aos botões do menu
    pencilButton.mousePressed(selectPencil);
    eraserButton.mousePressed(selectEraser);
    squareButton.mousePressed(selectSquare);
    scissorsButton.mousePressed(selectScissors);
}

function draw() {
    if (isPencilSelected) {
        if(mouseIsPressed) {
            x = mouseX;
            y = mouseY;

            // Calcula a velocidade com base na diferença entre a posição atual e a posição anterior do mouse
            velocidade = dist(x, y, px, py);

            // Mapeia a velocidade para a espessura desejada da linha
            let espessura = map(velocidade, 0, 20, 5, 2);

            stroke(0);
            strokeWeight(espessura);

            // Se px e py não são undefined, desenhe a linha
            if (px !== undefined && py !== undefined) {
                line(px, py, x, y);
            }

            // Atualiza px e py para a posição atual do mouse
            px = x;
            py = y;
        } else {
            // Quando o mouse não está pressionado, definimos px e py como undefined
            px = undefined;
            py = undefined;
        }
    }
        
     else if (isEraserSelected) {
        background(255)
        console.log("Eraser tool is selected!");
    } else if (isSquareSelected) {
        // Lógica para quando o quadrado estiver selecionado
        console.log("Square tool is selected!");
    } else if (isScissorsSelected) {
        // Lógica para quando a tesoura estiver selecionada
        console.log("Scissors tool is selected!");
    }
    
}

function selectPencil() {
    isPencilSelected = true;
    isEraserSelected = false;
    isSquareSelected = false;
    isScissorsSelected = false;
    console.log("Pencil selected!");
    // Adicione sua lógica para configurar o pincel aqui
}

function selectEraser() {
    isPencilSelected = false;
    isEraserSelected = true;
    isSquareSelected = false;
    isScissorsSelected = false;
    console.log("Eraser selected!");
    // Adicione sua lógica para configurar a borracha aqui
}

function selectSquare() {
    isPencilSelected = false;
    isEraserSelected = false;
    isSquareSelected = true;
    isScissorsSelected = false;
    console.log("Square selected!");
    // Adicione sua lógica para configurar o quadrado aqui
}

function selectScissors() {
    isPencilSelected = false;
    isEraserSelected = false;
    isSquareSelected = false;
    isScissorsSelected = true;
    console.log("Scissors selected!");
    // Adicione sua lógica para configurar a tesoura aqui
}


function mouseMoved() {
    // Atualiza a posição do mouse
    x = mouseX;
    y = mouseY;
  }
  
// let x;

// function setup() {
//     createCanvas(500, 500);
//     strokeWeight(10)
//     stroke(0)
// }
  
// function draw() {
    
//     if(mouseIsPressed) { 
//         point(mouseX, mouseY)
//     }

 
// }
