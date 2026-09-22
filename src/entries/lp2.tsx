import ReactDOM from 'react-dom/client';
import Lp2 from '../pages/Lp2';
import '../index.css';

const container = document.getElementById('root')!;

const hydrate = () => {
  if (container.hasChildNodes()) {
    ReactDOM.hydrateRoot(container, <Lp2 />);
  } else {
    ReactDOM.createRoot(container).render(<Lp2 />);
  }
};

if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(hydrate);
  } else {
    setTimeout(hydrate, 50);
  }
}
