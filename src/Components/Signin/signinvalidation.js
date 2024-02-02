function Validation(values) {
 
    let errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (values.name === "") {
      errors.name = "Name should not be empty";
    } else {
      errors.name = "";
    }
  
    if (values.email === "") {
      errors.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Invalid email format";
    }
  
    // Password validation removed
  
    return errors;
  }

export default Validation;
