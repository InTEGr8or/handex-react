import { Buffer } from 'buffer';
import './commands';
window.Buffer = Buffer;

// Define 'global' if it's undefined (for browser environments)
if (typeof global === 'undefined') {
  window.global = window;
}
(async () => {
  const ReactDOM = await import('react-dom/client');
  const App = await import('./App');

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <App.default />
  );
})();
