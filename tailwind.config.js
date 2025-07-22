export const theme = {
  extend: {
    colors: {
      cream: '#fbfefb',
      'dark-brown': '#352208',
    },
    keyframes: {
    'fade-in-up': {
      '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
        },
    },
    animation: {
    'fade-in-up': 'fade-in-up 0.3s ease-out',
    },
  },
};
export const plugins = [];
