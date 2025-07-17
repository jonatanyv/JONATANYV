// src/components/Dashboard.jsx
import React from 'react';

const Dashboard = ({ data }) => {
  if (!data || data.length === 0) return null;

  const headers = Object.keys(data[0]);

  const totalProfit = data.reduce((sum, row) => sum + Number(row.Profit || 0), 0);
  const totalLoss = data.reduce((sum, row) => sum + Number(row.Loss || 0), 0);
  const pnl = totalProfit - totalLoss;

  const totalTrades = data.length;
  const winningTrades = data.filter(row => Number(row.Profit) > 0).length;
  const winrate = totalTrades > 0 ? ((winningTrades / totalTrades) * 100).toFixed(2) : 0;
  const averagePnL = totalTrades > 0 ? (pnl / totalTrades).toFixed(2) : 0;

  return (
    <div className="overflow-auto p-4">
      {/* Tabla de operaciones */}
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className="border border-gray-300 px-2 py-1 bg-gray-100 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 10).map((row, idx) => (
            <tr key={idx}>
              {headers.map((header) => (
                <td key={header} className="border border-gray-300 px-2 py-1">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-2 text-sm text-gray-500">
        Mostrando las primeras 10 filas de {data.length}
      </p>

      {/* Resumen de métricas */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Resumen de Rendimiento</h2>
        <ul className="list-disc ml-6">
          <li><strong>Trades totales:</strong> {totalTrades}</li>
          <li><strong>Ganancias totales:</strong> ${totalProfit}</li>
          <li><strong>Pérdidas totales:</strong> ${totalLoss}</li>
          <li><strong>PNL neto:</strong> ${pnl}</li>
          <li><strong>Winrate:</strong> {winrate}%</li>
          <li><strong>Promedio por trade:</strong> ${averagePnL}</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
