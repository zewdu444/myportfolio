import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import './index.css';
import App from './App';
import '@fontsource/lato/100.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const title = 'Zewdu Anley';
const description = 'Zewdu Anley Portfolio page';
const keywords = 'zewdu, Erkyhun, Anley';

root.render(
  <div>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      {/* Add other meta tags as needed */}
    </Helmet>
    <App />
  </div>,
);
