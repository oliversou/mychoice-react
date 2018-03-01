import React from "react";
import { Grid } from "semantic-ui-react";

{/*
logo: https://cdn.shopify.com/s/files/1/0745/1299/t/9/assets/logo.png?10974258040355345946
1: https://cdn.shopify.com/s/files/1/0745/1299/t/9/assets/h2017-section1-bg.jpg?1627593615616708273
2: https://cdn.shopify.com/s/files/1/0745/1299/t/9/assets/laptop-bag-bg.jpg?1627593615616708273
2-1: https://cdn.shopify.com/s/files/1/0745/1299/t/9/assets/kickstarter_logo_new_res_trans.png?10974258040355345946
3: https://cdn.shopify.com/s/files/1/0745/1299/t/9/assets/h2017-section2-bg.jpg?1627593615616708273
4: https://cdn.shopify.com/s/files/1/0745/1299/t/9/assets/h2017-section3-bg.jpg?1627593615616708273
6: https://cdn.shopify.com/s/files/1/0745/1299/t/9/assets/h2017-section5-bg.jpg?1627593615616708273
divider: https://cdn.shopify.com/s/files/1/0745/1299/t/9/assets/homepage-2017-divider.jpg?1627593615616708273
*/}

export default class MiddleSection extends React.Component {
  render() {
    return (
        <div className="hero-container">
        <Grid
    centered
    columns={2}
    textAlign="center"
    verticalAlign="middle"
    style={{ height: "500px" }}
  >
  <Grid.Column centered>
    <img
    alt="Murphy's hero logo"
    src="http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png"
        />
        </Grid.Column>
        <Grid.Column>
        A traditional downtown saloon and eatery located in the Honolulu
    Financial District, just one block off the waterfront, Murphy’s has
    been a haven for mariners, businessmen and locals since 1891.
    </Grid.Column>
    </Grid>
    </div>
  );
  }
}
