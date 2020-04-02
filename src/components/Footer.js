import React from 'react';
import { MDBIcon, MDBContainer, MDBFooter } from 'mdbreact';

const FooterPage = () => {
  return (
    <MDBFooter
      color='blue'
      className='font-small py-3 mt-4 footer-copyright text-center'
    >
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright:
        <a href='https://www.mdbootstrap.com'> MDBootstrap.com </a>
        <MDBIcon fab icon='mdb' />
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPage;
