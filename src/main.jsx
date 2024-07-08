import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Admin/Admin.jsx";
import Home from "./pages/Home.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import Skills from "./pages/Skills.jsx";
import AdminAllWork from "./Admin/AdminPages/AllWorks.jsx";
import CreateWork from "./Admin/AdminPages/CreateWork.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='project' element={<Project/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='skills' element={<Skills/>}/>
        </Route>

        <Route path="admin" element={<Admin/>}>
            <Route path="allWork" element={<AdminAllWork/>}/>
            <Route path="createWork" element={<CreateWork/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
