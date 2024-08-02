package com.daly.springreactvaadin.services;

import com.daly.springreactvaadin.entities.Customer;
import com.daly.springreactvaadin.repositories.CustomerRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;

import java.util.List;

@BrowserCallable
@AnonymousAllowed
public class CustomerService {
    private CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }
}
