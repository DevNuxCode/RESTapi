exports.success = function (req, res, mensaje='', status = 200){
   
    res.status(status).send({
        error: false,
        status: status,
        body: mensaje
    })
}
exports.error = function (req, res, mensaje ='Error Interno', status = 500){
    console.log('*** Tipo del res:', typeof res);
    console.log('***Es res una function?', typeof res.status === 'function');
    req.status(status).json({ error: mensaje });
}