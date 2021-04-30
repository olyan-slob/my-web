import { BrowserRouter as Link } from "react-router-dom";

export const Links = () => {
  return (
    <>
      <Link to="/">About Me</Link>

      <Link to="/experience">Experience</Link>

      <Link to="/tech-stack">Tech Stack</Link>

      <Link to="/education">Education</Link>
    </>
  );
};
