import "./Volume.css";

interface VolumeProps {
  has_fulltext?: string;
  cover_edition_key: string;
  author_name: string;
  title: string;
}

function Volume({
  title,
  cover_edition_key,
  author_name,
  has_fulltext,
}: VolumeProps) {
  return (
    <>
      <div className="volume-container">
        <img
          className="volume-img"
          src={cover_edition_key}
          alt="volume-cover"
        />
        <div className="volume-text">
          <h3 className="volume-h3">{title}</h3>
          <hr />
          <h5 className="volume-h5">{author_name}</h5>
          <p>{has_fulltext}</p>
        </div>
      </div>
    </>
  );
}

export default Volume;
