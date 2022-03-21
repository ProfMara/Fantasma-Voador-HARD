var torreImg, torre;
var portaImg, porta, grupoPorta;
var gradeImg, grade, grupoGrade;
var player, player_parado, player_pulando;
var grupoBlocoInvisivel, blocoInvisivel;
var estadoJogo = "jogar";
var somAssustador;
var playerparado;

function preload() {
    //carregar as imagens da torre, da grade e da porta
    torreImg = loadImage("torre.png");


    //carregando as animações do fantasma
    player_parado = loadAnimation("fantasma parado.png");
    player_pulando = loadAnimation("fantasma pulando.png");

    //carregar som



    //criar os grupos das grades e das portas
    grupoBlocoInvisivel = new Group();



}

function setup() {
    createCanvas(600, 600);
    //criando a torre
    torre = createSprite(300, 300);
    torre.addImage("torre", torreImg);
    torre.velocityY = 1;

    //tocar o som em loop

    //criando o player
    player = createSprite(200, 200, 50, 50);
    player.addAnimation("player parado", player_parado);
    player.addAnimation("player pulando", player_pulando)
    player.scale = 0.3;

    edges = createEdgeSprites();
}

function draw() {
    background(200);

    if (estadoJogo === "jogar") {
        player.changeAnimation("player parado");

        //código para controlar o jogador para cima
        if (keyDown("space")) {
            player.velocityY = -10;
            player.changeAnimation("player pulando");
        }

        //código para controlar o jogador para Esquerda
        if (keyDown("space")) {
            player.x -= 3;
            player.changeAnimation("player pulando");
        }

        //código para controlar o jogador para direita


        //gravidade
        player.velocityY += 0.8;

        //Código para reiniciar a torre


        //código para descansar na torre


        gerarPortas();
        drawSprites();

        //código para finalizar o jogo
        if (player.isTouching(grupoBlocoInvisivel) || player.y > height) {
            estadoJogo = "fim";
        }
    }
    if (estadoJogo === "fim") {
        background(0)
        fill("yellow")
        textSize(70)
        text("VOCÊ PERDEU", 30, 200);
    }

}


function gerarPortas() {

    if (frameCount % 240 === 0) {

        porta = createSprite(200, -50);
        porta.x = Math.round(random(120, 400))

        grade = createSprite(porta.x, 10);

        blocoInvisivel = createSprite(porta.x, 15, grade.width, 2);

        //fazer o bloco invisivel ser invisivel


        //código para adicionar as imagens nas sprites


        //velocidade das sprites
        blocoInvisivel.velocityY = 1;


        //tempo de vida das sprites
        blocoInvisivel.lifetime = 800;


        //adicionar nos grupos as sprites
        grupoBlocoInvisivel.add(blocoInvisivel);



    }


}