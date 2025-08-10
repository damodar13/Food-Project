import { useState } from 'react'
import './App.css'
import Header from './module/header/header.jsx'
import './vendors/css/grid/col.css'
import './vendors/css/grid/2cols.css'
import './vendors/css/grid/3cols.css'
import './vendors/css/grid/4cols.css'
import './resources/css/style.css'
import './resources/css/queries.css'
import Features from './module/features/Features.jsx'
import Meal from './module/meal/Meal.jsx'
import Step from './module/step/Step.jsx'
import Cities from './module/citie/Cities.jsx'
import Testimonials from './module/testimonials/Testinonials.jsx'
import Plans from './module/plan/Plans.jsx'
import Form from './module/form/Form.jsx'
import Footer from './module/footer/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Features />
      <Meal />
      <Step />
      <Cities />
      <Testimonials />
      <Plans /> 
      <Form />
      <Footer />
    </>
  )
}

export default App
