import React, { lazy, Suspense } from 'react';
import "./CoreApp.css";

const MicroComponentA = lazy(() => import("MicroAppA/MicroComponentA"));
const MicroComponentB = lazy(() => import("MicroAppB/MicroComponentB"));
const MicroComponentC = lazy(() => import("MicroAppC/MicroComponentC"));

function CoreApp() {
  return (
    <div className="core-app">
      <Suspense fallback={<div>Carregando componente A...</div>}>
        <MicroComponentA />
      </Suspense>
      <Suspense fallback={<div>Carregando componente B...</div>}>
        <MicroComponentB />
      </Suspense>
      <Suspense fallback={<div>Carregando componente C...</div>}>
        <MicroComponentC />
      </Suspense>
    </div>
  );
}

export default CoreApp;
