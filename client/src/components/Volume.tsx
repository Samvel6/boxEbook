import { useLoaderData } from "react-router-dom";
import "./Volume.css";

interface VolumeProps {
  has_fulltext?: string;
  cover: string;
  author: string;
  title: string;
}

function Volume() {
  const data = useLoaderData() as VolumeProps;
  console.info(data);
  return (
    <div className="volume">
      <div className="volume-container">
        <img className="volume-img" src={data.cover} alt="volume-cover" />
        <div className="volume-text">
          <h2 className="volume-h3">{data.title}</h2>
          <hr />
          <p>{data.has_fulltext}</p>
          <h2 className="volume-h5">{data.author}</h2>
        </div>
      </div>
    </div>
  );
}

export default Volume;
