import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchMusic from "../pages/SearchMusic";
import Homepage from '../pages/Homepage';
import NotFound from '../pages/NotFound';
export default function Router() {
  return (
    <BrowserRouter>
          <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Search" element={<SearchMusic />} />
      </Routes>
    </BrowserRouter>
  );
}
