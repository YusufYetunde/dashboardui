import ReactDOM from 'react-dom/client'
import App from './App.js';
import { SidebarProvider } from './context/sidebarContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <App />
  </SidebarProvider>
)
