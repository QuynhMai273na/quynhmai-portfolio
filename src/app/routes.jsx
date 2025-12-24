import App from './App';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import ProjectDetail from '../pages/ProjectDetail';
import About from '../pages/About';
import Contact from '../pages/Contact';

export const routes = [
  {
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: <Projects /> },
      { path: '/projects/:slug', element: <ProjectDetail /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
];
