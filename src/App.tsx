import { useState } from "react";
import styles from "./style";
import "tailwindcss/tailwind.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}></div>
        </div>
      </div>
    </>
  );
}

export default App;
