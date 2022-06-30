import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { IgniteFeed } from "./pages/IgniteFeed";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ignitefeed" element={<IgniteFeed />} />
    </Routes>
  )
}