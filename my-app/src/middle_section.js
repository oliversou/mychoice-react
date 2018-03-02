import React from "react";
import { Grid } from "semantic-ui-react";

{/*
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
        <div className="part1">
        <Grid
    textAlign="center"
    verticalAlign="middle"
  >
    <Grid.Row>
        <h2> NOMATIC DESIGNS THE MOST FUNCTIONAL BAGS FOR</h2>
    </Grid.Row>

    <Grid.Row>
    <h1>LIFE ON THE MOVE</h1>
    </Grid.Row>

    <Grid.Row>

    </Grid.Row>

    </Grid>
    </div>
  );
  }
}
