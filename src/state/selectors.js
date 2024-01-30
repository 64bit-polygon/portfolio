import { selector, selectorFamily } from "recoil";
import { piecesAtom } from "./atoms";
import { NOT_FOUND } from "../constants";

const sortPieces = pieces => pieces.toSorted(
  (pieceA, pieceB) => {
    const compareA = pieceA.piecesOrder ?? 0;
    const compareB = pieceB.piecesOrder ?? 0;
    return compareA - compareB;
  });

export const allPiecesSelector = selector({
  key: "piecesSelector",
  set: ({ set }, pieces) => {
    set(piecesAtom, sortPieces(pieces));
  },
  get: ({ get }) => {
    return get(piecesAtom);
  }
});

export const pieceSelector = selectorFamily({
  key: "pieceSelector",
  get: route => ({ get }) => {
    const pieces = get(piecesAtom);
    if (!pieces) return undefined;
    const piece = pieces.find(piece => piece.route === route);
    return piece ?? NOT_FOUND;
  }
});
