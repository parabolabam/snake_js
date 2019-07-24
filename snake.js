
  let snake = [{x: 10, y: 10}, {x: 20, y: 10}]

  let score = 0;
  let snake_length = 1;
  let canvas = document.getElementById('canvas');
  let width_ = canvas.clientWidth;
  let height_ = canvas.clientWidth;
  let ctx = canvas.getContext("2d");
      
  let interval = setInterval(function(){
      
        ctx.clearRect(0, 0, width_, height_);
        chooseDirection();
        checkBorders();
        checkBodyCollissions();
        drawFood();
        drawSnake();}, 10);
  
  function drawSnake(id){
      updatePos();
      ctx.fillStyle = "black";
      draw_circle(snake[0].x, snake[0].y);
      for(let i = 1; i < snake.length; i++){
          chaeckIfFoodEaten();
          ctx.fillStyle = "rgb(155,155,155)";
          draw_circle(snake[i].x, snake[i].y);         
      }}
 
  function checkBodyCollissions(){
    for(let i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){

            alert("You eat yourself, no, God!");
            createInfoDiv();
            clearInterval(interval);
            setTimeout(function(){window.location.reload()}, 1000)

        }
    }    }

  function createInfoDiv(){
        let div = document.createElement('div');
        div.innerText = "Don't forget to click on screen after page reloads to continue...";
        document.body.appendChild(div);}

  function draw_circle(x_coord, y_coord) {
          ctx.beginPath();
          ctx.arc(x_coord, y_coord, 7, 0, 2 * Math.PI);
          ctx.fill();}

  function chooseDirection(){
  document.onkeydown = (e) => {
                  if ([38,39,40,37].indexOf(e.keyCode) >= 0) e.preventDefault();
                  switch(e.keyCode){
                      case 37:
                        if(direct != "right") direct = "left";
                        console.log(direct)
                        break;
                      case 38:
                        if(direct != "down") direct = "up";
                        console.log(direct)
                        break;
                      case 39:
                        if(direct != "left") direct = "right";
                        console.log(direct)
                        break;
                      case 40:
                        if(direct != "up") direct = "down";
                        console.log(direct)
                        break;
                  }

            }}

  function chaeckIfFoodEaten(){
    if(Math.abs(snake[0].x - food.x) < 8 && Math.abs(snake[0].y - food.y) < 8){
            food.x = parseInt(Math.random() * width_);
            food.y = parseInt(Math.random() * height_);
            score += 25;
            snake_length+=1;
            document.getElementById('score').innerText = `score: ${score}`;
            document.getElementById('length').innerText = `snake length: ${snake_length}`;
            addToSnake()
        }}

  function checkBorders(){

      if(snake[0].x == width_ || snake[0].y == height_ || snake[0].x == 0 || snake[0].y == 0){
        
       
        alert("We're sorry, but You are dead! Watch the phrase after 'snake length'");
        clearInterval(interval);
        score = 0;
        createInfoDiv();
        setTimeout(function(){ window.location.reload() }, 2000);

      }}

  function addToSnake(){
      let last_index = snake.length - 1; 
      let new_one = {
        x: snake[last_index].x,
        y: snake[last_index].y
      }
      let x_diff = snake[last_index].x - snake[last_index - 1].x;
      let y_diff =  snake[last_index].y - snake[last_index - 1].y;

      if(x_diff > 0){
          new_one.x += 1;
      }  if(x_diff < 0){
        new_one.x -= 1;
      }  if(y_diff > 0){
        new_one.y += 1;
      }  if(y_diff < 0){
        new_one.y -= 1;
      }

      snake.push(new_one);
      snake.push(new_one);
      snake.push(new_one);
      snake.push(new_one);
      snake.push(new_one);
      snake.push(new_one);
      snake.push(new_one);
      snake.push(new_one);
      snake.push(new_one);
      snake.push(new_one);
      snake.push(new_one);
      snake.push(new_one);}

  function updatePos(){
    let snakeEl = {
      x: snake[0].x,
      y: snake[0].y
    }

    if(direct == "up"){
        snakeEl.y -= 1;
    } else if(direct == "down"){
        snakeEl.y += 1;
    } else if(direct == "left"){
        snakeEl.x -= 1;
    } else if(direct == "right"){
        snakeEl.x += 1;
    }

    snake.pop();
    snake.unshift(snakeEl);}

  function drawFood(){
      ctx.fillStyle = "rgba(5, 233, 24, 0.8)";
      draw_circle(food.x, food.y)}

  function updateFoodCoords(){
      food.x = parseInt(Math.random() * width_);
      food.y = prseInt(Math.random() * height_);}
  
  let food = {
              x: parseInt(Math.random() * width_) ,
              y: parseInt(Math.random() * height_)};

  let direct = "right"

