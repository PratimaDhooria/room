import './Service.css';

function Service() {
  return (
    <>
      <div className='services'>
        <h1 className='Feature-services'>Featured Services</h1>
        <p className='offer'> Services we Offer</p>

        <div className='row'>

          <div className='col'>
            <div className='card'>
              <img 
                src="./assets/images/service1.jpg" 
                alt="2BHK Flat in Indore"
              />
              <div className='card-body'>
                <h2 className='h2-body'>2BHK Flat for Rent in Indore</h2>
                <p className='p-body'>
                  Rental 2BHK Apartments in Indore : Rent RS 8,999
                </p>
                <button className='more'>Learn More</button>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card'>
              <img 
                className='card-img' 
                src='./assets/images/images.jpeg'
                alt="Affordable 2BHK Apartment"
              />
              <div className='card-body'>
                <h2 className='h2-body'>2BHK Flat for Rent in Indore</h2>
                <p className='p-body'>
                  Rental 2BHK Apartments in Indore : Rent RS 8,999
                </p>
                <button className='more'>Learn More</button>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card'>
              <img 
                className='card-img1' 
                src='./assets/images/images01.jpeg'
                alt="Premium 2BHK Rental"
              />
              <div className='card-body'>
                <h2 className='h2-body'>2BHK Flat for Rent in Indore</h2>
                <p className='p-body'>
                  Rental 2BHK Apartments in Indore : Rent RS 8,999
                </p>
                <button className='more'>Learn More</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Service;
