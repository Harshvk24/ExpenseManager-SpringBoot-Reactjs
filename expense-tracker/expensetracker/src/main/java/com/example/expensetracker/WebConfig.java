package com.example.expensetracker;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    // Override this method to customize the CORS configuration
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Allow CORS on the /api/** endpoint for specific origins and methods
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000") // The URL of the React frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE") // The allowed HTTP methods
                .allowedHeaders("*"); // Allow all headers in the request
    }
}
