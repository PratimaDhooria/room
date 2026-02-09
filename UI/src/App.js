import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/HeaderComponent/Header';
import Banner from './Components/BannerComponent/Banner';
import Nav from './Components/NavComponent/Nav';
import Registration from './Components/RegisterComponent/Registration';
import Contact from './Components/ContactComponent/Contact';
import Service from './Components/ServiceComponent/Service';
import Login from './Components/LoginComponent/Login';
import About from './Components/AboutComponent/About';
import Content from './Components/ContentComponent/Content';
import Booking from './Components/BookingComponent/Booking';
import Room from './Components/RoomComponent/Room';
import Footer from './Components/FooterComponent/Footer';
 import Admin  from './Components/AdminhomeComponent/Admin';
 import Logout from './Components/LogoutComponent/Logout';
import Manageuser from './Components/ManageuserComponent/Manageuser';
import EPAdmin from './Components/EPAdminComponent/EPAdmin'; 
import CPAdmin from './Components/CPAdminComponent/CPAdmin';
import AddCategory from './Components/AddCategory/AddCategory';
import AddSubCategory from './Components/AddSubCategory/AddSubCategory';
import Userhome from './Components/UserhomeComponent/Userhome';
import SearchRentalProperty from './Components/SearchRentalPropertyComponent/SearchRentalProperty';
import SearchSubCategory from './Components/SearchSubCategoryComponent/SearchSubCategory';
import Verifyuser from './Components/VerifyuserComponent/Verifyuser';
// import Charity from './components/CharityComponent/Charity';
// import Payment from './components/PaymentComponent/Payment';
import Success from './Components/SuccessComponent/Success';
 import Cancel from './Components/CancelComponent/Cancel';
import Admincontact from "./Components/AdmincontactComponent/Admincontact";






function App() {
  return (
    <>
    <Header />
      <Banner />
      <Nav/>
      <Routes>
        <Route path="/home" element={<Content />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/service" element={<Service />} ></Route>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/room" element={<Room />}></Route> 
        <Route path="/admin" element={<Admin />} ></Route> 
        <Route path="/manageusers" element={<Manageuser />} />
        <Route path="/epadmin" element={<EPAdmin />} ></Route>
        <Route path="/cpadmin" element={<CPAdmin />} ></Route>
        <Route path='/addcategory' element={<AddCategory />} ></Route>
        <Route path='/addsubCategory' element={<AddSubCategory />} ></Route> 
        <Route path='/user' element={<Userhome />} ></Route>
        <Route path='/searchrp' element={<SearchRentalProperty />} ></Route>
        <Route path='/searchsc/:catnm' element={<SearchSubCategory />} ></Route>
        <Route path='/verify/:vemail' element={<Verifyuser />} ></Route>
        {/* <Route path='/charity' element={<Charity />} ></Route> */}
        {/* <Route path='/payment/:uid/:amt' element={<Payment />} ></Route> */}
         <Route path='/success' element={<Success />} ></Route> 
       <Route path='/cancel' element={<Cancel />} ></Route> 
       <Route path="/admincontact" element={<Admincontact />}></Route>



      

      </Routes>

   
      
      <Footer />
    </>
  );
}

export default App;

