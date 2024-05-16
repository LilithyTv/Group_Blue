import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function ShoppingCart() {
  return (
    <div>
      <section className="container content-section" id="shopping-cart">
        <h3 style={{ textDecoration: 'underline', textAlign: 'center', marginBottom: '7%' }}>Shopping Cart</h3>
        <table className="table table-hover table-cart">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody className="cart-items"></tbody>
        </table>
        <div className="cart-total">
          <strong className="cart-total-title">Total</strong>
          <span className="cart-total-price">$0</span>
        </div>
        <button type="button" className="btn btn-dark" style={{ marginTop: '10%' }}>
          <FontAwesomeIcon icon={faCartShopping} style={{ marginRight: '6%' }} />Buy
        </button>
      </section>

      <section id="footer">
        <div className="card text-center">
          <div className="card-body">
            <h3 className="card-title"><FontAwesomeIcon icon={faGift} style={{ marginRight: '1%' }} />Westside Belle Cakery</h3>
            <p>Thank you! We're looking forward to seeing you again!</p>
          </div>
          <div className="card-footer text-muted"></div>
        </div>
      </section>
    </div>
  );
}
