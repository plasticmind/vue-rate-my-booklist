const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    try {
        const books = await table.select().firstPage();
        const formattedBooks = books.map((book) => ({
            id: book.id,
            ...book.fields,
        }));
        return formattedReturn(200, formattedBooks);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, {});
    }
};