import React from "react";
import { useEffect } from "react";
import "./bubble.css";

function BubbelAnimation() {
  const bubbleCount = 50;
  const swayTypes = ["sway-left-to-right", "sway-right-to-left"];

  useEffect(() => {
    const bubblesContainer = document.getElementById("bubbles");

    // Function to generate random number within a range
    const randomRange = (min, max) => Math.random() * (max - min) + min;

    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");

      // Set CSS variables for each bubble
      bubble.style.setProperty(
        "--bubble-left-offset",
        `${randomRange(0, 100)}vw`
      );
      bubble.style.setProperty("--bubble-radius", `${randomRange(1, 10)}vw`);
      bubble.style.setProperty("--float-duration", `${randomRange(6, 12)}s`);
      bubble.style.setProperty("--float-delay", `${randomRange(0, 4)}s`);
      bubble.style.setProperty("--sway-duration", `${randomRange(4, 6)}s`);
      bubble.style.setProperty("--sway-delay", `${randomRange(0, 4)}s`);
      bubble.style.setProperty(
        "--sway-type",
        swayTypes[Math.floor(Math.random() * swayTypes.length)]
      );

      // Apply dynamic styles
      bubble.style.left = bubble.style.getPropertyValue("--bubble-left-offset");
      bubble.style.width = bubble.style.getPropertyValue("--bubble-radius");
      bubble.style.height = bubble.style.getPropertyValue("--bubble-radius");

      bubblesContainer.appendChild(bubble);
    }
  }, []);

  return (
    <div
      id="bubbles"
      className="relative w-full h-[calc(100vh-105px)] overflow-hidden bubbles"
    >
      {" "}
      contact me
    </div>
  );
}

export default BubbelAnimation;
