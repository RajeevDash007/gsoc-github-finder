import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import OrganizationList from './components/OrganizationList';

export default function Home() {
  return (
    <div>
      <LandingPage />
      <OrganizationList />
      <Footer/>
    </div>
  );
}