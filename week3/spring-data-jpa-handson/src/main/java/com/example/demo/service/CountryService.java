package com.example.demo.service;

import com.example.demo.entity.Country;

import java.util.List;

public interface CountryService {
    Country save(Country country);
    Country findByCode(String code);
    List<Country> findByContinent(String continent);
}