/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';

export default function App() {
  const path = window.location.pathname;

  // Basic routing
  if (path === '/services') {
    return <ServicesPage />;
  }

  return <Home />;
}

