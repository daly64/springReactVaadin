import { EndpointRequestInit as EndpointRequestInit_1 } from "@vaadin/hilla-frontend";
import type Customer_1 from "./com/daly/springreactvaadin/entities/Customer.js";
import client_1 from "./connect-client.default.js";
async function findAll_1(init?: EndpointRequestInit_1): Promise<Array<Customer_1>> { return client_1.call("CustomerService", "findAll", {}, init); }
async function save_1(customer: Customer_1, init?: EndpointRequestInit_1): Promise<Customer_1> { return client_1.call("CustomerService", "save", { customer }, init); }
export { findAll_1 as findAll, save_1 as save };
