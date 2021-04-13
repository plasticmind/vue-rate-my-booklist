const formattedReturn = require('./helpers/formattedReturn');
const getBooks = require('./helpers/getBooks');
const createBook = require('./helpers/createBook');
const deleteBook = require('./helpers/deleteBook');
const updateBook = require('./helpers/updateBook');
exports.handler = async (event) => {
    if (event.httpMethod === 'GET') {
        return await getBooks(event);
    } else if (event.httpMethod === 'PUT') {
        return await updateBook(event);
/*
    } else if (event.httpMethod === 'POST') {
        return await createBook(event);
    } else if (event.httpMethod === 'DELETE') {
        return await deleteBook(event);
*/
    } else {
        return formattedReturn(405, {});
    }
};