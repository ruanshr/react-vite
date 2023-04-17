import { useState } from "react";
import "./App.css";
import { Button } from "antd";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="card">
        count is {count}
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          点击
        </Button>
      </div>
    </div>
  );
}

export default App;
