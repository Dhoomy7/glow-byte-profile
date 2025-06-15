
import { useState, useEffect } from "react";

// WASD or Arrow key controls → velocity (moveX, moveZ)
export default function usePlayerControls() {
  const [movement, setMovement] = useState({ moveX: 0, moveZ: 0 });

  useEffect(() => {
    const handleKey = (down: boolean) => (e: KeyboardEvent) => {
      let { moveX, moveZ } = movement;
      switch (e.code) {
        case "KeyW":
        case "ArrowUp":
          moveZ = down ? -1 : 0;
          break;
        case "KeyS":
        case "ArrowDown":
          moveZ = down ? 1 : 0;
          break;
        case "KeyA":
        case "ArrowLeft":
          moveX = down ? -1 : 0;
          break;
        case "KeyD":
        case "ArrowRight":
          moveX = down ? 1 : 0;
          break;
        default:
          return;
      }
      setMovement({ moveX, moveZ });
    };

    document.addEventListener("keydown", handleKey(true));
    document.addEventListener("keyup", handleKey(false));
    return () => {
      document.removeEventListener("keydown", handleKey(true));
      document.removeEventListener("keyup", handleKey(false));
    };
    // eslint-disable-next-line
  }, [movement]);

  return movement;
}
