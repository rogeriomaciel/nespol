import ReactDOM from 'react-dom/client';
import Lp1 from '../pages/Lp1';
import '../index.css';

const container = document.getElementById('root')!;

const hydrate = () => {
  if (container.hasChildNodes()) {
    ReactDOM.hydrateRoot(container, <Lp1 />);
  } else {
    ReactDOM.createRoot(container).render(<Lp1 />);
  }
};

if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(hydrate);
  } else {
    setTimeout(hydrate, 50);
  }
}
