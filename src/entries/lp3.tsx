import ReactDOM from 'react-dom/client';
import Lp3 from '../pages/Lp3';
import '../index.css';

const container = document.getElementById('root')!;

const hydrate = () => {
  if (container.hasChildNodes()) {
    ReactDOM.hydrateRoot(container, <Lp3 />);
  } else {
    ReactDOM.createRoot(container).render(<Lp3 />);
  }
};

if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(hydrate);
  } else {
    setTimeout(hydrate, 50);
  }
}
