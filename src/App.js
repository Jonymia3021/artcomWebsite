import './App.css';
import MainDash from './components/dash/main/MainDash';
import Login from './components/dash/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Services from './pages/Services/Services';
import Team from './pages/Team/Team';
import Innovation from './pages/Innovation/Innovation';
import About from './pages/About/About';
import Work from './pages/Works/Works';
import Clients from './pages/Clients/Clients';
import Contact from './pages/Contact/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Blog from './pages/Blog/Blog';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import WorkDetails from './pages/WorkDetails/WorkDetails';
import NotFound from './pages/404NotFound/NotFound';
import Gallery from './pages/Gallery/Gallery';
import Career from './pages/Career/Career';
import JobDetails from './pages/JobDetails/JobDetails';
import DashContact from './components/dash/DashContact/DashContact';
import DashTeam from './components/dash/DashTeam/DashTeam';
import DashClients from './components/dash/DashClients/DashClients';
import DashGallery from './components/dash/DashGallery/DashGallery';
import DashPartner from './components/dash/DashPartner/DashPartner';
import DashWork from './components/dash/DashWork/DashWork';
import DashCareer from './components/dash/DashCareer/DashCareer';
import DashBlog from './components/dash/DashBlog/DashBlog';
import DashSettings from './components/dash/DashSettings/DashSettings';
import DashTeamAddNew from './components/dash/DashTeam/DashTeamAddNew';
import DashTeamEdit from './components/dash/DashTeam/DashTeamEdit';
import DashClientsAdd from './components/dash/DashClients/DashClientsAdd';
import DashClientsEdit from './components/dash/DashClients/DashClientsEdit';
import DashGalleryAdd from './components/dash/DashGallery/DashGalleryAdd';
import DashPartnerEdit from './components/dash/DashPartner/DashPartnerEdit';
import DashPartnerAdd from './components/dash/DashPartner/DashPartnerAdd';
import DashWorkEdit from './components/dash/DashWork/DashWorkEdit';
import DashWorkAdd from './components/dash/DashWork/DashWorkAdd';
import DashCareerAdd from './components/dash/DashCareer/DashCareerAdd';
import DashCareerEdit from './components/dash/DashCareer/DashCareerEdit';
import DashBlogAdd from './components/dash/DashBlog/DashBlogAdd';
import DashBlogEdit from './components/dash/DashBlog/DashBlogEdit';
import SideIcons from './components/SideIcons/SideIcons';
import GoToTop from './components/GoToTop/GoToTop';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideIcons />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/innovation' element={<Innovation />} />
        <Route path='/team' element={<Team />} />
        <Route path='/work' exact element={<Work />} />
        <Route path='/career' exact element={<Career />} />
        <Route path='/career/:id' element={<JobDetails />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/our-work/:id' element={<WorkDetails />} />
        <Route path='/blog/:id' element={<BlogDetails />} />
        <Route path='/privacy&policy' element={<PrivacyPolicy />} />
        <Route path='/admin' element={<MainDash />}>
          <Route path='contact' element={<DashContact />} />
          <Route path='team' element={<DashTeam />} />
            <Route path='team/new' element={<DashTeamAddNew />} />
            <Route path='team/edit' element={<DashTeamEdit />} />
          <Route path='clients' element={<DashClients />} />
            <Route path='clients/add' element={<DashClientsAdd />} />
            <Route path='clients/edit' element={<DashClientsEdit />} />
          <Route path='gallery' element={<DashGallery />} />
            <Route path='gallery/add' element={<DashGalleryAdd />} />
          <Route path='partner' element={<DashPartner />} />
            <Route path='partner/edit' element={<DashPartnerEdit />} />
            <Route path='partner/add' element={<DashPartnerAdd />} />
          <Route path='work' element={<DashWork />} />
            <Route path='work/edit' element={<DashWorkEdit />} />
            <Route path='work/add' element={<DashWorkAdd />} />
          <Route path='career' element={<DashCareer />} />
            <Route path='career/add' element={<DashCareerAdd />} />
            <Route path='career/edit' element={<DashCareerEdit />} />
          <Route path='blog' element={<DashBlog />} />
            <Route path='blog/add' element={<DashBlogAdd />} />
            <Route path='blog/edit' element={<DashBlogEdit />} />
          <Route path='settings' element={<DashSettings />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <GoToTop />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
