import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import { Navbar } from './components/Navbar';
import OrganizationList from './components/OrganizationList';

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <OrganizationList />
      <Footer/>
    </div>
  );
}