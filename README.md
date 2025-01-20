
# Fetch Product List App

This is a React application that fetches and displays a list of products from an API. It allows users to search for products by title and displays product details such as title, price, and images. The app uses Axios for data fetching and Next.js's `Image` component for optimized image rendering.

## Features

- Fetches product data from a remote API (`https://api.escuelajs.co/api/v1/products`).
- Allows users to search for products by their title.
- Displays a list of products with images and pricing.
- Handles loading state while data is being fetched.
- Gracefully handles errors and renders a fallback UI if the data is unavailable.

## Technologies Used

- **React.js** for the front-end UI.
- **Next.js** for server-side rendering and optimized image handling.
- **Axios** for data fetching.
- **Tailwind CSS** for styling.
- **React Icons** for UI icons.

## Setup and Installation

To set up this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/fetch-product-list.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd fetch-product-list
   ```

3. **Install dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   Your app will be available at `http://localhost:3000`.

## Project Structure

/project-root
|-- /app
|   |-- /electronics         # Electronics product page
|   |-- /clothes             # Clothes product page
|   |-- /furniture           # Furniture product page
|   |-- /account             # User account details
|   |-- /my-order            # User's order page
|-- /components
|   |-- Fetch.jsx            # Component for fetching and displaying products
|   |-- Navbar.jsx           # Navigation bar for the website
|-- /public
|-- /styles
|   |-- globals.css          # Global CSS file for styling
|-- package.json             # Project dependencies
|-- README.md                # Project documentation
yles/`: Contains the Tailwind CSS configuration and global styles.

## How to Use

1. Open the app in your browser.
2. Use the search bar to filter the list of products by title.
3. View product details including the title, price, and image.

## Example Usage

1. **Search**: Enter a product title in the search bar to filter the results.
2. **Add to Favorites**: You can click the icon (represented by `FaPlus`) to add a product to your favorites (though the actual functionality of adding to favorites isn't implemented in this version).



This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This README provides basic details about your app, how to set it up, and what it does. You can replace `your-username` with your actual GitHub username if you plan to host this project there.
