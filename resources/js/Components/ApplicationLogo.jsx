import { useLocalStorage } from "usehooks-ts";

export default function ApplicationLogo(props) {

  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <img {...props}
      src={theme === 'light' ? '/assets/images/elegen_solution_logo.png' : '/assets/images/elegen_solution_logo_white.png'}
      alt="Elegen Solutions" />
  );
}
