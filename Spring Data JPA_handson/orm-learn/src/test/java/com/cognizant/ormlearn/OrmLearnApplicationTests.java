package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;
import org.junit.Test;
import org.mockito.Mockito;

import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;

public class OrmLearnApplicationTests {

    @Test
    public void testGetAllCountriesWithMockedService() {
        CountryService countryService = Mockito.mock(CountryService.class);
        Country in = new Country();
        in.setCode("IN");
        in.setName("India");
        Country us = new Country();
        us.setCode("US");
        us.setName("United States of America");

        Mockito.when(countryService.getAllCountries()).thenReturn(Arrays.asList(in, us));

        List<Country> countries = countryService.getAllCountries();
        assertEquals(2, countries.size());
        assertEquals("IN", countries.get(0).getCode());
        assertEquals("India", countries.get(0).getName());
    }
}
