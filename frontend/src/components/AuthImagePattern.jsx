import React from "react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    // <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
    //   <div className="max-w-md text-center">
    //     <div className="grid grid-cols-3 gap-3 mb-8">
    //       {[...Array(9)].map((_, i) => (
    //         <div
    //           key={i}
    //           className={`aspect-square rounded-2xl bg-primary/10 ${
    //             i % 2 === 0 ? "animate-pulse" : ""
    //           }`}
    //         />
    //       ))}
    //     </div>
    //     <h2 className="text-2xl font-bold mb-4">{title}</h2>
    //     <p className="text-base-content/60">{subtitle}</p>
    //   </div>
    // </div>

    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl bg-linear-to-br from-primary/20 to-secondary/20 relative overflow-hidden group hover:scale-105 transition-transform duration-300"
              style={{
                animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              {/* Shimmer effect */}
              <div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                style={{
                  animation: "shimmer 3s ease-in-out infinite",
                  animationDelay: `${i * 0.3}s`,
                }}
              ></div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-secondary/0 group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-500"></div>
              
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 animate-fade-in">{title}</h2>
        <p className="text-base-content/60 animate-fade-in-delay">{subtitle}</p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) scale(1.05);
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        @keyframes pulse-dot {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default AuthImagePattern;
