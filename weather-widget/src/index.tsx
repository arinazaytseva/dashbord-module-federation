import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(document.getElementById("root")!);
  root.render(<App />);
} else {
  console.error("Element with id 'root' not found!");
}
