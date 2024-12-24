import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  PageContainer,
  AuthCard,
  Title,
  SubTitle,
  InputGroup,
  Button,
  ToggleLink,
} from "./AuthPageStyled";
import {
  useLoginMutation,
  useRegisterMutation,
  useCheckAuthStatusQuery,
} from "../../store/apiSlice";
import { setCredentials } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    role: "producer",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  // Fetch user auth status and loading state
  const { data: userData, isLoading, isError } = useCheckAuthStatusQuery();

  useEffect(() => {
    // Once the user status is checked and available, update the Redux state
    if (userData?.user) {
      dispatch(setCredentials({ user: userData.user }));
      navigate("/"); // Redirect to homepage if logged in
    }
  }, [userData, dispatch, navigate]);

  // Redirect the user to the homepage if they are already authenticated
  useEffect(() => {
    if (user) {
      navigate("/"); // Redirect to homepage if user is logged in
    }
  }, [user, navigate]);

  const [login, { isLoading: isLoggingIn, error: loginError }] =
    useLoginMutation();
  const [register, { isLoading: isRegistering, error: registerError }] =
    useRegisterMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (
        !formData.username ||
        !formData.email ||
        !formData.password ||
        !formData.passwordConfirm ||
        !formData.role
      ) {
        alert("Please fill all required fields");
        return;
      }
      if (formData.password !== formData.passwordConfirm) {
        alert("Passwords do not match");
        return;
      }

      try {
        const response = await register({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          passwordConfirm: formData.passwordConfirm,
          role: formData.role,
        }).unwrap();
        alert("Registration successful!");
        dispatch(setCredentials({ user: response.user })); // Store user data in Redux
        navigate("/"); // Redirect to homepage
      } catch (err) {
        console.error("Sign-up Error:", err);
      }
    } else {
      if (!formData.username || !formData.password) {
        alert("Please fill all required fields");
        return;
      }

      try {
        const response = await login({
          username: formData.username,
          password: formData.password,
        }).unwrap();
        alert("Login successful!");
        dispatch(setCredentials({ user: response.user })); // Store user data in Redux
        navigate("/"); // Redirect to homepage
      } catch (err) {
        console.error("Login Error:", err);
      }
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show loading screen while checking auth status
  }

  return (
    <PageContainer>
      <AuthCard>
        <Title>{isSignUp ? "Create an Account" : "Welcome Back"}</Title>
        <SubTitle>
          {isSignUp
            ? "Sign up to explore more features."
            : "Log in to access your account."}
        </SubTitle>

        <form onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
          </InputGroup>
          {isSignUp && (
            <>
              <InputGroup>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="role">Role</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}>
                  <option value="producer">Producer</option>
                  <option value="artist">Artist</option>
                  <option value="admin">Admin</option>
                </select>
              </InputGroup>
              <InputGroup>
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.passwordConfirm}
                  onChange={handleChange}
                />
              </InputGroup>
            </>
          )}
          <InputGroup>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </InputGroup>
          <Button disabled={isLoggingIn || isRegistering}>
            {isSignUp ? "Sign Up" : "Login"}
          </Button>
        </form>

        {/* Display error messages */}
        {(loginError || registerError) && (
          <p className="text-red-500 text-center">
            {loginError?.data?.message ||
              registerError?.data?.message ||
              "An error occurred"}
          </p>
        )}

        <ToggleLink>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <a onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Log In" : "Sign Up"}
          </a>
        </ToggleLink>
      </AuthCard>
    </PageContainer>
  );
}
