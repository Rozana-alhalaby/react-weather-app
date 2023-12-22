// Import createRoot from "react-dom/client" instead of "react-dom"
import { createRoot } from 'react-dom/client';
import App from './App';

// Find the root element in your HTML file
const rootElement = document.getElementById('root');

// Use createRoot to render the app
const root = createRoot(rootElement);
root.render(<App />);
