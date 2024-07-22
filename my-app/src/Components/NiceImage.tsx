/* eslint-disable prefer-const */
import { useParams } from "react-router-dom";
function NiceImage(): JSX.Element {
  let params = useParams();
  let imgSrc: string = `https://picsum.photos/id/${params.id}/200/300`;
  return <img src={imgSrc} />;
}
export default NiceImage;
