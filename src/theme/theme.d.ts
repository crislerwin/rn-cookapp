import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      orange: string;
      white: string;
      brown: string;
      gray: string;
      red: string;
    }
  }
}
