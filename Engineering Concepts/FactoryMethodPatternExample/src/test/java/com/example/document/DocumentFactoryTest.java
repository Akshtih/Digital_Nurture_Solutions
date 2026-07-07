package com.example.document;

import org.junit.Test;

import static org.junit.Assert.assertTrue;

public class DocumentFactoryTest {

    @Test
    public void testWordFactory() {
        Document doc = new WordDocumentFactory().createDocument();
        assertTrue(doc instanceof WordDocument);
    }

    @Test
    public void testPdfFactory() {
        Document doc = new PdfDocumentFactory().createDocument();
        assertTrue(doc instanceof PdfDocument);
    }

    @Test
    public void testExcelFactory() {
        Document doc = new ExcelDocumentFactory().createDocument();
        assertTrue(doc instanceof ExcelDocument);
    }
}
