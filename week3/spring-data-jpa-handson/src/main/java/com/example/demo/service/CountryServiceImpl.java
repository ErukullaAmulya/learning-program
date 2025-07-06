package com.example.demo.service;

import com.example.demo.entity.Country;
import com.example.demo.repository.CountryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryServiceImpl implements CountryService {

    private final CountryRepository repo;

    public CountryServiceImpl(CountryRepository repo) {
        this.repo = repo;
    }

    public Country save(Country country) {
        return repo.save(country);
    }

    public Country findByCode(String code) {
        return repo.findByCode(code).orElse(null);
    }

    public List<Country> findByContinent(String continent) {
        return repo.findByContinent(continent);
    }
}