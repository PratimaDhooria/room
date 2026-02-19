import './Service.css';

function Service() {
  return (
   <>
     <div className='services'>
        <h1 className='Feature-services'>Featured Services</h1>
        <p className='offer'> Services we Offer</p>
        <br />
        <br />
        <br />

        <div className='row'>
          <div className='col'>
            <div className='card'>
              <img src="./assets/images/service1.jpg" alt="Service 1" />

               <div className='card-body'>
                <h2 className='h2-body'>2BHK Flat for Rent in indore </h2>
                <p className='p-body'>
                   Rental 2BHK Apartments in indore : Rent RS 8,999
                </p>
                <button className='more'>Learn More</button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <img className='card-img' src='./assets/images/images.jpeg'></img>
              <div className='card-body'>
                <h2 className='h2-body'>2BHK Flat for Rent in indore </h2>
                <p className='p-body'>
                   Rental 2BHK Apartments in indore : Rent RS 8,999
                </p>
                <button className='more'>Learn More</button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <img className='card-img1' src='./assets/images/images01.jpeg'></img>
              <div className='card-body'>
                <h2 className='h2-body'>2BHK Flat for Rent in indore </h2>
                <p className='p-body'>
                   Rental 2BHK Apartments in indore : Rent RS 8,999
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
