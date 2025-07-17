// src/components/FileUpload.jsx
import React from 'react';
import Papa from 'papaparse';

const FileUpload = ({ onDataParsed }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log('CSV parsed:', results.data);
        onDataParsed(results.data); // Pasamos los datos al componente padre
      },
    });
  };

  return (
    <div className="p-4">
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="mb-4"
      />
    </div>
  );
};

export default FileUpload;
