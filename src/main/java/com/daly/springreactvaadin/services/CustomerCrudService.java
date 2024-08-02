package com.daly.springreactvaadin.services;

import com.daly.springreactvaadin.entities.Customer;
import com.daly.springreactvaadin.repositories.CustomerRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.crud.CrudRepositoryService;
@BrowserCallable
@AnonymousAllowed
public class CustomerCrudService extends CrudRepositoryService<Customer,Long, CustomerRepository> {
}
