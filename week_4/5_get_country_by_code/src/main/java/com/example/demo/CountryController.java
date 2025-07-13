package com.example.demo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/countries")
public class CountryController {
    private static final Map<String, Country> countries = Map.of(
        "IN", new Country("India", "IN"),
        "US", new Country("United States", "US")
    );

    @GetMapping("/{code}")
    public Country getCountryByCode(@PathVariable String code) {
        return countries.getOrDefault(code.toUpperCase(), new Country("Unknown", "NA"));
    }
}