# CNFans Best Links

This project is a web application that displays categorized product links fetched from a Google Spreadsheet. It is built using Node.js, Express, and EJS for server-side rendering.

## Features

- Fetches product data from a Google Spreadsheet using the Google Sheets API.
- Displays products in a grid layout with images, names, prices, and links.
- Allows filtering of products by category (e.g., T-Shirts, Hoodies, Shoes, etc.).
- Responsive design for better user experience on different devices.

## Project Structure

### Files and Directories

- **`app.js`**: The main server file that handles routing and data fetching.
- **`views/index.ejs`**: The EJS template for rendering the homepage and category pages.
- **`public/css/style.css`**: The CSS file for styling the application.
- **`.env`**: Contains sensitive environment variables like the Google API key and spreadsheet ID.
- **`package.json`**: Defines project dependencies and scripts.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.

### Environment Variables

The `.env` file contains the following variables:
- `API_KEY`: Your Google Sheets API key.
- `spreadsheetId`: The ID of the Google Spreadsheet containing product data.

### Google Spreadsheet Format

The application expects the Google Spreadsheet to have the following columns:
1. **Column A**: Product ID
2. **Column B**: Product Name
3. **Column C**: Image URL
4. **Column D**: Product Link
5. **Column E**: Price
6. **Column F**: Category ID (e.g., 0 for T-Shirts, 1 for Hoodies, etc.)

### Category Mappings

The following category IDs are used in the application:

| Category ID | Category Name       |
|-------------|---------------------|
| 0           | T-Shirts            |
| 1           | Hoodies/Sweaters    |
| 2           | Shoes               |
| 3           | Jackets             |
| 4           | Pants/Shorts        |
| 5           | Headwear            |
| 6           | Accessories         |

## How It Works

1. **Data Fetching**: The server fetches product data from the Google Spreadsheet using the Google Sheets API.
2. **Rendering**: The data is passed to the EJS template, which renders the product grid dynamically.
3. **Category Filtering**: Users can filter products by category using the navigation menu.
