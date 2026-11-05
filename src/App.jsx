import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import RoutLayout from "./layout/RoutLayout";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RoutLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/works" element={<Works/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App