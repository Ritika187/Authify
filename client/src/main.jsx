import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AppContextProvider } from './context/AppContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<StrictMode>
<BrowserRouter>
    <AppContextProvider>
       <App />
    </AppContextProvider>
</BrowserRouter>
</StrictMode>
 
)
