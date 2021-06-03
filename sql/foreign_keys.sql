/*Maintenance APP Database Foreign Keys*/

ALTER TABLE tb_employee
    ADD FOREIGN KEY (position_id)     REFERENCES tb_position(position_id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    ADD FOREIGN KEY (branch_id)         REFERENCES tb_branch(branch_id)
        ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE tb_errordatabase
    ADD FOREIGN KEY (maintenance_id)    REFERENCES tb_maintenance_log(maintenance_id)
        ON UPDATE CASCADE ON DELETE CASCADE;
    
ALTER TABLE tb_machine
    ADD FOREIGN KEY (customer_id)            REFERENCES tb_customers(customer_id)
        ON UPDATE CASCADE ON DELETE CASCADE;
 /*   
ALTER TABLE tb_machine_set    
    ADD FOREIGN KEY (customer_id)       REFERENCES tb_customers(customer_id)
        ON UPDATE CASCADE ON DELETE CASCADE;*/

ALTER TABLE tb_maintenance_log
    ADD FOREIGN KEY (machine_id)        REFERENCES tb_machine(machine_id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    ADD FOREIGN KEY (staff_id)          REFERENCES tb_employee(staff_id)
        ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE tb_part_rq
    ADD FOREIGN KEY (part_id) REFERENCES tb_part_info(part_id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    ADD FOREIGN KEY (staff_id) REFERENCES tb_employee(staff_id)
        ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE tb_part_info
    ADD FOREIGN KEY (machine_id) REFERENCES tb_machine(machine_id)
        ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE tb_receipt 
    ADD FOREIGN KEY (service_id)        REFERENCES tb_request(service_id)
        ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE tb_request 
    ADD FOREIGN KEY (staff_id)          REFERENCES tb_employee(staff_id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    ADD FOREIGN KEY (customer_id)       REFERENCES tb_customers(customer_id)
        ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE tb_payment_infomation
    ADD FOREIGN KEY (customer_id)       REFERENCES tb_customers(customer_id)
        ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE tb_emergency
    ADD FOREIGN KEY (machine_id)        REFERENCES tb_machine(machine_id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    ADD FOREIGN KEY (staff_id)          REFERENCES tb_employee(staff_id)
        ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE tb_feedback
    ADD FOREIGN KEY (service_id)        REFERENCES tb_request(service_id)
        ON UPDATE CASCADE ON DELETE CASCADE;


