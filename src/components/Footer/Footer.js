function Footer() {
  return (
    <div className="Footer">
      <p className="portfolio">
        Built by{' '}
        <a
          className="portfolio-link"
          href="https://woosikchoi.com"
          target="_blank"
          rel="noopenner noreferrer"
        >
          WOO-SIK CHOI
        </a>{' '}
        in January 2022
      </p>
      <p className="credit">
        Powered by{' '}
        <a
          className="credit-link"
          href="https://api.nasa.gov/"
          target="_blank"
          rel="noopenner noreferrer"
        >
          NASA API
        </a>
      </p>
    </div>
  );
}

export default Footer;
