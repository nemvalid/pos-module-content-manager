import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store';

import { NotFound } from './components/pages/404';
import Layout from './components/Layout';
import { Dashboard } from './components/pages/Dashboard';
import { ContentList } from './components/pages/Content';
import { ContentForm } from './components/pages/ContentForm';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="admin/content">

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/list/:modelName" element={<ContentList />} />
            <Route path="/new/:modelName" element={<ContentForm />} />
            <Route path="/edit/:modelName/:id" element={<ContentForm edit/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
