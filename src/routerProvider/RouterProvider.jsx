import { createBrowserRouter } from "react-router";
import Home from '../Home'
import Layout from "./Layout";
import AboutMe from "../AboutMe";
import Skills from "../components/Skills";
import Education from "../components/Education";
import ContactForm from "../components/ContactForm";
import Projects from "../components/Projects";


export const router = createBrowserRouter([
  {
    // path: "/home", ai ta tick 
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        // index: true, ai ta tick
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutMe></AboutMe>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/education",
        element: <Education></Education>
      },
      {
        path: "/contact",
        element: <ContactForm></ContactForm>
      }
    ]
  }
]);