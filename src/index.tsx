import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/AppRouter';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <AppRoutes/>
  </>
);

