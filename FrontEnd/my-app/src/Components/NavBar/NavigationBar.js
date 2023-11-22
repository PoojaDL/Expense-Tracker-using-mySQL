import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavBar.module.css";

const NavigationBar = () => {
  return (
    <Fragment>
      <Navbar className={styles.nav}>
        <Container className="py-3">
          <Navbar.Brand to="/Home">
            <img
              alt="brandLogo"
              src="https://assets.materialup.com/uploads/c2b5ecb4-ccae-4d53-b0fb-117058776fb4/preview.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <p className="d-inline text-white">Expense Tracker</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavigationBar;
