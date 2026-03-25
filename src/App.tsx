import React, { Suspense } from "react";
import AppRoutes from "./router/Routes";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <AppRoutes />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;