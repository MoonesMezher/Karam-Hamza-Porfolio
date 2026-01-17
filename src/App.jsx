import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Blog from "./pages/Blog"
import Layout from "./layout/Layout"
import Aos from "aos"
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 150,
      duration: 600,
      easing: 'linear',
      delay: 100,
    });
  }, []);
  
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/not-found" element={<NotFound/>}/>
        <Route path="*" element={<Navigate to={"/not-found"}/>}/>
      </Routes>
    </Layout>
  )
}

export default App