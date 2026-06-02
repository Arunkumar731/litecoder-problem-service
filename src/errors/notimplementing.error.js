const baseError = require('./base.error');

const { StatusCodes } = require("http-status-codes");

class notImplemented extends baseError{
    constructor(methodName){
        super("Not Implemented Error", StatusCodes.NOT_IMPLEMENTED, `${methodName} not implemented. `, {});
    }
}
module.exports = notImplemented;