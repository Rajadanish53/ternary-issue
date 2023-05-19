import React, { useState } from 'react';
import './style.css';

export default function App() {
  let [active, setActive] = useState(0);
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <ul>
        {list.map((l) => (
          <li
            style={{ background: `${active === l && 'red'}` }}
            onClick={() => setActive(l)}
          >
            {l}
          </li>
        ))}
      </ul>
      <ul>
        {list.map((l) => (
          <li
            style={{ background: `${active === l ? 'red' : ""}` }}
            onClick={() => setActive(l)}
          >
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}
