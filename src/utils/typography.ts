import dedent from 'dedent';
import Typography from 'typography';

export const systemFontStack = dedent`
  Inter, 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI',
  Roboto, Helvetica, Arial, sans-serif,
  'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'
`;

export const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.65,
  headerColor: '#F7F7F7',
  bodyColor: '#F7F7F7',
});

export const rhythm = typography.rhythm;
export const scale = typography.scale;
