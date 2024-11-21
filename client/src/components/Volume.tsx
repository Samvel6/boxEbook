import "./Volume.css";

interface VolumeProps {
  has_fulltext?: string;
  cover: string;
  author: string;
  title: string;
}

function Volume({ title, cover, author, has_fulltext }: VolumeProps) {
  return (
    <>
      <div className="volume-container">
        <img className="volume-img" src={cover} alt="volume-cover" />
        <div className="volume-text">
          <h2 className="volume-h3">{title}</h2>
          <hr />
          <p>{has_fulltext}</p>
          <h2 className="volume-h5">{author}</h2>
        </div>
      </div>
    </>
  );
}

export default Volume;
