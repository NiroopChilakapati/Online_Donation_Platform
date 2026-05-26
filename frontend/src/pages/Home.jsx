import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../App.css';

function Home() {
  return (
    <div className="page">
      <div className="card home-page">
        <Navbar />

        <section className="hero">
          <div className="hero-content">
            <h2>Online DONATION</h2>

            <h3>Platform</h3>

            <p>
              Help people in need by donating to trusted causes. Your small
              contribution can bring a big change in someone’s life.
            </p>

            <Link to="/register" className="register-btn">
              REGISTER
            </Link>
          </div>

          <div className="hero-image">
            <div className="phone">
              <div className="phone-header"></div>

              <div className="heart">❤</div>

              <h4>DONATION</h4>

              <div className="line"></div>
              <div className="line short"></div>
            </div>

            <div className="coins">
              <div className="coin">$</div>
              <div className="money"></div>
            </div>

            <div className="person"></div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Home;