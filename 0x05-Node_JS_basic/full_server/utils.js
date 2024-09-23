import fs from "fs/promises";

export async function readDatabase(filePath) {
    try {
        const data = await fs.readFile(filePath, "utf8");
        const lines = data.trim().split("\n");
        const fieldData = {};
        for (const line of lines.slice(1)) {
            // Skip header
            const [firstname, , , field] = line.split(",");
            if (!fieldData[field]) {
                fieldData[field] = [];
            }
            fieldData[field].push(firstname);
        }
        return fieldData;
    } catch (error) {
        throw new Error("Cannot load the database");
    }
}
