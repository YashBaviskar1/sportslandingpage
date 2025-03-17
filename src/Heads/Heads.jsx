
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
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039328/heads/lubeioe6p1yt7blgobcu.png"
              alt="Stharva Shibe"
            />
          </div>
          <div className="t-b-text">
            <strong>ATHARVA SHIBE</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039328/heads/rcq2qnx7bvjejbcbh1jt.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>SUSHMITA KOCHARKAR</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039319/heads/vbw0xkxgvlykkfgjwqgw.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>VEDANT MORE</strong>
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
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039333/heads/jxxomqtoyjgza48jbyhx.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>KUNAL YADAV</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039323/heads/g2mlnkvzjmvd7ynyfqwk.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>VIDHI SHARMA</strong>
            <span>Co-Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039323/heads/anwelwsgnrms2ofkktmb.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>ATHARVA PATIL</strong>
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
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039322/heads/hxhlegrg1cufaldcy6bb.png"
              alt="Harsh-maurya"
            />
          </div>
          <div className="t-b-text">
            <strong>HARSH MOURYA</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039326/heads/madqa6otvjwebwpbkasi.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>VAISHNAVI BAGMAR</strong>
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
            <strong>TANVI PAWAR</strong>
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
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039326/heads/rnbypkwnmvlmwkcin7rh.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>HARSH GAIKWAD</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039328/heads/sb3evxexxh478ab5kfnr.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>AKSHAT MUPPIRI</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039319/heads/rk2t8g5fqgm7uolupjed.png"
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
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039316/heads/esn2kxibjnjt7nx0l5gd.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>SHREYASH GHARGE</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039333/heads/yn8dqicheydlcbxogul5.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>HARSHIT JAIN</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039324/heads/rswuhcyfdxpv3ofyw9mi.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>ONKAR DESHPANDE</strong>
            <span>Co-Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039316/heads/reerkz8ttio95k90d4gr.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>AMEY AVHAD</strong>
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
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039318/heads/ussrexpzfy0pxqjnj4i6.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>SAIL DALVI</strong>
            <span>Head</span>
          </div>
        </div>
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039315/heads/jj5sjilgqk6njflbufpm.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>AABHA BHIDE</strong>
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
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039324/heads/wk963g3cbuenoj97cfbg.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>SAIRAJ WAJE</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039319/heads/vvbqfpwzybxhedrkh97w.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>SHUBAM PATIL</strong>
            <span>Co-Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039331/heads/ha7ko9mvw1rnjev2jshb.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>SHIVAM PAWAR</strong>
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
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039314/heads/btj5a365hxk8nkyv2vmu.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>ABHISHEK SALI</strong>
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
            <strong>PRATHAMESH MORE</strong>
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
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039314/heads/eqxheehgdrjnqblwq0a2.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>BRAHMJOT SINGH</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039315/heads/zlhx7jwqxifg9vd1clsp.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>DHRUV PAWAR</strong>
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
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039323/heads/ihhqg4vugsasslzfhwyx.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>PRIYESH JOGU</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039317/heads/zdkamhtxdjddieqdxdhm.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>ANUSHKA KANGANE</strong>
            <span>Head</span>
          </div>
        </div>

         <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039321/heads/cpbc7mkicgli4wg0dy0r.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>KUNAL PINGULKAR</strong>
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
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039320/heads/znubqix6s3uhdkwjhclw.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>MAITHILI CHALKE</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039331/heads/njnfpdgr6ieggmaogd1h.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>VARUNKUMAR LYSETTI</strong>
            <span>Head</span>
          </div>
        </div>
      </section>

      <div id="nav">
        <center>
          <h2>HOSTING & ANCHORING</h2>
        </center>
      </div>
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039328/heads/fkwzutxlgyupjkfmxn3a.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>NESAR WAGANNAWAR</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/divma6tu0/image/upload/v1742039318/heads/lb6ercdtgnwuuczve3ei.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>PRANAV JAIN</strong>
            <span>Head</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="madeWithLove">
        <h5>
          Made with ❤ by <a href="https://ojus-web-dev.vercel.app/">Ojus Webdev</a>
        </h5>
      </section>

      {/* Scroll to top button */}
      <div onClick={scrollToTop} className="scrollTop">
        <i className="fa-solid fa-arrow-up">To Top</i>
      </div>
    </div>
  );
};

export default Heads;
