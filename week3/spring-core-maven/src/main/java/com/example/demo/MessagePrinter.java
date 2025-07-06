package com.example.demo;

public class MessagePrinter {
    private MessageService service;

    // Constructor Injection
    public MessagePrinter(MessageService service) {
        this.service = service;
    }

    // Setter Injection
    public void setService(MessageService service) {
        this.service = service;
    }

    public void printMessage() {
        System.out.println(service.getMessage());
    }
}