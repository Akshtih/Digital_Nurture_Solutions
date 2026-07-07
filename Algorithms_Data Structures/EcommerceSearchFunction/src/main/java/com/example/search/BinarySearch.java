package com.example.search;

public class BinarySearch {

    public static Product searchByName(Product[] products, String targetName) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int middle = left + (right - left) / 2;
            int comparison = products[middle].getProductName().compareToIgnoreCase(targetName);

            if (comparison == 0) {
                return products[middle];
            } else if (comparison < 0) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return null;
    }
}
