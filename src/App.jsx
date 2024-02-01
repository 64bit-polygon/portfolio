import React, { useEffect } from "react";
import "./index.scss";
import { useRecoilState } from "recoil";
import { allPiecesSelector } from "./state/selectors";
import { Router } from "./components/Router";
import { SiteWrap } from "./components/SiteWrap";
import content from "./firebase";
import { getDocs } from 'firebase/firestore/lite';

function App() {
  const [pieces, setPieces] = useRecoilState(allPiecesSelector);

  useEffect(() => {
    if (!pieces) {
      const getPieces = async () => {
        const snapshot = await getDocs(content);
        const piecesFromDB = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        setPieces(piecesFromDB);
      };

      getPieces();
    }
  }, []);
  
  return (
    <SiteWrap>
      <Router />
    </SiteWrap>
  );
}

export default App
