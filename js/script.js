const canvas = document.getElementById("barChart");
const ctx = canvas.getContext("2d");

const labels = ["Baloncesto","Beisbol","Futbol"];
const values = [300,200,400];
const colors = ["#E74C3C","#3498DB","#E67E22"];

const charWidth = canvas.width - 100;
const charHeight = canvas.height - 100;
const barWidth = 50;
const gap = (charWidth - labels,length * barWidth) / (labels.length + 1);
const maxValue = 500;
const numSteps = 5;
const stepValue = maxValue/numSteps;

function drawGrid(){
    
    ctx.strokeStyle = "#ccc"
    ctx.lineWigth = 1;

    for(let i = 0; i<= numSteps; i++){
        const y = canvas.height - 50 - (i * charHeight/numSteps);
        ctx.beginPath();
        ctx.moveTo(50,y);
        ctx.lineTo(canvas.width - 50, y);
        ctx.stroke();


        ctx.fillStyle = "#000";
        ctx.font = "12px Arial";
        ctx.fillText(stepValue * i,20, y+5);
    }


    ctx.beginPath();
    ctx.moveTo(50,50);
    ctx.lineTo(50, canvas.height - 50);
    ctx.moveTo(50,canvas.height - 50);
    ctx.lineTo(canvas.width - 50, canvas.height - 50);
    ctx.strokeStyle = "#000"
    ctx.stroke();
}

function drawBars(){
    for(let i=0; i<labels.length; i++){
        const x = 50 + gap * (i + 1) + barWidth * i;
        const barHeight = (values[i]/maxValue) * charHeight;
        const y = canvas.height - 50 - barHeight;

        ctx.fillStyle = colors[i];
        ctx.fillRect(x,y,barWidth,barHeight);

        ctx.fillStyle = "#000";
        ctx.font = "12px Arial";
        ctx.fillText(values[i],x + barWidth/4, y - 10);

        ctx.fillText(labels[i], x + barWidth/ 4, canvas.height - 30);

    }
}

function drawTitle(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText("Unidades vendidas en categorias deportivas", canvas.width/2 - 150, 20);

}

drawGrid();
drawBars();
drawTitle();