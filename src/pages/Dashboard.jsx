import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const mockSummary = {
  balance: 5240.75,
  income: 3200.0,
  expenses: -1800.25,
  savingsProgress: 62,
};

const mockTransactions = [
  {
    id: 1,
    date: "2025-11-07",
    desc: "Groceries",
    amount: -54.2,
    category: "Food",
  },
  {
    id: 2,
    date: "2025-11-06",
    desc: "Salary",
    amount: 3200,
    category: "Income",
  },
  { id: 3, date: "2025-11-05", desc: "Coffee", amount: -3.5, category: "Food" },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToNew = () =>
    navigate("/transactions/new", { state: { background: location } });

  const [summary, setSummary] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Replace these with real API/store calls later
    setSummary(mockSummary);
    setTransactions(mockTransactions);
  }, []);

  if (!summary) return <div className="p-6">Loading dashboard…</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <div className="space-x-2">
          <button
            onClick={() => navigateToNew()}
            className="bg-blue-500 text-white px-4 py-2 rounded-2xl"
          >
            Add Transaction
          </button>
        </div>
      </header>

      {/* Summary cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow p-4 rounded-2xl">
          <div className="text-sm text-gray-500">Balance</div>
          <div className="text-xl font-bold">
            ${summary.balance.toLocaleString()}
          </div>
        </div>
        <div className="bg-white shadow p-4 rounded-2xl">
          <div className="text-sm text-gray-500">Income (this month)</div>
          <div className="text-xl font-bold text-green-600">
            ${summary.income.toLocaleString()}
          </div>
        </div>
        <div className="bg-white shadow p-4 rounded-2xl">
          <div className="text-sm text-gray-500">Expenses (this month)</div>
          <div className="text-xl font-bold text-red-600">
            ${Math.abs(summary.expenses).toLocaleString()}
          </div>
        </div>
        <div className="bg-white shadow p-4 rounded-2xl">
          <div className="text-sm text-gray-500">Savings progress</div>
          <div className="text-xl font-bold">{summary.savingsProgress}%</div>
        </div>
      </section>

      {/* Main content: placeholder chart + transactions */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow rounded-2xl min-h-[220px]">
          <div className="mb-2 font-medium">Spending (last 30 days)</div>
          <div className="h-40 flex items-center justify-center text-gray-400">
            Chart placeholder — integrate Chart.js / Recharts here
          </div>
        </div>

        <div className="bg-white p-4 shadow rounded-2xl">
          <div className="mb-2 font-medium flex items-center justify-between">
            <span>Recent transactions</span>
            <Link to="/transactions" className="text-sm text-blue-600">
              View all
            </Link>
          </div>

          <ul className="divide-y">
            {transactions.map((tx) => (
              <li
                key={tx.id}
                className="py-2 flex justify-between items-center"
              >
                <div>
                  <div className="text-sm font-medium">{tx.desc}</div>
                  <div className="text-xs text-gray-500">
                    {tx.date} • {tx.category}
                  </div>
                </div>
                <div
                  className={`font-medium ${
                    tx.amount < 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {tx.amount < 0 ? "-" : "+"}${Math.abs(tx.amount).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
