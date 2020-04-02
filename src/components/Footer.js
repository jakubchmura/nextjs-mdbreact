import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

const FooterPage = () => {
  return (
    <MDBFooter
      color='blue'
      className='font-small py-3 mt-4 footer-copyright text-center'
    >
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright:
        <a href='https://www.mdbootstrap.com'> MDBootstrap.com </a>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPage;
