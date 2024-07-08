import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./AdminComponents/Header";
import CreateWork from "./AdminPages/CreateWork";


export default function Admin() {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}
