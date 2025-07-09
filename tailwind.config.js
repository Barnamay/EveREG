// // tailwind.config.js
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}", // or pages, components depending on your structure
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         text: "text 5s ease infinite",
//       },
      
//       keyframes: {
//         text: {
//           "0%, 100%": { backgroundPosition: "0% 50%" },
//           "50%": { backgroundPosition: "100% 50%" },
//         },
//       },
//     },
//   },
//   plugins: [],
// }


// tailwind.config.js

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      colors: {
        neon: '#00d4ff',
        aurora: '#00fff7',
        cyberpink: '#ff007c',
        cyberpurple: '#8a2be2',
      },
      animation: {
        text: "text 5s ease infinite",
        glow: "glow 3s ease-in-out infinite",
        pulseSlow: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        glow: {
          "0%, 100%": {
            textShadow: "0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 40px #00d4ff",
          },
          "50%": {
            textShadow: "0 0 20px #00fff7, 0 0 30px #00fff7, 0 0 60px #00fff7",
          },
        },
      },
    },
  },
  plugins: [],
}
