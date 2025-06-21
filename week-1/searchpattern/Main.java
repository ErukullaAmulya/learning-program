package searchpattern;

import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Product> products = Arrays.asList(
            new Product("Nike Running Shoes", "Footwear"),
            new Product("Adidas T-Shirt", "Clothing"),
            new Product("Puma Sneakers", "Footwear"),
            new Product("Apple iPhone 14", "Electronics")
        );

        SearchService searchService = new SearchService(products);
        List<Product> results = searchService.search("footwear");

        for (Product p : results) {
            System.out.println(p);
        }
    }
}

