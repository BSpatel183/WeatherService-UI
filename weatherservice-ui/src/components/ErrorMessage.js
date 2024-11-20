function ErrorMessage({ message }) {
    return message ? <p className="error-message">{message}</p> : null;
  }
  
  export default ErrorMessage;
  