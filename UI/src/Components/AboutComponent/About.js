import './About.css';

function About() {
  return (
    <>
      <section className="about-section">
        <div className="about-container">

          {/* ABOUT IMAGE */}
          <div className="about-image">
            <img 
              src="/assets/images/1.jpg" 
              alt="Room for Rent"
            />
          </div>

          <h2 className="about-title">About Us</h2>

          <p className="about-text">
            Room for Rent is a trusted online platform that helps people find safe,
            comfortable, and affordable rental rooms with ease.
          </p>

          <p className="about-text">
            Our platform is designed for students, working professionals, and families
            who are looking for the perfect place to stay.
          </p>

          <div className="about-mission">
            <h2>Our Mission</h2>
            <p>
              To provide safe, affordable, and comfortable rental accommodations for everyone.
            </p>
          </div>

          <div className="about-vision">
            <h2>Our Vision</h2>
            <p>
              To become one of the most trusted room rental platforms in India.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default About;
