package com.example.search;

import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

public class SearchTest {

    @Test
    public void testLinearSearchFindsProduct() {
        Product[] products = {
                new Product(1, "Laptop", "Electronics"),
                new Product(2, "Phone", "Electronics"),
                new Product(3, "Shoes", "Fashion")
        };
        assertEquals(2, LinearSearch.searchByName(products, "Phone").getProductId());
    }

    @Test
    public void testLinearSearchReturnsNullWhenNotFound() {
        Product[] products = {
                new Product(1, "Laptop", "Electronics"),
                new Product(2, "Phone", "Electronics")
        };
        assertNull(LinearSearch.searchByName(products, "Tablet"));
    }

    @Test
    public void testBinarySearchFindsProduct() {
        Product[] products = {
                new Product(1, "Laptop", "Electronics"),
                new Product(2, "Phone", "Electronics"),
                new Product(3, "Shoes", "Fashion")
        };
        assertEquals(2, BinarySearch.searchByName(products, "Phone").getProductId());
    }

    @Test
    public void testBinarySearchReturnsNullWhenNotFound() {
        Product[] products = {
                new Product(1, "Laptop", "Electronics"),
                new Product(2, "Phone", "Electronics"),
                new Product(3, "Shoes", "Fashion")
        };
        assertNull(BinarySearch.searchByName(products, "Tablet"));
    }
}
