import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CreateCoursePage} from "./components/pages/create-course/ui/index"
import {Layout} from "./components/layout/index"
import { useStepper } from './components/hooks/useStepper';





function App() {
  const { currentStep ,handleGenerate} = useStepper();
  return (
    <BrowserRouter>
      <Layout currentStep={currentStep}>
        <Routes>
          <Route path="/" element={<CreateCoursePage handleGenerate={handleGenerate} />} />
          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;