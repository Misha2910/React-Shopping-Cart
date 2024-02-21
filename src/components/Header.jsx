import React from "react";
import { Badge, Container, Dropdown, FormControl, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import {FaShoppingCart} from 'react-icons/fa'


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{height:80}}>
      <Container>
        <Navbar.Brand href="#home">
          <a href={"/"}>Shopping Cart</a>
        </Navbar.Brand>
        <Navbar.Text className="search">
            <FormControl style={{width:500}} placeholder="search a product" 
            className="m-auto"/>           
        </Navbar.Text>
        <Dropdown alignRight>
            <Dropdown.Toggle variant="success" >
             <FaShoppingCart color="#fff" fontSize={25}/> 
             <Badge>{10}</Badge>  
            </Dropdown.Toggle>
            <Dropdown.Menu style={{minWidth:370}}>
                <span style={{padding:10}}>Cart is empty</span>
            </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
