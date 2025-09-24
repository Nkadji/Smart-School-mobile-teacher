import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showpassword, setShowpassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const router = useRouter();

  const validateEmail = (Email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePassword = (Password: string): boolean => {
    return Password.length !== 0;
  };
  const validateForm = (): boolean => {
  const newErrors: { email?: string; password?: string } = {};

  // Validation email
  if (!email.trim()) {
    newErrors.email = "Email is required";
  } else if (!validateEmail(email)) {
    newErrors.email = "Email is invalid";
  }

  // Validation password
  if (!password.trim()) {
    newErrors.password = "Password is required";
  } 

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleLogin = () => {
  setIsSubmitted(true);

  if (validateForm()) {
    router.navigate("/dashboard");
  }
};



  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.title}>Sign into account</Text>
          <Text style={styles.subtitle}>Enter your email & password to login</Text>

          {/* Email */}
          <Text style={styles.label}>Email address</Text>
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            //placeholder="app@yourmail.com"
            placeholderTextColor="#070606ff"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          {/* Password */}
          <Text style={styles.label}>Password</Text>
          <View style={[styles.passwordContainer, errors.password && styles.inputError]}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={!showpassword}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (errors.password) setErrors({ ...errors, password: undefined });
              }}
              //placeholder="********"
              placeholderTextColor="#070606ff"
            />
            <TouchableOpacity onPress={() => setShowpassword(!showpassword)}>
              {showpassword ? (
                <Ionicons name="eye-off" size={24} color="gray" />
              ) : (
                <Ionicons name="eye" size={24} color="gray" />
              )}
            </TouchableOpacity>
          </View>
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

          {/* Remember & Forgot */}
          <View style={styles.row}>
            <View style={styles.rememberContainer}>
              <Checkbox
                value={remember}
                onValueChange={setRemember}
                color={remember ? "#4F46E5" : undefined}
              />
              <Text style={styles.rememberText}>Remember Password</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 150,
  },
  formContainer: {
    width: "100%",
    maxWidth: 350,
    alignSelf: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 5,
    color: "#050505ff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#a7991aff",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 6,
    color: "#000000ff",
  },
  input: {
    width: "100%",
    height: 50,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#d7c5e6ff",
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    color: "#070606ff",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#d7c5e6ff",
    borderRadius: 8,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: "#070606ff",
    height: "100%",
  },
  inputError: {
    borderColor: "#FF3B30",
  },
  errorText: {
    color: "#FF3B30",
    fontSize: 12,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "center",
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#374151",
  },
  forgotText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#4F46E5",
  },
  button: {
    width: "100%",
    padding: 13,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#2729ceff",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
