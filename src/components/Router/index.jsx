import { Routes, Route } from "react-router-dom";
import Piece from "../../pages/Piece";
import Pieces from "../../pages/Pieces";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Pieces />} />
      <Route path="/:route" element={<Piece />} />
    </Routes>
  );
};