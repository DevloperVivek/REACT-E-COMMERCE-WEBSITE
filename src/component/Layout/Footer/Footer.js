import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footericons}>
        <ul className={classes.footerIconsList}>
          <li>
            <a href="https://www.linkedin.com/in/thevivekraut">
              <img
                src="https://img.icons8.com/?size=1x&id=13930&format=png"
                alt="linkedInImage"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/DevloperVivek">
              <img
                src="https://img.icons8.com/?size=1x&id=63777&format=png"
                alt="githubImage"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/thevivekraut/">
              <img
                src="https://img.icons8.com/?size=1x&id=32323&format=png"
                alt="instagramImage"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
