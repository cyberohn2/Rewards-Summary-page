
# Rewards Summary Page for Bouncee

This project is a ReactJS component developed for the Rewards Summary page of the Bouncee platform. It allows users to track earnings, view cashback transaction history, and cash out rewards using either direct cashout or promo codes. The page is styled using Tailwind CSS and features smooth animations and modern UI components.

## Features

1. **Earnings Overview**:
   - Displays the total cashback accumulated from all bookings.
   - Shows the current balance available for withdrawal.
   - Includes a count-up animation for the current balance.

2. **Cashback History**:
   - Displays a list of previous cashback transactions.
   - Each transaction includes the service name, transaction date, booking ID, and the amount earned.

3. **Cashout Options**:
   - Users can cash out their rewards using one of two methods:
     1. **Direct Cashout**: Withdraw directly to a bank account.
     2. **Promo Codes**: Convert cashback to promo codes.
   - The forms for each option are validated based on the user's current balance and standard form validation rules.

## Installation and Setup

To set up this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/cyberohn2/rewards-summary-page.git
   ```

2. Navigate to the project directory:
   ```bash
   cd rewards-summary-page
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

The project follows a simple and clean structure, with the main components housed in the `src/components` folder:

- **Overview.jsx**: Displays accumulated cashback and current balance, with a count-up animation for the balance.
- **CashoutOption.jsx**: Provides users with two options to cash out: direct cashout and promo codes, each with a form for submitting the user's choice.
- **History.jsx**: Displays a list of cashback transactions, including details like service name, transaction date, booking ID, and amount earned.
- **Sidebar.jsx**: Enhances the user interface by adding a visually appealing sidebar.

## Data Handling

The project uses mock data from a hardcoded JSON file, simulating cashback transactions and user balances. No external APIs are connected, and the JSON file serves as a stand-in for real data.

## Animations

The Earnings Overview section features a count-up animation that starts from 0 and counts to the current balance, enhancing the user experience with a modern UI effect.

## Deployment

The project is deployed on Vercel. You can view the live version here:

[Rewards Summary Page Live Demo](https://rewards-summary-page.vercel.app/)

## Future Improvements

In future updates, the following features will be added:

- **Promo Code History**: A section to display the list of promo codes generated from previous cashouts using the promo code method.

## Tools and Libraries

- **React.js**: The core library for building the user interface.
- **Tailwind CSS**: Used for styling the components with a utility-first approach.
- **Vercel**: For deploying the live version of the project.

---

