# 🔐 Authify – Authentication System
### A secure full-stack authentication application built using React.js for the frontend and Spring Boot (with Spring Security + JWT) for the backend.

### 🚀 Tech Stack
## Frontend (React)
- *React.js*
- *Axios*
- *React Router DOM*
- *Tailwind CSS (optional for styling)*
- *React Toastify*
## Backend (Spring Boot)
- *Spring Boot*
- *Spring Security*
- *JWT (JSON Web Token)*
- *Java Mail Sender*
- *MySQL*

### ✨ Features
- *User registration with email OTP verification*
- *Secure login with JWT token generation*
- *Protected routes with authentication checks*
- *Password reset via email OTP*
- *Global authentication state management (React Context API)*
- *Backend token validation with Spring Security*
- *CORS and CSRF configured for cross-origin requests*

 ### ⚙️ How It Works
- *Register* – User registers and receives OTP via email.
- *Verify Email* – Verifies OTP and activates the account.
- *Login* – Authenticates user, returns JWT token, and stores it in cookies.
- *Protected Routes* – Routes like /home are only accessible to logged-in users.
- *Reset Password* – Users can reset password via verified email.

### 🔐 Security
- *Passwords are securely hashed using BCryptPasswordEncoder*
- *JWT token is validated and filtered using OncePerRequestFilter*
- *Email verification adds a second layer of security*
- *Stateless authentication using Spring Security*

### 📦 API Endpoints
#### Method	Endpoint	Description
<img width="874" height="406" alt="image" src="https://github.com/user-attachments/assets/a3a87f6a-0fae-43ed-9743-3935492a654f" />





