import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;
      background: string;
      text: string;
      orange: string;
      white: string;
      brown: string;
      gray: string;
      red: string;
    };
    fonts: {
      primary400: string;
      primary500: string;
      primary700: string;
    };
  }
}
