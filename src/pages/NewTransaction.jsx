import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewTransaction() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    desc: "",
    amount: "",
    category: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!form.desc.trim()) return "Description required";
    if (!form.amount || isNaN(Number(form.amount)))
      return "Valid amount required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setSubmitting(true);
    setError(null);

    try {
      // TODO: replace with real API/store call
      await new Promise((res) => setTimeout(res, 600));

      navigate("/");
    } catch {
      setError("Failed to save transaction");
      setSubmitting(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Add Transaction</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <div className="text-red-600 text-sm">{error}</div>}

        <label className="block">
          <div className="text-sm text-gray-600">Date</div>
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={onChange}
            className="mt-1 w-full border p-2 rounded"
          />
        </label>

        <label className="block">
          <div className="text-sm text-gray-600">Description</div>
          <input
            name="desc"
            value={form.desc}
            onChange={onChange}
            className="mt-1 w-full border p-2 rounded"
          />
        </label>

        <label className="block">
          <div className="text-sm text-gray-600">Amount</div>
          <input
            name="amount"
            value={form.amount}
            onChange={onChange}
            className="mt-1 w-full border p-2 rounded"
            placeholder="Use negative for expenses, positive for income"
          />
        </label>

        <label className="block">
          <div className="text-sm text-gray-600">Category</div>
          <input
            name="category"
            value={form.category}
            onChange={onChange}
            className="mt-1 w-full border p-2 rounded"
          />
        </label>

        <div className="flex items-center justify-end space-x-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-3 py-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {submitting ? "Saving…" : "Save Transaction"}
          </button>
        </div>
      </form>
    </div>
  );
}
