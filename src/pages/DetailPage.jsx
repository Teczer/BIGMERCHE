import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Détails {id}</h1>
    </>
  );
};

export default DetailPage;
