import React, { useEffect, useRef } from 'react';
import { RotateCw } from 'lucide-react';

const Captcha = ({ code, onRefresh }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Create background gradient (matching our Slate color theme)
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#f8fafc'); // slate-50
        gradient.addColorStop(1, '#e2e8f0'); // slate-200
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw random background lines (noise)
        const noiseColors = ['#cbd5e1', '#94a3b8', '#cbd5e1', '#e2e8f0'];
        for (let i = 0; i < 6; i++) {
            ctx.strokeStyle = noiseColors[Math.floor(Math.random() * noiseColors.length)];
            ctx.lineWidth = 1 + Math.random() * 1.5;
            ctx.beginPath();
            ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.stroke();
        }

        // Draw random background dots
        for (let i = 0; i < 35; i++) {
            ctx.fillStyle = noiseColors[Math.floor(Math.random() * noiseColors.length)];
            ctx.beginPath();
            ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 2, 0, Math.PI * 2);
            ctx.fill();
        }

        // Draw text characters with skew/rotation
        ctx.textBaseline = 'middle';
        
        // Choose varied font families and dark theme-aligned text colors
        const fonts = ['Arial', 'Verdana', 'Georgia', 'Courier New', 'Impact', 'Times New Roman'];
        const colors = ['#002D62', '#0F766E', '#1e293b', '#0369a1', '#0f766e', '#1e1b4b'];

        const charWidth = (canvas.width - 20) / code.length;
        for (let i = 0; i < code.length; i++) {
            const char = code[i];
            const font = `bold ${24 + Math.random() * 6}px ${fonts[Math.floor(Math.random() * fonts.length)]}`;
            ctx.font = font;
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];

            // Position calculation with random offset
            const x = 10 + i * charWidth + (Math.random() * 4 - 2);
            const y = canvas.height / 2 + (Math.random() * 8 - 4);

            ctx.save();
            ctx.translate(x, y);
            
            // Random rotation (between -18 and 18 degrees)
            const angle = (Math.random() * 36 - 18) * Math.PI / 180;
            ctx.rotate(angle);
            
            ctx.fillText(char, 0, 0);
            ctx.restore();
        }

        // Draw some foreground noise lines over the text to deter automated readers
        for (let i = 0; i < 2; i++) {
            ctx.strokeStyle = '#0F766E';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(Math.random() * 20, Math.random() * canvas.height);
            ctx.lineTo(canvas.width - Math.random() * 20, Math.random() * canvas.height);
            ctx.stroke();
        }

    }, [code]);

    return (
        <div className="flex items-center gap-3">
            <div className="border border-border-grey rounded overflow-hidden bg-slate-50 flex items-center justify-center">
                <canvas 
                    ref={canvasRef} 
                    width={150} 
                    height={48} 
                    className="block cursor-pointer"
                    onClick={onRefresh}
                    title="Click to refresh CAPTCHA"
                />
            </div>
            <button
                type="button"
                onClick={onRefresh}
                className="p-3 bg-white border border-border-grey rounded hover:bg-slate-50 active:scale-95 transition-all text-slate-500 hover:text-slate-800 focus:outline-none flex items-center justify-center shrink-0"
                title="Refresh CAPTCHA"
            >
                <RotateCw size={16} />
            </button>
        </div>
    );
};

export default Captcha;
