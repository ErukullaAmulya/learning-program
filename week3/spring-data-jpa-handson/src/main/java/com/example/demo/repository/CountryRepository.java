package com.example.demo.repository;

import com.example.demo.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CountryRepository extends JpaRepository<Country, String> {
    Optional<Country> findByCode(String code);
    List<Country> findByContinent(String continent);

    // HQL Example
    @Query("SELECT c FROM Country c WHERE c.name = :name")
    Optional<Country> findByNameHQL(@Param("name") String name);

    // Native Query Example
    @Query(value = "SELECT * FROM Country WHERE name = :name", nativeQuery = true)
    Optional<Country> findByNameNative(@Param("name") String name);
}
