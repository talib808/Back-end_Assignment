const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
exports.stripe = stripe;

exports.getCheckoutPage = (req, res) => {
  // Render the checkout page view
  res.render("payment/checkout");
};

exports.createSubscription = async (req, res) => {
  try {
    const customer = await stripe.customers.create({
      email: req.body.email,
      source: req.body.stripeToken,
    });

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: "price_id" }], // Replace with your product price ID
    });

    res.redirect("/payment/success");
  } catch (error) {
    console.error(error);
    res.redirect("/payment/failure");
  }
};

exports.handleWebhook = (req, res) => {
  const sig = req.headers["stripe-signature"];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
  } catch (err) {
    console.error("Webhook error:", err);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle different types of events
  switch (event.type) {
    case "payment_intent.succeeded":
      // Handle successful payment
      const paymentIntent = event.data.object;

      break;
    case "payment_intent.payment_failed":
      // Handle payment failure
      const failedPaymentIntent = event.data.object;

      break;
    case "customer.subscription.created":
      // Handle subscription creation
      const subscription = event.data.object;

      break;
    case "customer.subscription.updated":
      // Handle subscription update
      const updatedSubscription = event.data.object;

      break;
    case "customer.subscription.deleted":
      // Handle subscription cancellation
      const canceledSubscription = event.data.object;

      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  // Respond to the webhook
  res.json({ received: true });
};
