# Project 

This project implements various features, including User Management, Chat Functionality, and Recurring Payment using Stripe. Below are the details and instructions for setting up and running the project.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Stripe Configuration](#stripe-configuration)
- [Webhooks](#webhooks)

## Features

1. User Management:
   - Create, Read, Update, and Delete user accounts
   - List users with search, filter, and sort using DataTables
   - Password reset via email
   - MongoDB storage for user data

2. Chat Functionality:
   - Real-time communication using Socket.io
   - One-to-one chat between admin and users
   - MongoDB storage for chat messages

3. Recurring Payment using Stripe:
   - Stripe integration for payment processing
   - Handle recurring payments using Stripe's API
   - Handle Stripe webhook events for payment status
   - Store payment data in your database

## Installation

1. Clone this repository to your local machine:
- git clone "repo url"

2. Navigate to the project directory:
- cd admin-panel
- Install the required dependencies:
- npm install


## Configuration

1. Set up environment variables:
- Copy the `.env.example` file to `.env`.
- Fill in your environment variables, such as database connection details, Stripe API keys, etc.

2. Configure MongoDB:
- Ensure you have MongoDB running and accessible.
- Update the MongoDB connection string in your `.env` file.

## Usage

1. Run the application:
- npm start


3. Navigate through the different features using the provided routes.

## Stripe Configuration

1. Sign up for a Stripe account if you don't have one.

2. Obtain your Stripe API keys (Publishable and Secret) from the Stripe Dashboard.

3. Configure your `.env` file with the following Stripe-related variables:
- `STRIPE_PUBLIC_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`

## Webhooks

Stripe Webhooks are used to receive events from Stripe. Ensure you have properly configured the webhook endpoint in your Stripe Dashboard.

For handling Stripe webhooks, refer to the `stripeWebhookController.js` file and set up the appropriate logic for your application's needs.


