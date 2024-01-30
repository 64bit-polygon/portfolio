import styles from "./styles.module.scss";
import { useRecoilValue } from "recoil";
import { allPiecesSelector } from "../../state/selectors";
import { PieceLink } from "./PieceLink";

const shimmerA = {
  isShimmer: true,
  title: "xxxxxxxxxxxxxx",
  subtitle: "xx xxxxxxxxxxxxxx x xxx xxx xx xxx xxxx xxxxxxxxxx xxx xxx xxx xxxx"
};

const shimmerB = {
  ...shimmerA,
  subtitle: "xx xxxxxxxxxxxxxx x xxx xxx xx xxx xxxx xxxxxxxxxx xxx xxx xxx xxxx x xx xxx xxxx xxxxxxxxxx xx x xx xxx xxxx xxxxxxxxxx xx"
};

const shimmerLinks = [
  { ...shimmerA, id: 'a' },
  { ...shimmerB, id: 'b' },
  { ...shimmerA, id: 'c' },
  { ...shimmerB, id: 'd' },
  { ...shimmerA, id: 'e' },
  { ...shimmerB, id: 'f' },
  { ...shimmerA, id: 'g' }
];

const Pieces = () => {
  const piecesData = useRecoilValue(allPiecesSelector) ?? shimmerLinks;

  return (
    <div className={styles.pieces}>
    {piecesData.map(pieceData => (
      <PieceLink
        title={pieceData.title}
        subtitle={pieceData.subtitle}
        route={pieceData?.route}
        isTextBgColored={pieceData?.isTextBgColored}
        animatedSvg={pieceData?.animatedSvg}
        key={`${pieceData.id}`}
        isShimmer={pieceData.isShimmer}
      />
    ))}
    </div>
  )
}

export default Pieces
