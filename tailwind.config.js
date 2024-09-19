// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx,css}",
//   ],
//   theme: {
//     extend: {
//       transitionDuration: {
//         '2000': '2000ms',
//         '1500': '1500ms',
//       },
//       animation: {
//         fade: 'fadeInOut 1.5s ease-in-out',
//       },
//       keyframes: {
//         fadeInOut: {
//           '0%': { opacity: 0, transform: 'translateY(-20px)' },
//           '50%': { opacity: 1, transform: 'translateY(0)' },
//           '100%': { opacity: 0, transform: 'translateY(20px)' },
//         },
//       },
//       colors: {
//         azullogo: '#0746A4',
//         azuloscuro: '#031F49'
//       },
//       fontFamily: {
//         spartan: ['"League Spartan"', 'sans-serif'],
//         sanchez: ['"Sanchez"', 'serif'],
//       },
//       scrollBehavior: ['responsive', 'hover', 'focus'],
//     },
//     screens: {
//       mq1220: {
//         raw: "screen and (max-width: 1220px)",
//       },
//       mq980: {
//           raw: "screen and (max-width: 980px)",
//         },
//       mq400: {
//         raw: "screen and (max-width: 400px)",
//       }
//     }
//   },
 
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in-from-top': {
          '0%': { transform: 'translateY(-15%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-in-from-bottom': {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(-15%)', opacity: 0 },
        },
        'slide-out-to-top': {
          '0%': { transform: 'translateY(15%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-out-to-bottom': {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(15%)', opacity: 0 },
        },
      },
      animation: {
        'slide-in-from-top': 'slide-in-from-top 1s ease-out',
        'slide-in-from-bottom': 'slide-in-from-bottom 1s ease-out',
        'slide-out-to-top': 'slide-out-to-top 1s ease-out',
        'slide-out-to-bottom': 'slide-out-to-bottom 1s ease-out',
      },
      colors: {
        azullogo: '#0746A4',
        azuloscuro: '#031F49'
      },
      fontFamily: {
        spartan: ['"League Spartan"', 'sans-serif'],
        sanchez: ['"Sanchez"', 'serif'],
      },
      scrollBehavior: ['responsive', 'hover', 'focus'],
    },
    screens: {
      mq1220: {
        raw: "screen and (max-width: 1220px)",
      },
      mq980: {
          raw: "screen and (max-width: 980px)",
        },
      mq400: {
        raw: "screen and (max-width: 400px)",
      }
    }
  },
 
  plugins: [],
}

