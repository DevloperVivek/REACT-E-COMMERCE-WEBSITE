import classes from "./Home.module.css";

const Footer = () => {
  return (
    <footer>
      <h1 className={classes.footertitle}>The Generics</h1>
      <div className={classes.footericons}>
        <ul>
          <li>
            <a href="https://www.youtube.com">
              <img
                src="https://www.iconfinder.com/icons/3225180/app_logo_media_popular_social_youtube_icon"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <img
                src="https://www.iconfinder.com/icons/3225183/app_logo_media_popular_social_twitter_icon"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="https://facebook.com">
              <img
                src="https://www.iconfinder.com/icons/291720/social_media_media_facebook_logo_internet_social_icon"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
