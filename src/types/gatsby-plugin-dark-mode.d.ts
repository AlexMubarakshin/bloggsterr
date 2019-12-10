declare module 'gatsby-plugin-dark-mode' {
  export type Theme = {
    theme: string;
    toggleTheme: (t: string) => void;
  }

  export const ThemeToggler: any;
}
