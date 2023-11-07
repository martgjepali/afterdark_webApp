import Image1 from '../assets/images/club1.jpg';

const HomeCards = () => {
  return (
    <div className="row">
    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="portfolio-item">
        <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img className="img-fluid" src={Image1} alt="Venue Club" />
        </a>
        <div className="portfolio-caption bg-dark">
          <div className="portfolio-caption-heading text-white">Venue Club</div>
        </div>
      </div>
    </div>

    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="portfolio-item">
        <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img className="img-fluid" src={Image1} alt="Venue Club" />
        </a>
        <div className="portfolio-caption bg-dark">
          <div className="portfolio-caption-heading text-white">Venue Club</div>
        </div>
      </div>
    </div>

        <div className="col-lg-4 col-sm-6 mb-4">
      <div className="portfolio-item">
        <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img className="img-fluid" src={Image1} alt="Venue Club" />
        </a>
        <div className="portfolio-caption bg-dark">
          <div className="portfolio-caption-heading text-white">Venue Club</div>
        </div>
      </div>
    </div>

  </div>
  );
};

export default HomeCards;
