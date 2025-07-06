package com.example.demo;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
    public static void main(String[] args) {
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml")) {
            MessagePrinter printer = context.getBean(MessagePrinter.class);
            printer.printMessage();
        }
    }
}