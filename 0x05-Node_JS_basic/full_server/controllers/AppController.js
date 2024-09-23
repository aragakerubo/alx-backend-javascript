// 8. Organize a complex HTTP server using Express
// AppController.js

class AppController {
    static getHomepage(request, response) {
        response.status(200).send("Hello Holberton School!");
    }
}

module.exports = AppController;
