interface FormDataType {
    password: string;
    confirmPassword: string;
}

export const Validation = (formData: FormDataType)=> {
    const error = {password: '', confirmPassword: ''};
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (!passwordRegex.test(formData.password)) {
        error.password = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    }

    if (formData.confirmPassword.trim() !== formData.password.trim()) {
        error.confirmPassword = "Confirm password does not match password"
    }

    return error;
}
