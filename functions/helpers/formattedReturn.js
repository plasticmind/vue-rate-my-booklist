module.exports = (statusCode, body) => {
    return {
        statusCode,
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json',
            'cache-control': 'Cache-Control: max-age=300, public'
        }
    };
};