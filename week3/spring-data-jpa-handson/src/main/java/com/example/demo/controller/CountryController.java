package com.example.demo.controller;

import com.example.demo.entity.Country;
import com.example.demo.service.CountryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountryController {

    private final CountryService service;

    public CountryController(CountryService service) {
        this.service = service;
    }

    @PostMapping
    public Country add(@RequestBody Country country) {
        return service.save(country);
    }

    @GetMapping("/{code}")
    public Country getByCode(@PathVariable String code) {
        return service.findByCode(code);
    }

    @GetMapping("/continent/{name}")
    public List<Country> getByContinent(@PathVariable String name) {
        return service.findByContinent(name);
    }
}