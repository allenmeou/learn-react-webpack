import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom/client"; // nạp thư viện react-dom

// Tạo component App
function App() {
  return (
    <div>
      <h1>Xin chào anh em F8!</h1>
      <p>hello ae</p>
      <b>test node server</b>
      <b>test node server</b>
    </div>
  );
}

// Render component App vào #root element
const rootContainer = document.getElementById("root");
const root = ReactDOM.createRoot(rootContainer);
root.render(<App />);
