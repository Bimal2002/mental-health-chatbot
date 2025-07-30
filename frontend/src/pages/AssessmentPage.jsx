import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import {
  Brain, ArrowLeft, ArrowRight, CheckCircle, Home, MessageCircle, BookOpen, Menu, X, User
} from "lucide-react";

export default function AssessmentPage() {
  const [testTypes, setTestTypes] = useState([]);
  const [selectedTest, setSelectedTest] = useState(null);
  const [testTemplate, setTestTemplate] = useState(null);
  const [current, setCurrent] = useState(0);
  const [responses, setResponses] = useState([]);
  const [result, setResult] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login', { state: { from: '/assessment' } });
      return;
    }
    setError("");
    setTestTypes([]);
    axios.get('http://localhost:5000/api/tests/list', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(res => {
        setTestTypes(res.data);
        if (res.data.length === 0) setError("No assessments available. Please contact support or try again later.");
      })
      .catch(err => {
        if (err.response && err.response.status === 401) {
          setError("Session expired or unauthorized. Please log in again.");
        } else {
          setError("Failed to load assessments. Please try again later.");
        }
      });
  }, [user, navigate]);

  // Fetch test template when selected
  useEffect(() => {
    if (selectedTest) {
      setError("");
      axios.get(`http://localhost:5000/api/tests/${selectedTest}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
        .then(res => {
          setTestTemplate(res.data);
          setResponses(Array(res.data.questions.length).fill(null));
          setCurrent(0);
        })
        .catch(() => setError("Failed to load test template. Please try again."));
    }
  }, [selectedTest]);

  const handleSelectTest = (type) => {
    setSelectedTest(type);
    setResult(null);
  };

  const handleSelect = (idx, value) => {
    const arr = [...responses];
    arr[idx] = value;
    setResponses(arr);
  };

  const handleNext = () => {
    if (current < testTemplate.questions.length - 1) setCurrent(current + 1);
    else handleSubmit();
  };
  const handleBack = () => { if (current > 0) setCurrent(current - 1); };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await axios.post(
        'http://localhost:5000/api/assessment/submit',
        {
          testType: testTemplate.name,
          responses,
          phase: 'On-Demand'
        },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setResult(res.data);
    } catch (err) {
      setError("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleNavigate = (path) => { navigate(path); };

  // UI
  if (!user) return null;

  if (!selectedTest) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Choose an Assessment</h2>
          {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
          <ul className="space-y-4">
            {testTypes.map(type => (
              <li key={type}>
                <button
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:scale-105 transition disabled:opacity-50"
                  onClick={() => handleSelectTest(type)}
                  disabled={!!error}
                >
                  {type}
                </button>
              </li>
            ))}
          </ul>
              </div>
            </div>
    );
  }

  if (result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
          <h2 className="text-xl font-bold mb-2">Assessment Complete</h2>
          <div className="mb-2 text-lg">Score: <span className="font-bold">{result.totalScore}</span></div>
          <div className="mb-2">Interpretation: <span className="font-semibold">{result.interpretation}</span></div>
          <div className="mb-4 text-gray-700">{result.feedback}</div>
          <div className="flex flex-col gap-2 mt-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => navigate('/')}>Back to Home</button>
            <button className="px-4 py-2 bg-purple-500 text-white rounded" onClick={() => setSelectedTest(null)}>Take Another Assessment</button>
            <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => navigate('/progress')}>View My Results</button>
          </div>
        </div>
      </div>
    );
  }

  if (!testTemplate) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  const q = testTemplate.questions[current];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        <div className="mb-4 text-sm text-gray-500">{testTemplate.name} ({current + 1} / {testTemplate.questions.length})</div>
        <h2 className="text-lg font-semibold mb-6">{q.text}</h2>
        <div className="space-y-3 mb-6">
          {q.choices.map((choice, idx) => (
            <button
              key={choice}
              className={`w-full py-3 px-4 rounded-lg border text-left ${responses[current] === q.scores[idx] ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-50 border-gray-200 hover:bg-blue-100'}`}
              onClick={() => handleSelect(current, q.scores[idx])}
              disabled={submitting}
            >
              {choice}
            </button>
          ))}
        </div>
        <div className="flex justify-between">
          <button onClick={handleBack} disabled={current === 0 || submitting} className="px-4 py-2 rounded bg-gray-200 text-gray-700">Back</button>
            <button
              onClick={handleNext}
            disabled={responses[current] === null || submitting}
            className="px-4 py-2 rounded bg-blue-500 text-white font-semibold"
          >
            {current === testTemplate.questions.length - 1 ? 'Submit' : 'Next'}
            </button>
        </div>
      </div>
    </div>
  );
}