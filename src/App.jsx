import { Toaster } from 'sonner';
import './App.css';
import Router from './shared/Router';

function App() {
  return (
    <div>
      <Router />
      <Toaster position="top-right" richColors="true" />
    </div>
  );
}

export default App;
