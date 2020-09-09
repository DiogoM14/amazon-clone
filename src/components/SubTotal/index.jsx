import React from "react";
import CurrencyFormat from "react-currency-format";

import { Container } from "./styles";

export default function index() {
  return (
    <Container>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): {/* Total de itens */}
              <strong>0</strong>
            </p>
            <small>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // Valor a pagar
        displayType={"text"}
        thousandSeparator={true} // Virgulas em valores de milhar
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </Container>
  );
}
