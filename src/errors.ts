import { getErrorMessage } from "./constants";

class APIError extends Error {
    constructor(errorCode: number) {
      super(getErrorMessage(errorCode)); // Pass the message to the parent Error class
      this.name = this.constructor.name; // Set the error name to the name of the class
      console.error(`API Error - ${errorCode} : ${getErrorMessage(errorCode)}`)
    }
  }
class UnknownError extends Error {
    constructor(message: string) {
      super(message); // Pass the message to the parent Error class
      this.name = this.constructor.name; // Set the error name to the name of the class
    }
  }
  
export {APIError, UnknownError};
  