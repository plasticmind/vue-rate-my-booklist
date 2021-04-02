const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    const fields = JSON.parse(event.body);
    try {
        const createdBook = await table.create([{ fields }]);
        return formattedReturn(200, createdBook);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, {});
    }
};