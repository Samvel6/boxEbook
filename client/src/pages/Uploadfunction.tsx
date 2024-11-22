import { useState } from "react";
import "./Uploadfunction.css";

const Uploadfunction = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUploadClick = () => {
    if (!selectedFile) {
      alert("No file selected!");
      return;
    }

    alert(`Uploading: ${selectedFile.name}`);
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
          <strong>Selected File:</strong> {selectedFile.name}
        </div>
      )}
    </div>
  );
};

export default Uploadfunction;
