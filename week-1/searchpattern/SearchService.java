package searchpattern;

import java.util.ArrayList;
import java.util.List;

public class SearchService {
    private List<Product> productList;

    public SearchService(List<Product> productList) {
        this.productList = productList;
    }

    public List<Product> search(String keyword) {
        List<Product> results = new ArrayList<>();
        for (Product product : productList) {
            if (product.getName().toLowerCase().contains(keyword.toLowerCase()) ||
                product.getCategory().toLowerCase().contains(keyword.toLowerCase())) {
                results.add(product);
            }
        }
        return results;
    }
}
