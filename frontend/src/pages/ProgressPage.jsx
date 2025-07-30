import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from '../context/AuthContext';
import Header from '../components/Header';

// Simple bar chart component for histogram
function BarChart({ data, labelKey, valueKey, color }) {
  if (!data.length) return null;
  const max = Math.max(...data.map(d => d[valueKey]));
  return (
    <div className="flex items-end space-x-2 h-40 w-full mt-4">
      {data.map((d, i) => (
        <div key={i} className="flex flex-col items-center flex-1">
          <div
            className="w-6 rounded-t bg-gradient-to-t from-blue-400 to-blue-600"
            style={{ height: `${(d[valueKey] / max) * 120 + 10}px`, minHeight: 10 }}
            title={`Score: ${d[valueKey]}`}
          ></div>
          <span className="text-xs mt-1">{d[labelKey]}</span>
        </div>
      ))}
    </div>
  );
}

export default function ProgressPage() {
  const { user } = useContext(AuthContext);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTest, setSelectedTest] = useState('');

  useEffect(() => {
    if (!user) return;
    axios.get(`http://localhost:5000/api/assessment/history/${user.id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(res => setHistory(res.data))
      .finally(() => setLoading(false));
  }, [user]);

  if (!user) return <div className="min-h-screen flex items-center justify-center">Login required</div>;
  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  // Get unique test types
  const testTypes = Array.from(new Set(history.map(r => r.testType)));
  const filtered = selectedTest ? history.filter(r => r.testType === selectedTest) : history;
  const chartData = filtered.slice(-10).map(r => ({
    date: new Date(r.date).toLocaleDateString(),
    totalScore: r.totalScore
  }));

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">My Assessment Progress</h2>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="font-semibold">Filter by Test:</span>
            <button className={`px-3 py-1 rounded ${!selectedTest ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setSelectedTest('')}>All</button>
            {testTypes.map(type => (
              <button key={type} className={`px-3 py-1 rounded ${selectedTest === type ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setSelectedTest(type)}>{type}</button>
            ))}
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Test</th>
                  <th className="py-2 px-4">Score</th>
                  <th className="py-2 px-4">Interpretation</th>
                  <th className="py-2 px-4">Phase</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(r => (
                  <tr key={r._id} className="border-b">
                    <td className="py-2 px-4">{new Date(r.date).toLocaleDateString()}</td>
                    <td className="py-2 px-4">{r.testType}</td>
                    <td className="py-2 px-4">{r.totalScore}</td>
                    <td className="py-2 px-4">{r.interpretation}</td>
                    <td className="py-2 px-4">{r.phase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="font-semibold mb-2">Recent Scores Histogram</h3>
          <BarChart data={chartData} labelKey="date" valueKey="totalScore" color="#3b82f6" />
        </div>
      </div>
    </>
  );
} 