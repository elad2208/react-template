import { useParams } from "react-router-dom";
function Help(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <h1>Help</h1>
      <p>ID: {id}</p>
    </div>
  );
}
export default Help;
