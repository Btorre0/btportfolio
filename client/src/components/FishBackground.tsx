// import { useMemo } from "react";

// export default function FishBackground() {
//   const fishes = useMemo(() => {
//     return Array.from({ length: 15 }).map((_, i) => ({
//       id: i,
//       top: Math.random() * 100,
//       size: 10 + Math.random() * 25,
//       duration: 15 + Math.random() * 15,
//       delay: Math.random() * 10,
//       direction: Math.random() > 0.5 ? "left" : "right",
//     }));
//   }, []);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         overflow: "hidden",
//         zIndex: 0, // 👈 sits below content but above page background
//         pointerEvents: "none",
//       }}
//     >
//       {fishes.map((fish) => (
//         <div
//           key={fish.id}
//           style={{
//             position: "absolute",
//             top: `${fish.top}%`,
//             width: `${fish.size}px`,
//             height: `${fish.size / 2}px`,
//             opacity: 0.35,
//             borderRadius: "50%",
//             background: "white",
//             filter: "drop-shadow(0 0 6px rgba(255,255,255,0.5))",
//             animation: `${
//               fish.direction === "left" ? "swimLeft" : "swimRight"
//             } ${fish.duration}s linear ${fish.delay}s infinite`,
//           }}
//         >
//           <div
//             style={{
//               position: "absolute",
//               right: fish.direction === "left" ? "auto" : "-6px",
//               left: fish.direction === "left" ? "-6px" : "auto",
//               top: "50%",
//               transform: "translateY(-50%)",
//               width: 0,
//               height: 0,
//               borderTop: "3px solid transparent",
//               borderBottom: "3px solid transparent",
//               borderLeft:
//                 fish.direction === "left"
//                   ? "5px solid rgba(255,255,255,0.8)"
//                   : "none",
//               borderRight:
//                 fish.direction === "right"
//                   ? "5px solid rgba(255,255,255,0.8)"
//                   : "none",
//             }}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }
