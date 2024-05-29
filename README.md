# Image Processing API
This API receives three query parameters: filename, width, and height, if all the queries are valid, it will return the resized image. This API allows This project reads and writes to the disk via a Node.js express server rather than a database.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/HomingWU/Image-Processing-API.git
   ```
2. Navigate to the project directory:
   ```bash
   cd image-processing-API
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
## Usage
1. Start the server:
   ```bash
   npm start
   ```
2. Visit the route in the browser or use Postman:
   ```
   http://localhost:3000/api/images?filename=${filename}&width=${width}&height=${height}
   ```
   for example:
   ```
   http://localhost:3000/api/images?filename=icelandwaterfall&width=100&height=100
   ```
   **Note: only the filenames of files in the image folder are valid**
## Default Tests:
```bash
npm test
```
## License

[License](LICENSE.txt)
