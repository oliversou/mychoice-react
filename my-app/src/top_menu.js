import React from "react";
import { Container, Menu, Dropdown, Button, Icon } from "semantic-ui-react";

{/*
logo: https://cdn.shopify.com/s/files/1/0745/1299/t/9/assets/logo.png?10974258040355345946
*/}

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless secondary className="topmenu">
        <Container>
        <Menu.Item fitted className="image">
        <img
           alt="Nomatic Logo"
           src="https://cdn.shopify.com/s/files/1/0745/1299/t/9/assets/logo.png?10974258040355345946"
        />

        </Menu.Item>
          <Menu.Item position="right">BAGS</Menu.Item>
          <Dropdown item text="GEAR" icon="dropdown" />
          <Menu.Item>KICKSTARTER</Menu.Item>
          <Menu.Item>OUR STORY</Menu.Item>
          <Menu.Item icon="user icon" />
          <Menu.Item icon="search" />
        <Button icon>
        <Icon name='shopping cart' />
        CART
        </Button>
        </Container>
        </Menu>
  );
  }
}
