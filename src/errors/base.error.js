class BaseError extends Error {
    constructor(name, StatusCode, description, details) {
        super(description);
        this.name = name;
        this.StatusCode = StatusCode;
        this.details = details;
        // Error.captureStackTrack(this);
    }
}

module.exports =  BaseError;
