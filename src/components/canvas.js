import React, { useEffect, useRef, useState } from 'react';

const Canvas = ({ width, height }) => {
    const canvasRef = useRef(null);
    const [context, setContext] = useState(null);
    
    useEffect(() => { 
        let letters = '01';
        letters = letters.split('');
        const canvas = canvasRef.current;

        const size = 15;
        const columns = canvas.width / size;

        let drops = [];
        for (let i = 0; i < columns; i++) {
        drops[i] = 1;
        }

        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
      
            if (ctx) {
                setInterval(function(){
                ctx.fillStyle = 'rgba(0, 0, 0, .1)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                for (let i = 0; i < drops.length; i++) {
                    let text = letters[Math.floor(Math.random() * letters.length)];
                    ctx.fillStyle = '#0f0';
                    ctx.fillText(text, i * size, drops[i] * size);
                    drops[i]++;
                    if (drops[i] * size > canvas.height && Math.random() > .95) 
                    {
                        drops[i] = 0;
                    }
                }}, 70)
              setContext(ctx);
            }
        }
    }, [context]);
    return (  
        <canvas 
            ref={canvasRef} 
            id="canvas"
            height={height} 
            width={width} 
            style={{position: `fixed`}} 
        />
    )
}
 
Canvas.defaultProps = {
    width: typeof window !== 'undefined' && window.innerWidth,
    height: typeof window !== 'undefined' && window.innerHeight,
};

export default Canvas;