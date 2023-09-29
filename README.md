# TotlityCorp eCommerce Website (Frontend Challenge)

## Overview

This project is a frontend implementation of an eCommerce website, created as a part of the TotlityCorp frontend challenge. The website allows users to browse products, add them to a shopping cart, adjust quantities, and complete the purchase. It's built using React.js, Vite, and Tailwind CSS.

## Tech Stack

- **React.js**: For building dynamic web interfaces.
- **Vite**: As the build tool and development server, providing fast build times and hot module replacement.
- **Tailwind CSS**: For rapid and custom styling.
- **Redux Toolkit**: To manage the cart state across the application.

## Key Features

1. Browse Products
Users can browse a collection of products. These products are fetched from an external API and displayed as product cards on the website.

2. Add Products to Cart
Users can select products and add them to their shopping cart. This action is reflected in real-time in the cart.

3. Adjust Product Quantities
The shopping cart allows users to adjust the quantity of each product. They can increase or decrease the quantity, and the total price updates accordingly.

4. Remove Products from Cart
Users have the option to remove products from the cart entirely.

5. Calculate Total Price
The web application calculates and displays the total price of all the items in the shopping cart. This feature ensures transparency about the cost of the selected products.

6. Proceed to Checkout
Users can proceed to the checkout page. While this project doesn't fully implement the payment process, it provides a user interface for moving forward to complete the purchase.

Product Data API
The project fetches product data (including product names, images, and prices) from the FakeStoreAPI. This API provides mock product data for testing and development. The use of this API allows developers to showcase products without the need for a backend.

Folder Structure
The project follows a well-organized folder structure:

src/components: Contains reusable components like product cards and the shopping cart component.
src/screens: Includes different screens or pages, such as product listings and checkout.
src/redux: Houses the Redux store, actions, and reducers for managing the cart state.
