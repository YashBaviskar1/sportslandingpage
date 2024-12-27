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
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735288102/Heads/czdbklbehc5wpsqdmcjs.png"
              alt="Harsh-maurya"
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
          <h2>PR & SPONSORSHIP</h2>
        </center>
      </div>
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735235680/Heads/jwemhrni7ds0xu5uedqz.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>Harsh Gaikwad</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735235969/Heads/apvddbupkmwx1pi1w9co.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Akshat MUPPIRI</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735235813/Heads/isuy3hwckgtashckrom8.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>YASH APTE</strong>
            <span>Co-Head</span>
          </div>
        </div>
      </section>
      <div id="nav">
        <center>
          <h2>LOGISTICS</h2>
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
            <strong>Shreyash Gharge</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735236214/Heads/kvho8x25ue897wvkcdv2.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Harshit Jain</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735236284/Heads/ml9mn8m1mpp90ueqtkwe.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Onkar Deshpande</strong>
            <span>Co-Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735236357/Heads/cv38qzzbchafukeqsj3m.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>Amey Avhad</strong>
            <span>Co-Head</span>
          </div>
        </div>
      </section>
      <div id="nav">
        <center>
          <h2>HOSPITALITY</h2>
        </center>
      </div>
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735236761/Heads/xyh1uqsb0xjpiqpep8g8.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>Sail Dalvi</strong>
            <span>Head</span>
          </div>
        </div>
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735236793/Heads/uzc6zohn54q7ypmececd.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>Abha Bhide</strong>
            <span>Head</span>
          </div>
        </div>
      </section>
      <div id="nav">
        <center>
          <h2>SECURITY</h2>
        </center>
      </div>
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735236987/Heads/b1xmtcp1va7y1gtr2cxq.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>Sairaj Waje</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735236992/Heads/w7ntwh9bjalqflxq6hit.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Shubam Patil</strong>
            <span>Co-Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735237089/Heads/qb3d9uho8warracfkbap.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>Shivam Pawar</strong>
            <span>Co-Head</span>
          </div>
        </div>
      </section>
      
        <div id="nav">
        <center>
          <h2>CINEMATOGRAPHY</h2>
        </center>
      </div>
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735238637/Heads/hhcoeexuogneyirpixmn.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>Abhishek Sali</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735236992/Heads/w7ntwh9bjalqflxq6hit.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Prathamesh More</strong>
            <span>Head</span>
          </div>
        </div>
      </section>

              <div id="nav">
        <center>
          <h2>PHOTOGRAPHY</h2>
        </center>
      </div>
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735238861/Heads/frebihotbtswenehskps.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>Brahmjot Singh</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735238895/Heads/odgyehjubruwco6jyixm.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Dhruv Pawar</strong>
            <span>Head</span>
          </div>
        </div>
      </section>

      <div id="nav">
        <center>
          <h2>PUBLICITY</h2>
        </center>
      </div>
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735239211/Heads/sjhtvl9swsxl6x2kfoe4.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>Priyesh Jogu</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735289587/Heads/jucbtommzp8csfkwmoxx.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Anushka Kangane</strong>
            <span>Head</span>
          </div>
        </div>

         <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735289600/Heads/ajudxxjsi87yzm3l80bz.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Kunal Pingulkar</strong>
            <span>Co-Head</span>
          </div>
        </div>
      </section>


       <div id="nav">
        <center>
          <h2>LITERATURE</h2>
        </center>
      </div>
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735238861/Heads/frebihotbtswenehskps.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>Priyesh Jogu</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735238895/Heads/odgyehjubruwco6jyixm.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Anushka Kangane</strong>
            <span>Head</span>
          </div>
        </div>

         <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735236992/Heads/w7ntwh9bjalqflxq6hit.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Kunal Pingulkar</strong>
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
