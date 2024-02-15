var archerAni,
  florestaimg,
  boardimg,
  arrowimg,
  archerimg,
  money_coinimg,
  mccimg,
  money_makerAni,
  money_makerimg,
  enemyAni,
  enemy1Ani,
  enemy2Ani,
  enemy3Ani,
  enemy4Ani,
  enemy4pAni,
  archer1Ani,
  archer1img,
  archer0Ani,
  archer0img,
  arrow1img,
  bombimg,
  archer2Ani,
  archer2img,
  fumesimg,
  level_upimg,
  archer001Ani,
  archer001img,
  archer002Ani,
  archer002img
var archer,
  floresta,
  arrow,
  money_coin,
  mcc,
  invsprite1,
  invsprite2,
  invsprite3,
  invsprite4,
  money_maker,
  money_coinm,
  enemy1,
  archer1,
  enemy2,
  archer0,
  arrow1,
  bomb,
  archer2,
  fumes,
  level_up,
  archer001,
  archer002
var archers = [],
  arrows = [],
  money_makers = [],
  archers1 = [];
(archers0 = []), (arrows1 = []), (bombs = []), (archers2 = []), (fumess = []),(arrows2 = []),(archers001 = []),(mccs = []),(arrows3 = []),(archers002 = [])
var coins;
var enemys1;
var enemy1h = { Sprite: "", vida: 10 };
var charge1 = 0;
var charge2 = 0;
var charge3 = 0
var basic_equic = 1;
var basic_equicw = 1;
var shootingSpeed = 100;
var money = 50;
var cw = 0;
var RNG1;
var inimigos = [];
var enemys4 = [];
function preload() {
  archerAni = loadAnimation(
    "archer0.png",
    "archer1.png",
    "archer2.png",
    "archer3.png"
  );
  money_makerAni = loadAnimation(
    "money_maker00.png",
    "money_maker01.png",
    "money_maker02.png",
    "money_maker03.png"
  );
  archer1Ani = loadAnimation(
    "archer_10.png",
    "archer_11.png",
    "archer_12.png",
    "archer_13.png"
  );
  archer0Ani = loadAnimation(
    "archer00.png",
    "archer01.png",
    "archer02.png",
    "archer03.png"
  );
  archer001Ani = loadAnimation(
    "archer11.png",
    "archer21.png",
    "archer31.png",
    "archer41.png"
  );
  archer002Ani = loadAnimation(
    "archer30.png",
    "aarcher31.png",
    "archer32.png",
    "archer33.png"
  )
  archer2Ani = loadAnimation("archer20.png", "archher21.png");
  bombimg = loadImage("bomb.png");
  enemyAni = loadAnimation("enemy00.png", "enemy01.png");
  enemy1Ani = loadAnimation("enemy_010.png", "enemy_011.png");
  enemy2Ani = loadAnimation("enemy020.png", "enemy021.png");
  enemy3Ani = loadAnimation("enemy030.png", "enemy031.png");
  enemy4Ani = loadAnimation("enemy040.png", "enemy041.png");
  enemy4pAni = loadAnimation("enemy140.png", "enemy141.png");
  florestaimg = loadImage("floresta.png");
  boardimg = loadImage("board.png");
  arrowimg = loadImage("arrow-1.png");
  arrow1img = loadImage("arrow-2.png");
  fumesimg = loadImage("fumes.png");
  money_coinimg = loadImage("money_coin.png");
  mccimg = loadImage("money_coin_crit.png")
  level_upimg = loadImage("level_up.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  floresta = createSprite(width / 2, height / 20 - height / 2.7, width, height);
  floresta.addImage(florestaimg);
  floresta.scale = 3;

  archer = createSprite(width / 5, height / 5);
  archer.addAnimation("archerANI", archerAni);
  archer.scale = 2;
  archers.push(archer);

  money_maker = createSprite(width / 4, height / 5);
  money_maker.addAnimation("money_makerANI", money_makerAni);
  money_maker.scale = 2;
  money_makers.push(money_maker);

  archer1 = createSprite(width / 3, height / 5);
  archer1.addAnimation("archer1ANI", archer1Ani);
  archer1.scale = 2;
  archers1.push(archer1);

  archer0 = createSprite(width / 2.5, height / 5);
  archer0.addAnimation("archer0Ani", archer0Ani);
  archer0.scale = 2;
  archers0.push(archer0);

  archer2 = createSprite(width / 2, height / 5);
  archer2.addAnimation("archer2Ani", archer2Ani);
  archer2.scale = 2;
  archers2.push(archer2);

  archerimg = createImg("archer0.png");
  archerimg.size(20, 50);
  archerimg.position(width / 2.6, height / 2.5);
  archerimg.mouseClicked(place1);

  money_makerimg = createImg("money_maker00.png");
  money_makerimg.size(20, 50);
  money_makerimg.position(width / 3, height / 2.5);
  money_makerimg.mouseClicked(place2);

  archer1img = createImg("archer_10.png");
  archer1img.size(20, 50);
  archer1img.position(width / 3.4, height / 2.5);
  archer1img.mouseClicked(place3);

  archer0img = createImg("archer00.png");
  archer0img.size(20, 50);
  archer0img.position(width / 4.4, height / 2.5);
  archer0img.mouseClicked(place4);

  /*bombimg = createImg("bomb.png");
  bombimg.size(75, 75);
  bombimg.position(width / 6, height / 2.5);
  bombimg.mouseClicked(place5);*/

  archer2img = createImg("archer20.png");
  archer2img.size(20, 50);
  archer2img.position(width / 5, height / 2.5);
  archer2img.mouseClicked(place6);

  archer001img = createImg("archer11.png")
  archer001img.size(20,50)
  archer001img.position(width/3,height/3)
  archer001img.mouseClicked(place8)

  archer002img = createImg("archer30.png")
  archer002img.size(20,50)
  archer002img.position(width/3.4,height/3)
  archer002img.mouseClicked(place9)

  level_upimg = createImg("level_up.png")
  level_upimg.size(36,42)
  level_upimg.position(width/2.6,height/3)
  level_upimg.mouseClicked(place7)
  invsprite1 = createSprite(mouseX, mouseY, 250, 250);
  invsprite1.visible = false;
  invsprite2 = createSprite(width / 2, height + 40, width);
  invsprite2.visible = false;
  imageMode(CENTER);
  coins = new Group();
  enemys1 = new Group();
    enemy = new Enemy();
    inimigos.push(enemy);
}

function draw() {
  background(0, 255, 255);
  image(boardimg, width / 2, height / 1.35 + height / 20, width);
  //image(archerimg,width/2.6,height/2.5)
  drawSprites();
  invsprite1.x = mouseX;
  invsprite1.y = mouseY;
  if(level_up != null){
    level_up.x = mouseX
    level_up.y = mouseY
    level_up.overlap(archers, function (level_up, collided) {
      archer001 = createSprite(collided.x,collided.y)
    collided.remove()
    archer001.addAnimation("archer001Ani",archer001Ani)
    archer001.scale = 2
    archers001.push(archer001)
    })
  }
  invsprite2.overlap(coins, function (invsprite2, collided) {
    collided.remove();
    charge1++;
    if (charge1 == 5) {
      charge1 = 0;
      money += 25;
    }
  });

  if (frameCount % shootingSpeed == 0) {
    shooting();
    shooting2();
    shootingSpeed -= 1;
  }
  if (frameCount % 1000 == 0) {
    produce();
  }
  if (frameCount % 500 == 0) {
    enemysp();
  }

  for (var i = 0; i < inimigos.length; i++) {
    inimigos[i].sprite.overlap(arrows3, (inimigo, flecha3) => {
      arrow = createSprite(flecha3.x, flecha3.y);
      arrow.addImage(arrowimg);
      arrow.x += 120
      arrow.scale = 2;
      arrow.velocityX += 5;
      arrow.lifetime = 300;
      arrows2.push(arrow);
      arrow = createSprite(flecha3.x, flecha3.y);
      arrow.addImage(arrowimg);
      arrow.x += 120
      arrow.scale = 2;
      arrow.velocityX += 5;
      arrow.velocityY += 1
      arrow.lifetime = 300;
      arrows2.push(arrow);
      arrow = createSprite(flecha3.x, flecha3.y);
      arrow.addImage(arrowimg);
      arrow.x += 120
      arrow.scale = 2;
      arrow.velocityX += 5;
      arrow.velocityY -= 1
      arrow.lifetime = 300;
      arrows2.push(arrow)
      if (inimigos[i].life > 0) {
        console.log(inimigos[i].life);
        inimigos[i].life -= 25;
        flecha3.remove();
      } else {
        flecha3.remove();
        inimigo.remove();
      }
});
    
    inimigos[i].sprite.overlap(arrows2, (inimigo, flecha2) => {
            arrow = createSprite(flecha2.x, flecha2.y);
            arrow.addImage(arrowimg);
            arrow.x += 120
            arrow.scale = 2;
            arrow.velocityX += 5;
            arrow.lifetime = 300;
            arrows.push(arrow);
            arrow = createSprite(flecha2.x, flecha2.y);
            arrow.addImage(arrowimg);
            arrow.x += 120
            arrow.scale = 2;
            arrow.velocityX += 5;
            arrow.velocityY += 1
            arrow.lifetime = 300;
            arrows.push(arrow);
            arrow = createSprite(flecha2.x, flecha2.y);
            arrow.addImage(arrowimg);
            arrow.x += 120
            arrow.scale = 2;
            arrow.velocityX += 5;
            arrow.velocityY -= 1
            arrow.lifetime = 300;
            arrows.push(arrow)
            if (inimigos[i].life > 0) {
              console.log(inimigos[i].life);
              inimigos[i].life -= 5;
              flecha2.remove();
            } else {
              flecha2.remove();
              inimigo.remove();
            }
      
      });
      inimigos[i].sprite.overlap(arrows, (inimigo, flecha) => {
        if (inimigos[i].life > 0) {
        console.log(inimigos[i].life);
        inimigos[i].life -= 1;
        flecha.remove();
      } else {
        flecha.remove();
        inimigo.remove();
      }
      })
      
    
  }
  for (var i = 0; i < inimigos.length; i++) {
    inimigos[i].sprite.overlap(arrows1, (inimigo, flecha1) => {
      if (inimigos[i].life > 0) {
        console.log(inimigos[i].life);
        inimigos[i].life -= 1;
        flecha1.remove();
        if (inimigos[i].speed == "fast") {
          inimigos[i].sprite.velocityX = -0.5;
        } else {
          inimigos[i].sprite.velocityX = -0.25;
        }
      } else {
        flecha1.remove();
        inimigo.remove();
      }
    });
    /*if(invsprite3!=null){
    inimigos[i].sprite.overlap(invsprite3, (inimigo, invsprite3) =>{
      inimigos[i].remove()
    })
   }if(bomb!=null){
    inimigos[i].sprite.overlap(bombs[0], (inimigo , bomb) =>{
      invsprite3 = createSprite(bombs[0].x, bombs[0].y)
    bombs[0].destroy()
    })
  }*/
  
  ;
  inimigos[i].sprite.overlap(arrows2, (inimigo, flecha) => {
    
    if (inimigos[i].life > 0) {
      console.log(inimigos[i].life);
      inimigos[i].life -= 1;
      flecha.remove();
    } else {
      flecha.remove();
      inimigo.remove();
    }})
}
for (var i = 0; i < inimigos.length; i++) {
  inimigos[i].sprite.overlap(arrows1, (inimigo, flecha1) => {
    if (inimigos[i].life > 0) {
      console.log(inimigos[i].life);
      inimigos[i].life -= 1;
      flecha1.remove();
      if (inimigos[i].speed == "fast") {
        inimigos[i].sprite.velocityX = -0.5;
      } else {
        inimigos[i].sprite.velocityX = -0.25;
      }
    } else {
      flecha1.remove();
      inimigo.remove();
    }
  });
  /*if(invsprite3!=null){
  inimigos[i].sprite.overlap(invsprite3, (inimigo, invsprite3) =>{
    inimigos[i].remove()
  })
 }if(bomb!=null){
  inimigos[i].sprite.overlap(bombs[0], (inimigo , bomb) =>{
    invsprite3 = createSprite(bombs[0].x, bombs[0].y)
  bombs[0].destroy()
  })
}*/
  }

  for (var i = 0; i < inimigos.length; i++) {
    inimigos[i].sprite.overlap(fumess, (inimigo, fume) => {
      if (inimigos[i].life > 0) {
        console.log(inimigos[i].life);
        inimigos[i].life -= 0.05;
      } else {
        inimigo.remove();
      }
    });
  }

  for (var i = 0; i < enemys4.length; i++) {
    if (enemys4[i].life <= 10) {
      enemys4[i].sprite.overlap(arrows1, (inimigo, flecha1) => {
        enemys4[i].sprite.changeAnimation("enemy4pAni", enemy4pAni);
        enemys4[i].sprite.velocityX = 2;
        if (enemys4[i].life > 0) {
          console.log(enemys4[i].life);
          enemys4[i].life -= 5;
          flecha1.remove();
        } else {
          flecha1.remove();
          inimigo.remove();
        }
      });
    } else {
      enemys4[i].sprite.overlap(arrows1, (inimigo, flecha1) => {
        if (enemys4[i].life > 10) {
          console.log(enemys4[i].life);
          enemys4[i].life -= 5;
          flecha1.remove();
        } else {
          flecha1.remove();
        }
      });
      /*if(invsprite3!=null){
    enemys4[i].sprite.overlap(invsprite3, (inimigo , invsprite3) => {
    enemys4.life = 10
  invsprite3.remove()
})
  }if(bomb!=null){
    enemys4[i].sprite.overlap(bombs[0], (inimigo , bomb) =>{
      invsprite3 = createSprite(bombs[0].x, bombs[0].y)
    bombs[0].destroy()
    })
  }*/
    }
  }
  for (var i = 0; i < enemys4.length; i++) {
    if (enemys4[i].life <= 10) {
      enemys4[i].sprite.overlap(arrows1, (inimigo, flecha1) => {
        enemys4[i].sprite.changeAnimation("enemy4pAni", enemy4pAni);
        enemys4[i].sprite.velocityX = -2;
        if (enemys4[i].life > 0) {
          console.log(enemys4[i].life);
          enemys4[i].life -= 5;
          flecha.remove();
        } else {
          flecha.remove();
          inimigo.remove();
        }
      });
    } else {
      enemys4[i].sprite.overlap(arrows1, (inimigo, flecha1) => {
        if (enemys4[i].life > 10) {
          console.log(enemys4[i].life);
          enemys4[i].life -= 5;
          flecha.remove();
        } else {
          flecha.remove();
        }
      });
    }
  }
  




  for (var i = 0; i < enemys4.length; i++) {
    if (enemys4[i].life <= 10) {
      enemys4[i].sprite.overlap(arrows, (inimigo, flecha) => {
        enemys4[i].sprite.changeAnimation("enemy4pAni", enemy4pAni);
        enemys4[i].sprite.velocityX = -4;
        enemys4[i].sprite.velocityX /= 2;
        if (enemys4[i].life > 0) {
          console.log(enemys4[i].life);
          enemys4[i].life -= 5;
          flecha.remove();
        } else {
          flecha.remove();
          inimigo.remove();
        }
      });
    } else {
      enemys4[i].sprite.overlap(arrows, (inimigo, flecha) => {
        if (enemys4[i].life > 10) {
          console.log(enemys4[i].life);
          enemys4[i].life -= 5;
          flecha.remove();
        } else {
          flecha.remove();
        }
      });
      /*if(invsprite3!=null){
    enemys4[i].sprite.overlap(invsprite3, (inimigo , invsprite3) => {
    enemys4.life = 10
  invsprite3.remove()
})
  }if(bomb!=null){
    enemys4[i].sprite.overlap(bombs[0], (inimigo , bomb) =>{
      invsprite3 = createSprite(bombs[0].x, bombs[0].y)
    bombs[0].destroy()
    })
  }*/
    }
  }
  for (var i = 0; i < enemys4.length; i++) {
    if (enemys4[i].life <= 10) {
      enemys4[i].sprite.overlap(arrows, (inimigo, flecha) => {
        enemys4[i].sprite.changeAnimation("enemy4pAni", enemy4pAni);
        enemys4[i].sprite.velocityX = -4;
        if (enemys4[i].life > 0) {
          console.log(enemys4[i].life);
          enemys4[i].life -= 1;
          flecha.remove();
        } else {
          flecha.remove();
          inimigo.remove();
        }
      });
    } else {
      enemys4[i].sprite.overlap(arrows, (inimigo, flecha) => {
        if (enemys4[i].life > 10) {
          console.log(enemys4[i].life);
          enemys4[i].life -= 1;
          flecha.remove();
        } else {
          flecha.remove();
        }
      });
    }
  }
  


  for (var i = 0; i < enemys4.length; i++) {
    if (enemys4[i].life == 10) {
      enemys4[i].sprite.overlap(fumess, (inimigo, fume) => {
        enemys4[i].sprite.changeAnimation("enemy4pAni", enemy4pAni);
        enemys4[i].sprite.velocityX =-4;
        if (enemys4[i].life > 0) {
          console.log(enemys4[i].life);
          enemys4[i].life -= 0.05;
        } else {
          
          inimigo.remove();
        }
      });
    } else {
      enemys4[i].sprite.overlap(fumess, (inimigo, fume) => {
        if (enemys4[i].life > 10) {
          console.log(enemys4[i].life);
          enemys4[i].life -= 0.05;
        } else {
          
        }
      });
      /*if(invsprite3!=null){
    enemys4[i].sprite.overlap(invsprite3, (inimigo , invsprite3) => {
    enemys4.life = 10
  invsprite3.remove()
})
  }if(bomb!=null){
    enemys4[i].sprite.overlap(bombs[0], (inimigo , bomb) =>{
      invsprite3 = createSprite(bombs[0].x, bombs[0].y)
    bombs[0].destroy()
    })
  }*/
    }
  }
  for (var i = 0; i < enemys4.length; i++) {
    if (enemys4[i].life == 10) {
      enemys4[i].sprite.overlap(fumess, (inimigo, fume) => {
        enemys4[i].sprite.changeAnimation("enemy4pAni", enemy4pAni);
        enemys4[i].sprite.velocityX = -4;
        if (enemys4[i].life > 0) {
          console.log(enemys4[i].life);
          enemys4[i].life -= 0.01;
        } else {
          
          inimigo.remove();
        }
      });
    } else {
      enemys4[i].sprite.overlap(fumess, (inimigo, fume) => {
        if (enemys4[i].life > 10) {
          console.log(enemys4[i].life);
          enemys4[i].life -= 0.01;
        } else {
          
        }
      });
    }
  }
  if (frameCount % 150 == 0) {
    money_coin = createSprite(random(width - 100, -width + 100), height / 20);
    money_coin.addImage(money_coinimg);
    money_coin.velocityY = 5;
    money_coin.scale = 2;
    charge3 +=1
    if(charge3 == 3){
      mcc = createSprite(random(width - 100, -width + 100), height / 20);
      mcc.addImage(mccimg);
      mcc.velocityY = 2;
      mcc.scale = 3;
      mccs.push(mcc)
      charge3 = 0
    }
    coins.add(money_coin);
  }
  for (var i = 0; i < arrows.length; i++) {
    if (arrows[i] >= width) {
      arrows[i].destroy();
    }
  }
  if (shootingSpeed <= 0) {
    shootingSpeed += 100;
  }
  textSize(50);
  text("money:" + money, 150, 150);
}
function mouseDragged() {
  if (clicou == 1) {
    archer.x = mouseX;
    archer.y = mouseY;
  }
  if (clicou == 2) {
    money_maker.x = mouseX;
    money_maker.y = mouseY;
  }
  if (clicou == 3) {
    archer1.x = mouseX;
    archer1.y = mouseY;
  }
  if (clicou == 4) {
    archer0.x = mouseX;
    archer0.y = mouseY;
  }
  if (clicou == 6) {
    archer2.x = mouseX;
    archer2.y = mouseY;
  }
  if(clicou == 7){
    invsprite3.x = mouseX
    invsprite3.y = mouseY
  }
  if(clicou == 8){
    archer001.x = mouseX
    archer001.y = mouseY
  }
  if(clicou == 9){
    archer002.x = mouseX
    archer002.y = mouseY
  }
}
function mouseReleased() {
  if (clicou == 1) {
    archers.push(archer);
  }
  if (clicou == 2) {
    money_makers.push(money_maker);
  }
  if (clicou == 3) {
    archers1.push(archer1);
  }
  if (clicou == 4) {
    archers0.push(archer0);
  }
  if (clicou == 5) {
    bombs.push(bomb);
  }
  if (clicou == 6) {
    archers2.push(archer2);
  }
  if(clicou == 7){
    level_up = createSprite(invsprite3.x,invsprite3.y)
    invsprite3.remove()
    level_up.addImage(level_upimg)
  }
  if(clicou == 8){
    archers001.push(archer001)
  }
  if(clicou == 9){
    archers002.push(archer002)
  }
  clicou = 0;
}
function shooting() {
  for (i = 0; i < archers.length; i++) {
    arrow = createSprite(archers[i].x, archers[i].y);
    arrow.addImage(arrowimg);
    arrow.scale = 2;
    arrow.velocityX += 5;
    arrow.lifetime = 300;
    arrows.push(arrow);
  }
  for (i = 0; i < archers0.length; i++) {
    arrow1 = createSprite(archers0[i].x, archers0[i].y);
    arrow1.addImage(arrow1img);
    arrow1.scale = 2;
    arrow1.velocityX += 5;
    arrow1.lifetime = 300;
    arrows1.push(arrow1);
  }
  for (i = 0; i < archers2.length; i++) {
    fumes = createSprite(archers2[i].x, archers2[i].y);
    fumes.addImage(fumesimg);
    fumes.scale = 2;
    fumes.velocityX += 15;
    fumes.lifetime = 30;
    fumess.push(fumes);
  }
  for (i = 0; i < archers001.length; i++){
    arrow = createSprite(archers001[i].x,archers001[i].y)
    arrow.addImage(arrowimg)
    arrow.scale = 2
    arrow.velocityX +=5
    arrow.lifetime = 300
    arrows2.push(arrow)
  }
  for (i = 0; i < archers002.length; i++){
    arrow = createSprite(archers002[i].x,archers002[i].y)
    arrow.addImage(arrowimg)
    arrow.scale = 2
    arrow.velocityX +=5
    arrow.lifetime = 300
    arrows3.push(arrow)
  }
}
function shooting2() {
  for (a = 0; a <= 500; a += 500) {
    setTimeout(() => {
      for (i = 0; i < archers1.length; i++) {
        arrow = createSprite(archers1[i].x, archers1[i].y);
        arrow.addImage(arrowimg);
        arrow.scale = 2;
        arrow.velocityX += 5;
        arrow.lifetime = 300;
        arrows.push(arrow);
      }
    }, a);
  }
}
function produce() {
  for (i = 0; i < money_makers.length; i++) {
    money_coinm = createSprite(money_makers[i].x, money_makers[i].y);
    money_coinm.addImage(money_coinimg);
    money_coinm.scale = 2;
    money_coinm.velocityY = -5
    setTimeout(()=>{
      money_coinm.velocityY = 1
    },500)
    coins.push(money_coinm);
    
  }
}
/*function mouseClicked() {
  if (money > 0) {
    money -= 1;
    shooting();
  }
}*/
function mouseClicked() {
  invsprite1.overlap(coins, function (invsprite1, collided) {
    collided.remove();
    money += 50;
  });
  invsprite1.overlap(mccs, function (invsprite1, collided) {
    collided.remove()
    money += 200
  })
}
var clicou = 0;
function place1() {
  if (money >= 100) {
    clicou = 1;
    money -= 100;
    archer = createSprite(mouseX, mouseY);
    archer.addAnimation("archerAni", archerAni);
    archer.scale = 2;
  }
}
function place2() {
  if (money >= 50) {
    clicou = 2;
    money -= 50;
    money_maker = createSprite(mouseX, mouseY);
    money_maker.addAnimation("money_makerANI", money_makerAni);
    money_maker.scale = 2;
  }
}
function place3() {
  if (money >= 200) {
    clicou = 3;
    money -= 200;
    archer1 = createSprite(mouseX, mouseY);
    archer1.addAnimation("archer1ANI", archer1Ani);
    archer1.scale = 2;
  }
}
function place4() {
  if (money >= 175) {
    clicou = 4;
    money -= 175;
    archer0 = createSprite(mouseX, mouseY);
    archer0.addAnimation("archer0Ani", archer0Ani);
    archer0.scale = 2;
  }
}
function place5() {
  if (money >= 100) {
    clicou = 5;
    money -= 100;
    bomb = createSprite(mouseX, mouseY);
    bomb.addImage(bombimg);
    bomb.scale = 2;
  }
}
function place6() {
  if (money >= 150) {
    clicou = 6;
    money -= 150;
    archer2 = createSprite(mouseX, mouseY);
    archer2.addAnimation("archer2Ani", archer2Ani);
    archer2.scale = 2;
  }
}
function place7(){
  clicou = 7
  invsprite3 = createSprite(mouseX, mouseY)
  invsprite3.visible = false
}
function place8() {
  if (money >= 250) {
    clicou = 8;
    money -= 250;
    archer001 = createSprite(mouseX, mouseY);
    archer001.addAnimation("archer001Ani", archer001Ani);
    archer001.scale = 2;
  }
}
function place9(){
  if(money >= 500){
    clicou = 9
    money -=500
    archer002 = createSprite(mouseX, mouseY)
    archer002.addAnimation("archer002Ani",archer002Ani)
    archer002.scale = 2
  }
}
function enemysp() {
  RNG1 = Math.round(random(1, 6));
  if (RNG1 == 1) {
    enemy = new Enemy();
    inimigos.push(enemy);
    basic_equic -= 1;
  }
  if (RNG1 == 2) {
    if (basic_equic >= 2) {
      enemy = new Enemy1();
      inimigos.push(enemy);
      basic_equic -= 2;
    }
  }
  if (RNG1 == 3) {
    if (basic_equic >= 4) {
      enemy = new Enemy2();
      inimigos.push(enemy);
      basic_equic -= 4;
    }
  }
  if (RNG1 == 4) {
    if (basic_equic >= 7) {
      enemy = new Enemy3();
      inimigos.push(enemy);
      basic_equic -= 7;
    }
  }
  if (RNG1 == 5) {
    if (basic_equic >= 2) {
      enemy = new Enemy4();
      enemys4.push(enemy);
      basic_equic -= 2;
    }
  }

  console.log(basic_equicw);
setTimeout(() => {
  enemyspr();
}, 2000);
}
function enemyspr() {
  
    if (basic_equic >= 1) {
      enemysp();
    }
    if (basic_equic <= 0) {
      basic_equic = basic_equicw;
      cw += 1;
      if (cw == 3) {
        basic_equicw += 1;
        cw = 0;
      }
    }
  
}
