package com.daly.springreactvaadin;

import com.daly.springreactvaadin.entities.Customer;
import com.daly.springreactvaadin.services.CustomerService;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DbInit implements ApplicationRunner {
    private CustomerService customerService;

    public DbInit(CustomerService customerService) {
        this.customerService = customerService;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

        for (int i = 0; i < 100  ; i++) {
            Customer customer= Customer.builder()
                    .name("name"+i)
                    .email("email"+i+"@email.com")
                    .build();
            customerService.save(customer);
        }
    }
}
