class ApiResponse {
    constructor(statusCode, message = "Success", data, errors) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.errors = errors;
        this.success = statusCode
    }
}