/*import React from 'react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from   "./RTK/Slices/cartSlice";
import { useNavigate } from "react-router-dom";

const PayPalButton = ({ totalPrice }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart) || [];
  const user = useSelector((state) => state.user);
  const [{ isPending }] = usePayPalScriptReducer();

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: totalPrice.toFixed(2),
          currency_code: "USD"
        },
        description: `Purchase from MyStore - ${cart.length} items`
      }],
      application_context: {
        shipping_preference: "NO_SHIPPING"
      }
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function(details) {
      // عرض رسالة نجاح
      alert(`Transaction completed by ${details.payer.name.given_name}!`);
      
      // مسح السلة بعد الدفع الناجح
      dispatch(clearCart());
      
      // توجيه إلى صفحة الشكر أو الرئيسية
      navigate("/thank-you");
    });
  };

  const onError = (err) => {
    console.error("PayPal Checkout onError", err);
    alert("An error occurred with your payment. Please try again.");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {isPending ? <div>Loading PayPal...</div> : null}
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
        style={{
          layout: "vertical",
          color: "blue",
          shape: "rect",
          label: "paypal"
        }}
      />
    </div>
  );
};

export default PayPalButton;*/











































/*import React from 'react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./RTK/Slices/cartSlice";
import { useNavigate } from "react-router-dom";

const PayPalButton = ({ totalPrice }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart) || [];
  const user = useSelector((state) => state.user);
  const [{ isPending }] = usePayPalScriptReducer();

  // إنشاء الطلب عبر الـ Backend
  const createOrder = async (data, actions) => {
    try {
      const response = await fetch('http://localhost:7000/api/paypal/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          totalAmount: totalPrice.toFixed(2),
          items: cart,
          currency: 'USD'
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create order');
      }
      
      const orderData = await response.json();
      return orderData.orderID;
    } catch (error) {
      console.error('Error creating order:', error);
      alert(error.message || 'Failed to create order. Please try again.');
      throw error;
    }
  };

  // تأكيد الدفع عبر الـ Backend
  const onApprove = async (data, actions) => {
    try {
      const response = await fetch('http://localhost:7000/api/paypal/capture-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderID: data.orderID
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        alert(`Payment successful! Order ID: ${data.orderID}`);
        dispatch(clearCart());
        navigate("/thank-you");
      } else {
        alert('Payment failed: ' + (result.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error capturing payment:', error);
      alert('Payment processing failed. Please try again.');
    }
  };

  const onError = (err) => {
    console.error("PayPal Checkout Error:", err);
    alert("An error occurred with your payment. Please try again.");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {isPending && <div>Loading PayPal...</div>}
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
        style={{
          layout: "vertical",
          color: "blue",
          shape: "rect",
          label: "paypal"
        }}
      />
    </div>
  );
};

export default PayPalButton;*/








 import React from 'react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./RTK/Slices/cartSlice";
import { useNavigate } from "react-router-dom";

const PayPalButton = ({ totalPrice }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart) || [];
  const [{ options, isPending }] = usePayPalScriptReducer();

  const createOrder = (data, actions) => {
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          reference_id: new Date().getTime().toString(),
          description: "Purchase from our store",
          amount: {
            currency_code: "USD",
            value: totalPrice.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: totalPrice.toFixed(2)
              }
            }
          },
          items: cart.map(item => ({
            name: item.title,
            description: item.description || "Product description",
            sku: item.id.toString(),
            unit_amount: {
              currency_code: "USD",
              value: item.price.toFixed(2)
            },
            quantity: item.quantity.toString(),
            category: "PHYSICAL_GOODS"
          }))
        }
      ]
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture(data.orderID).then((details) => {
      console.log("Payment details:", details);
      
      // التحقق من حالة الدفع
      const status = details.status;
      const transaction = details.purchase_units[0].payments.captures[0];
      
      if (status === "COMPLETED" && transaction.status === "COMPLETED") {
        alert(`Payment completed successfully! Transaction ID: ${transaction.id}`);
        dispatch(clearCart());
        navigate("/thank-you", { 
          state: { 
            orderId: data.orderID, 
            transactionId: transaction.id,
            status: "completed"
          } 
        });
      } else {
        throw new Error(`Payment not completed. Status: ${status}`);
      }
    });
  };

  const onError = (err) => {
    console.error("PayPal error:", err);
    
    // تحليل الخطأ وتقديم رسالة مناسبة
    let errorMessage = "An error occurred with your payment. Please try again.";
    
    if (err.message) {
      if (err.message.includes('popup')) {
        errorMessage = "You closed the PayPal window before completing the payment.";
      } else if (err.message.includes('TOKEN')) {
        errorMessage = "Your payment session has expired. Please try again.";
      } else if (err.message.includes('DECLINED')) {
        errorMessage = "Your payment was declined. Please try a different payment method.";
      } else if (err.message.includes('DUPLICATE')) {
        errorMessage = "This appears to be a duplicate transaction. Please check if you were already charged.";
      }
    }
    
    alert(errorMessage);
  };

  const onCancel = (data) => {
    console.log("Payment cancelled:", data);
    alert("You have cancelled the payment. You can return to complete your purchase later.");
  };

  if (isPending) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #ddd'
      }}>
        <div style={{ marginRight: '10px' }}>
          <div className="spinner"></div>
        </div>
        <span>Loading PayPal...</span>
        <style jsx>{`
          .spinner {
            border: 3px solid rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            border-top: 3px solid #3498db;
            width: 20px;
            height: 20px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <PayPalButtons
        style={{
          layout: "vertical",
          color: "blue",
          shape: "rect",
          label: "paypal",
          height: 48
        }}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
        onCancel={onCancel}
        options={{
          disableFunding: "card,credit,venmo",
          currency: "USD"
        }}
      />
    </div>
  );
};

export default PayPalButton;
