import React, { useRef, useEffect } from "react";
import "./Background.scss";

const Background = () => {

    let canvasRef = useRef(null);

    const randomCoord = (max, min = 0) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }

    const drawTriangle = (ctx, ax, ay, w, height, d) => {
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#B2A8F3";

        // var  = 0;
        // var ay = 0;
        var bx = ax;
        var by = ay + height;

        var dx = bx - ax
        var dy = by - ay;
        if (d) {
            ctx.save();
            ctx.translate(dx, dy);
            ctx.rotate(d)
            ctx.translate(-dx, -dy);
        }
        // ctx.translate(-dx, -dy);
        var dangle = Math.atan2(dy, dx) - Math.PI / 3;
        var sideDist = Math.sqrt(dx * dx + dy * dy);

        var cx = Math.cos(dangle) * sideDist + ax;
        var cy = Math.sin(dangle) * sideDist + ay;

        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.lineTo(cx, cy);
        ctx.lineTo(ax, ay)
        ctx.stroke();


        // ctx.beginPath();
        // ctx.moveTo(0, h / 2);
        // ctx.lineTo(height / 2, -h / 2);
        // ctx.lineTo(-height / 2, -h / 2);
        // ctx.lineTo(0, h / 2);

        // ctx.moveTo(0, 0);
        // ctx.lineTo(0, h / 2);
        // ctx.lineTo(height / 2, -h / 2);
        // ctx.lineTo(-height / 2, -h / 2);

        ctx.lineWidth = 3;
        ctx.strokeStyle = "#B2A8F3";
        ctx.stroke();

        if (d) {
            ctx.restore();
        }
    }
  
    const drawSquare = (ctx, x, y, w, h, d) => {
        // ctx.beginPath();
        // // ctx.rotate(randomCoord(360));
        // ctx.rect(xPos, yPos, 140, 140);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#B2A8F3";
        // ctx.stroke();
        
        const dx = x + w / 2;
        const dy = y + w / 2;

        if (d) {
            ctx.save();
            ctx.translate(dx, dy);
            ctx.rotate(d)
            ctx.translate(-dx, -dy);
        }

        ctx.strokeRect(x, y, w, h);

        if(d){
            ctx.restore();
        }
    }
  
    const drawCircle = (ctx, xPos, yPos) => {
        ctx.beginPath()

        ctx.arc(xPos, yPos, 70, 0, Math.PI*2, false)
        ctx.closePath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#B2A8F3";
        ctx.stroke();
    }

    
    useEffect(() => {
        const canvas = canvasRef.current;
        let ctx = canvas.getContext("2d");
        
        // window.addEventListener('resize', () => {
        //     canvas.width = window.innerWidth
        //     canvas.height = window.innerHeight
        //   })
        
        const figures = [
            drawTriangle, 
            drawSquare,
            drawCircle
        ];
        
    
    // for (let i = 0; i < 30; i++) {    
    //     figures[Math.round(Math.random() * 2)](ctx, randomCoord(canvas.width / 2), randomCoord(canvas.height / 2))
    // }

    const count = 18

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    })
    
    const init = () => {
      for (let i = 0; i < count; i++) { 
    
        const widthSq = 140;
        const heightSq = 140;
        figures[randomCoord(2)](ctx, randomCoord(canvas.width - widthSq / 2), randomCoord(canvas.height - heightSq / 2), widthSq, heightSq, randomCoord(120) * Math.PI/180)
      }
    }

    init()

    }, [])

    return (
        <canvas width={window.innerWidth} height={window.innerHeight} ref={canvasRef} />
    )
}

export default Background;