import { useState, useEffect } from 'react';
import Customer from "Frontend/generated/com/daly/springreactvaadin/entities/Customer";
import {CustomerService} from "Frontend/generated/endpoints";
import {Grid, GridColumn} from "@vaadin/react-components";

const CustomerComponent = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
CustomerService.findAll().then(responce => {
    return setCustomers(responce);

})

    }, []);

    return (
        <div>
            <h1>Customers</h1>

            <Grid items={customers}>
                <GridColumn path="id" />
                <GridColumn path="name" />
                <GridColumn path="email" />
            </Grid>
        </div>
    );
};

export default CustomerComponent;