import { breakDownPrice } from "./breakdownPrice";
export interface recordPrice {
    general_description: string;
    link?: string;
    fk_info_customer: number;
    customer: number;
    breakdown_price: breakDownPrice[];//Se hace la relacion para los datos de la entity
}