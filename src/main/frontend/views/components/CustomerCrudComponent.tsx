import React from 'react';
import {AutoCrud} from "@vaadin/hilla-react-crud";
import {CustomerCrudService} from "Frontend/generated/endpoints";
import Customer from "Frontend/generated/com/daly/springreactvaadin/entities/Customer";
import CustomerModel from "Frontend/generated/com/daly/springreactvaadin/entities/CustomerModel";

function CustomerCrudComponent() {
    return (
        <>
            <AutoCrud service={CustomerCrudService} model={CustomerModel}/>
        </>
    );
}

export default CustomerCrudComponent;