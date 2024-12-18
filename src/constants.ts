const error_codes: { [key: number]: string } = {
    805: "Connection limit exceeded, Please close existing connection to create new connection",
    806: "Data APIs not subscribed, Please subscribe to continue using Market Feed APIs",
    807: "Access token is expired, Please generate new access token",
    808: "Authentication Failed - Check Client ID and Access Token",
    809: "Access token is invalid or not found, Please generate new access token"
  };
  
  const DEFAULT_MESSAGE = "Unknown error occurred, Please try again later.";
  
  export function getErrorMessage(errorCode: number): string {
    return error_codes[errorCode] || DEFAULT_MESSAGE;
  }
  
  export default error_codes;
  