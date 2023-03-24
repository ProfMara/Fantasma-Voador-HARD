var torreImg, torre;
var portaImg, porta, grupoPorta;
var gradeImg, grade, grupoGrade;
var player, player_parado, player_pulando;
var grupoBlocoInvisivel, blocoInvisivel;
var estadoJogo = "jogar";
var somAssustador;
var playerparado;

function preload() {
    



}

function setup() {
    createCanvas(600, 600);
 
}

function draw() {
    background(200);

    if (estadoJogo === "jogar") {
     
    }
    if (estadoJogo === "fim") {
        background(0)
        fill("yellow")
        textSize(70)
        text("VOCÊ PERDEU", 30, 200);
    }

}

