package com.example.demo;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        // Fake login validation
        if ("admin".equals(username) && "password".equals(password)) {
            return JwtUtil.generateToken(username);
        } else {
            return "Invalid credentials";
        }
    }
}