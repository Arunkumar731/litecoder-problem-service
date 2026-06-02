const baseError = require('./base.error');

const { StatusCodes } = require("http-status-codes");
class badRequest extends baseError{
    constructor(propertyName, details){
        super("bad Request", StatusCodes.BAD_REQUEST, `invalid structure for ${propertyName} provided`, details );
    }
}
module.exports = badRequest;