import React from "react";
import CurrencyFormat from "react-currency-format";

import { Container } from "./styles";
import { useStateValue } from "../../store/StateProvider";
import { getBasketTotal } from "../../store/reducer";

export default function Index() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <Container>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): {/* Total de itens */}
              <strong>{value}</strong>
            </p>
            <small>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Valor a pagar
        displayType={"text"}
        thousandSeparator={true} // Virgulas em valores de milhar
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </Container>
  );
}
