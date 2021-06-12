var gameState=0;
var egg;
var score = 0;
var life = 3;
function preload(){
}

function setup() {
	createCanvas( 1365,600);
    eggGroup = new Group();
	ground=createSprite(1380/2+50,595,1499,20)
    catcher=createSprite(200,574,70,15)
    // lifetime1=createSprite(36,45,20,20)
    // lifetime2=createSprite(60,45,20,20)
    // lifetime3=createSprite(86,45,20,20)
}


function draw() {
background(225,255,255)
textSize(35)
fill("red")
text("Score  " + score, width-300, 50)

textSize(35)
fill("black")
text("life:  " + life, 36, 50)

// if(gameState===0){
//     fill("yellow")
//     text("Press Space to start",displayWidth/2-100,displayHeight/2-100 )
   
// }
// if(keyDown("space")){
//     gameState=1;
//     }
    // if(gameState===1 ){

        spawnEgg();
        if(catcher.x>0 || catcher.x<1345){
            if(keyDown("Left")){
                catcher.x=catcher.x-30
                }
                if(keyDown("Right")){
                catcher.x=catcher.x+30
                 }
        }
        
         for(var i = 0 ; i<eggGroup.length; i ++){
            if(eggGroup.get(i).isTouching(catcher)){
              eggGroup.get(i).destroy();
              score=score+Math.round(random(70,120))
            }
            if(eggGroup.get(i).isTouching(ground)){
                eggGroup.get(i).collide(ground)
                            life=life-1
            }
    //         if(life===0){
    //             gameState=2;
    //             }
    //          }
    // }
//              if(gameState===2){
//    textSize(40)
//     text("try again by pressing on reset",displayWidth/2-100,displayHeight/2 )
//     ret=createSprite(200,400,40,40)
//     // if(mousePressedOver(reset)){
//     //     gameState=0;
//     // }}
             
 //console.log(mouseY)

        }
drawSprites();
}

function spawnEgg(){
    if(frameCount%60===0){
        egg=createSprite(0,0,20,20)
        egg.x=Math.round(random(20,1350))
        egg.velocityY=7
        egg.lifetime=700
      eggGroup.add(egg)
    }
   
}

    

