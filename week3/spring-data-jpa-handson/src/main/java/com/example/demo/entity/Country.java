package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
public class Country {
    @Id
    private String code;
    private String name;
    private String continent;

    // Getters and setters
    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getContinent() { return continent; }
    public void setContinent(String continent) { this.continent = continent; }
}