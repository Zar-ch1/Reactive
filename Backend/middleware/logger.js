function customLog(req, res, next)
{
    req.requestTime = Date.now();
    console.log("Custom Log >> ", req.url);
    next();
}

module.exports.logger = customLog;