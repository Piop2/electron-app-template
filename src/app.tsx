import { createRoot } from 'react-dom/client';
import './index.css';

function App() {
    return (
        <h2>Hello from React!</h2>
    );
}

const root = createRoot(document.body);
root.render(<App/>);
