/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import LyceePage from './pages/LyceePage';

export default function App() {
  const path = window.location.pathname;

  return (
    <>
      {path === '/services' ? <ServicesPage /> : path === '/lycee' ? <LyceePage /> : <Home />}
    </>
  );
}

