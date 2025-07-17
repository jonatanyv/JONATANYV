// src/App.jsx
import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import Dashboard from './pages/Dashboard';

function App() {
  const [csvData, setCsvData] = useState([]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Trading Dashboard</h1>
      <FileUpload onDataParsed={setCsvData} />
      {csvData.length > 0 && <Dashboard data={csvData} />}
    </div>
  );
}

export default App;
