import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Container } from "react-bootstrap";

const FullLayout = () => {
  return (
    <main>
      <div className='contentArea'>
        {/********header**********/}
        <Navbar />
        {/********Middle Content**********/}
        <Container className='p-0 w-0' fluid>
          <Outlet />
        </Container>
        <Footer />
      </div>
    </main>
  );
};

export default FullLayout;
