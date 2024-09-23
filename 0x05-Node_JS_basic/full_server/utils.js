// 8. Organize a complex HTTP server using Express
// utils.js

const fs = require("fs");

const readDatabase = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf8", (err, data) => {
            if (err) {
                reject(new Error("Cannot load the database"));
            } else {
                const lines = data.trim().split("\n").filter(Boolean);
                const fields = {};
                lines.forEach((line) => {
                    const [field, student] = line.trim().split(",");
                    if (fields[field] === undefined) {
                        fields[field] = [];
                    }
                    fields[field].push(student);
                });
                resolve(fields);
            }
        });
    });
};
