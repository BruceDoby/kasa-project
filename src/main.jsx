import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from "./AppRooteur"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter /> {/* Voilà comment commenter en jsx, à retenir pour plus tard */}
  </StrictMode>
);
