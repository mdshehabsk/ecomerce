import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router} from 'react-router-dom'
import ReduxProvider from '@toolkit/Redux-Provider.tsx';
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ReduxProvider>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  </>
);
