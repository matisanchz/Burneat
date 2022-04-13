module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
    
      extend: {
        fontFamily: {
          'sans': ['ui-sans-serif', 'system-ui','DM Sans'],
          'serif': ['ui-serif', 'Georgia'],
          'mono': ['ui-monospace', 'SFMono-Regular'],
          'display': ['Oswald'],
          'body': ['"Open Sans"'],
        },
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'white': '#ffffff',
          'yellow': '#F8C061',
          'blue': '#5E4DCD',
          'light-blue': '#96A5F5',
          'black':'#151928',
          'midnight': '#121063',
          'metal': '#565584',
          'tahiti': '#3ab7bf',
          'silver': '#ecebff',
          'bubble-gum': '#ff77e9',
          'bermuda': '#78dcca',
        },
        borderWidth: {
          DEFAULT: '1px',
          '0': '0',
          '10': '0.5px',
          '1': '1px',
          '2': '2px',
          '3': '3px',
          '4': '4px',
          '6': '6px',
          '8': '8px',
        },
        fontWeight: {
          hairline: 100,
          'extra-light': 100,
          thin: 200,
          light: 300,
          'normal': 400,
          medium: 500,
          semibold: 600,
          bold: 700,
          extrabold: 800,
          'extra-bold': 800,
          black: 900,
        },
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
          }
      },
    },
    plugins: [],
  }
  

 