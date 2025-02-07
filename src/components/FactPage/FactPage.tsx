import { useEffect, useState } from "react";
import axios from "axios";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import FactMessage from "../FactMessage/FactMessage";

export default function FactPage() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [timeout, setTimeout] = useState(1000);

  const getFact = async () => {
    setLoading(true);
    setError("");
    await axios
      .get("https://catfact.ninja/fact", { timeout })
      .then((response) => setFact(response.data.fact))
      .catch((error) => setError(error.message));
    setLoading(false);
  };

  // Set the initial fact
  useEffect(() => {
    getFact();
  }, []);

  return (
    <>
      <FactMessage message={fact} />
      <div className="columns m-4">
        <div className="column is-one-fifth m-2 has-text-right">
          <label htmlFor="timeout" className="label is-large is-info">
            {"Timeout (ms): "}
          </label>
        </div>

        <input
          className="input is-large column is-one-fifth m-2"
          type="number"
          value={timeout}
          onChange={(e) => setTimeout(+e.target.value)}
        />

        <button
          className="button is-success is-large column m-2"
          onClick={getFact}
          disabled={loading}
        >
          Next
        </button>
      </div>
      <ErrorMessage message={error} />
    </>
  );
}
