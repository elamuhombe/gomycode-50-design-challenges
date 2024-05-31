module.exports = {
  content: [
    './index.html',            // Include the root index.html file
    './src/styles/**/*.{html,js}', // Include HTML and JS files in src/styles directory
    './src/**/*.{html,js,jsx,ts,tsx}', // Include all relevant files in the src directory and subdirectories
  ],
  theme: {
    extend: {
     
    },
  },
  plugins: [],
}
