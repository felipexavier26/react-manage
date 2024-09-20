import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './navbar.css'
import Home from '../pages/Home'
import Company from '../pages/Company'
import Contact from '../pages/Contact'
import NewProject from '../pages/NewProject'
import Project from '../pages/project';
import ProjectEdit from '../pages/ProjectEdit';


function NavBar() {
    return (
        <>
            <BrowserRouter>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/contact'>Contato</Link>
                    <Link to='/company'>Empresa</Link>
                    <Link to='/project'>Projetos</Link>
                    <Link to='/newproject'>Novo Projeto</Link>
                </nav>
                <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/company' element={<Company />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/project' element={<Project />} />
                        <Route path='/newproject' element={<NewProject />} />
                        <Route path='/projectedit/:id' element={<ProjectEdit />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default NavBar