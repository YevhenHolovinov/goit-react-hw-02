// import { useState } from "react";

// import Modal from "./Modal";

// // const App = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <div>
// //       <button onClick={() => setIsOpen(!isOpen)}>
// //         {isOpen ? "Close" : "Open"}
// //       </button>
// //       {isOpen && <Modal />}
// //     </div>
// //   );
// // };


// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);


//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Close" : "Open"}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

// export default App;

import { useState, useEffect } from "react";

const App = () => {
  const [clicks, setClicks] = useState(0);

	// ❌ Ефект записаний з помилкою!
  useEffect(() => {
    console.log("Clicks updated: ", clicks);
  }, []);

  return (
    <button onClick={() => setClicks(clicks + 1)}>
      You clicked {clicks} times
    </button>
  );
};

export default App;