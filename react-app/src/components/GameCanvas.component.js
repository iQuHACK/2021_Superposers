import React, { useRef, useEffect, useState } from 'react';
import '../styles.css'
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

var player = {
    x: 200,
    y: 200,
    x_v: 0,
    y_v: 0,
    jump : true,
    height: 20,
    width: 20
    };
var num = 5;
var platforms = [];

var keys = {
    right: false,
    left: false,
    up: false,
    };
var friction = 0.7;
var gravity = 0.6;

function rendercanvas(ctx){
    ctx.fillStyle = "#F0F8FF";
    ctx.fillRect(0, 0, 1000, 270);
}

function renderplayer(ctx){
    ctx.fillStyle = "#F08080";
    ctx.fillRect((player.x)-20, (player.y)-20, player.width, player.height);
    }

function createplat(){
    for(var i = 0; i < num; i++) {
        platforms.push(
            {
            x: 100 * i,
            y: 200 + (30 * i),
            width: 110,
            height: 15
            }
        );
    }
    }

function renderplat(ctx){
    ctx.fillStyle = "#45597E";
    for (var i=0; i<num; i++){
        ctx.fillRect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
    }
    


}

// This function is called when one of the arrow keys is pressed
function keydown(e) {
    // 37 is the code for thr left arrow key
    if(e.keyCode == 37) {
        keys.left = true;
    }
    if(e.keyCode == 38) {
        if(player.jump == false) {
            player.y_v = -10;
        }
    }
    // 39 is the code for the right arrow key
    if(e.keyCode == 39) {
        keys.right = true;
    }
}
// This function is called when the key is released
function keyup(e) {
    if(e.keyCode == 37) {
        keys.left = false;
    }
    if(e.keyCode == 38) {
        if(player.y_v < -2) {
        player.y_v = -3;
        }
    }
    if(e.keyCode == 39) {
        keys.right = false;
    }
} 


function GameCanvas(props) {
    const canvasRef = useRef(null);
    const [loc, setLoc] = useState([0, 0]);
    const [v, setV] = useState([0, 0]);
    const [jumping, setJumping] = useState(true);

    createplat();
    window.addEventListener("keydown",keydown);
    window.addEventListener("keyup",keyup);

    useEffect(() => {
        console.log("keys", keys.left, keys.right);
        const canvasObj = canvasRef.current
        const ctx = canvasObj.getContext('2d');
        ctx.canvas.height = 270;
        ctx.canvas.width = 1000;

        function loop(ctx) {
            if(player.jump == false) {
                player.x_v *= friction;
            } else {
                // If the player is in the air then apply the effect of gravity
                player.y_v += gravity;
            }
            player.jump = true;
            // If the left key is pressed, move the player to the left
            if(keys.left) {
                player.x+= -2.5;
            }
             // If the right key is pressed, move the player to the right
            if(keys.right) {
                player.x  += 2.5;
            }
            // Updating the y and x coordinates of the player
            player.y += player.y_v;
            player.x += player.x_v;
            // A simple code that checks for collions with the platform
            let platform_y = -1;
            for (let i=0; i < 3; i++) {
                if(platforms[i].x < player.x && player.x < platforms[i].x + platforms[i].width &&
                    platforms[i].y < player.y && player.y < platforms[i].y + platforms[i].height){
                        platform_y = i;
                    }
            }
            
            if (platform_y > -1){
                player.jump = false;
                player.y = platforms[platform_y].y;    
            }
            // Rendering the canvas, the player and the platforms
            rendercanvas(ctx);
            renderplayer(ctx);
            renderplat(ctx);
        } 

        setInterval(() => loop(ctx),22);
    });

    return <canvas ref={canvasRef} {...props} />

}

export default GameCanvas;