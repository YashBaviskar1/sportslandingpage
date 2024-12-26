import React, { useEffect } from 'react';
import './Heads.css'; // assuming heads.css is in your src folder

const Heads = () => {
  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {

    // IntersectionObserver to highlight the nav items based on section visibility
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('#nav h2');
    const navArray = Array.from(navItems);

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = navArray.findIndex(
            navItem => navItem.textContent === entry.target.dataset.section
          );
          if (index !== -1) {
            navArray.forEach((navItem, i) => {
              navItem.classList.toggle('active', i === index);
            });
          }
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });
  }, []);

  return (
    <div>
      {/* Navigation */}
      <div id="nav">
        <center>
          <h2>Event Management</h2>
        </center>
      </div>

      {/* Team Section */}
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735204545/Heads/vkfudwnsgfidnwrl8qn0.png"
              alt="Stharva Shibe"
            />
          </div>
          <div className="t-b-text">
            <strong>Atharva Shibe</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735204250/Heads/gahvaas46cetlyfziwac.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Sushmita Kocharkar</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735204567/Heads/adcufmu3aoebov4dzrdx.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>Vedant More</strong>
            <span>Co-Head</span>
          </div>
        </div>
      </section>

      <div id="nav">
        <center>
          <h2>CREATIVE</h2>
        </center>
      </div>
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735204836/Heads/reojg6dcft2rjznuhymb.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>Kunal Yadav</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735204954/Heads/psb5uplxqln5xwdfkjbz.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Vidhi Sharma</strong>
            <span>Co-Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735204854/Heads/ukwna4ds0oklebkoyhgv.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>Atharva Patil</strong>
            <span>Co-Head</span>
          </div>
        </div>
      </section>
      <div id="nav">
        <center>
          <h2>Design</h2>
        </center>
      </div>
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735205684/Heads/yekreoqy9vmtuolquiwf.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>Harsh Maurya</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735205262/Heads/mburtqm9thig7lfxlsc6.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Vaishnavi Bagmar</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735205446/Heads/mto9pconaahywfwhnx9p.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>Aryan Yadav</strong>
            <span>Co-Head</span>
          </div>
        </div>
      </section>
      <div id="nav">
        <center>
          <h2>Event Management</h2>
        </center>
      </div>
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>Krish Jaswal</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/miheet_shah_z22bpc.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Miheet Shah</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>Dravesh Jain</strong>
            <span>Co-Head</span>
          </div>
        </div>
      </section>
      <div id="nav">
        <center>
          <h2>Event Management</h2>
        </center>
      </div>
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>Krish Jaswal</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/miheet_shah_z22bpc.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Miheet Shah</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>Dravesh Jain</strong>
            <span>Co-Head</span>
          </div>
        </div>
      </section>
      <div id="nav">
        <center>
          <h2>Event Management</h2>
        </center>
      </div>
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>Krish Jaswal</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/miheet_shah_z22bpc.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Miheet Shah</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>Dravesh Jain</strong>
            <span>Co-Head</span>
          </div>
        </div>
      </section>
      <div id="nav">
        <center>
          <h2>Event Management</h2>
        </center>
      </div>
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>Krish Jaswal</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/miheet_shah_z22bpc.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Miheet Shah</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>Dravesh Jain</strong>
            <span>Co-Head</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="madeWithLove">
        <h5>
          Made with ❤️ by <a href="/team">Ojus Webdev</a>
        </h5>
      </section>

      {/* Scroll to top button */}
      <div onClick={scrollToTop} className="scrollTop">
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </div>
  );
};

export default Heads;
