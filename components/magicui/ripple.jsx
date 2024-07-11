import React from "react";

const Ripple = React.memo(function Ripple({
  mainCircleSize = 500,
  mainCircleOpacity = 0.55,
  numCircles = 64,
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]">
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        const borderOpacity = 5 + i * 5;

        return (
          <div
            key={i}
            className={`absolute animate-ripple rounded-full bg-[#C4BDBD]/15 shadow-xl border top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 [--i:${i}]`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity: opacity,
              animationDelay: animationDelay,
              borderStyle: borderStyle,
              borderWidth: "1px",
              borderColor: `rgba(var(--foreground-rgb), ${
                borderOpacity / 100
              })`,
            }}
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";

export default Ripple;
