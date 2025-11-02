import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [loading, setLoading] = useState(false);

  const handleBuyClick = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "https://zerodha-fullstack-clone-34y6.onrender.com/newOrder",
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        }
      );

      console.log("Order placed successfully:", response.data);

      // Close the buy window
      GeneralContext.closeBuyWindow();

      // Refresh page so Orders list updates
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      console.error("❌ Error placing order:", error);
      alert("Failed to place order. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              min="1"
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              min="0"
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link
            className="btn btn-blue"
            onClick={handleBuyClick}
            style={{ pointerEvents: loading ? "none" : "auto", opacity: loading ? 0.6 : 1 }}
          >
            {loading ? "Processing..." : "Buy"}
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
