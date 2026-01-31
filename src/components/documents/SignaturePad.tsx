import { useRef } from "react";

export default function SignaturePad() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let drawing = false;

  const start = () => (drawing = true);
  const end = () => (drawing = false);

  const draw = (e: React.MouseEvent) => {
    if (!drawing || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={150}
      className="border rounded"
      onMouseDown={start}
      onMouseUp={end}
      onMouseMove={draw}
    />
  );
}
