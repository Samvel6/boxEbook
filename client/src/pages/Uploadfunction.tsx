import { useState } from "react";
import "./Uploadfunction.css";

const Uploadfunction = () => {
  const [selectedFile] = useState(null);

  const handleFileChange = () => {};

  const handleUploadClick = () => {
    if (!selectedFile) {
      alert("No file selected!");
      return;
    }
  };

  return (
    <div className="button-upload">
      <input className="btn-choisir" type="file" onChange={handleFileChange} />
      <button
        className="btn-importer"
        onClick={handleUploadClick}
        type="button"
      >
        Importer
      </button>
      {selectedFile && (
        <div style={{}}>
          <strong>Selected File:</strong> {selectedFile}
        </div>
      )}
    </div>
  );
};

export default Uploadfunction;
