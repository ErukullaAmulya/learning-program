import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <table
        border="1"
        align="center"
        cellPadding="10"
        style={{
          borderCollapse: "collapse",
          color: "green",
          fontSize: "18px",
          boxShadow: "0 0 5px gray"
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.item.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.itemname}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Cart;
