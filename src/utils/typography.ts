import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.65,
  headerFontFamily: ['Spoqa Han Sans', 'Noto Sans KR', 'sans-serif'],
  bodyFontFamily: ['Spoqa Han Sans', 'Noto Sans KR', 'sans-serif'],
  headerColor: '#F7F7F7',
  bodyColor: '#F7F7F7',
});

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
