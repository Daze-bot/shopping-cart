import React from "react";
import GitHub from '../imgs/gitHub.png';
import Twitter from '../imgs/twitter.png';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="allContacts">
        <div className="contactGitHub">
          <img src={GitHub} alt="GitHub"></img>
          <h3>Behind the Scenes</h3>
          <p>Take a look at the code for this website, as well as many other projects made by the developer. More to come!</p>
          <a href="https://github.com/Daze-bot" target="blank">
            <button>GitHub</button>
          </a>
        </div>
        <div className="contactTwitter">
          <img src={Twitter} alt="Twitter"></img>
          <h3>Follow Us</h3>
          <p>Keep up with all of the latest news and info from the development team.  This store was made as part of The Odin Project.</p>
          <a href="https://twitter.com/Code4Daze" target="blank">
            <button>Twitter</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
