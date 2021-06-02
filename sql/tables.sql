/*Maintenance APP Database Tables */

/* Amount Branch Table */
CREATE TABLE IF NOT EXISTS tb_branch(
    branch_id       int             NOT NULL AUTO_INCREMENT,
    branch_name     varchar(64)     NOT NULL,
    branch_phone    varchar(64)     NOT NULL,
    branch_address  varchar(64)     NOT NULL,
    PRIMARY KEY (branch_id),
    UNIQUE      (branch_id)
)

/* Amount Customer Table */
CREATE TABLE IF NOT EXISTS tb_customers(
    customer_id     int             NOT NULL AUTO_INCREMENT,
    first_name      varchar(32)     NOT NULL,
    last_name       varchar(32)     NOT NULL,
    phone_number    varchar(32)     NOT NULL,
    PRIMARY KEY (customer_id),
    UNIQUE      (customer_id)
)

/* Amount Employee Table */
CREATE TABLE IF NOT EXISTS tb_employee(
    staff_id         int            NOT NULL AUTO_INCREMENT,
    position_id      int            NOT NULL,
    branch_id        int            NOT NULL,
    id_card          int            NOT NULL,
    first_name       varchar(64)    NOT NULL,
    last_name        varchar(64)    NOT NULL,
    gender           varchar(64)    NOT NULL,
    address          varchar(64)    NOT NULL,
    phone            varchar(64)    NOT NULL,
    email            varchar(64)    NOT NULL,
    PRIMARY KEY (staff_id),
    UNIQUE      (staff_id, email, id_card)
)

/* Amount Error database Table */
CREATE TABLE IF NOT EXISTS tb_errordatabase (
    error_id            int             NOT NULL AUTO_INCREMENT,
    error_description   varchar(225)    NOT NULL,
    maintenance_id      int             NOT NULL, 
    PRIMARY KEY (error_id),
    UNIQUE      (error_id)
)

/* Amount Machine Table */
CREATE TABLE IF NOT EXISTS tb_machine(
    machine_id      int                 NOT NULL AUTO_INCREMENT,
    set_id          int                 NOT NULL,
    type_machine    varchar(64)         NOT NULL,
    PRIMARY KEY (machine_id),
    UNIQUE      (machine_id)
)

/* Amount Machine Set Table */
CREATE TABLE IF NOT EXISTS tb_machine_set(
    set_id               int     NOT NULL AUTO_INCREMENT,
    customer_id          int     NOT NULL,
    machine_amount       int     NOT NULL,
    PRIMARY KEY (set_id),
    UNIQUE      (set_id)
)

/* Amount Maintenance Log Table */
CREATE TABLE IF NOT EXISTS tb_maintenance_log(
    maintenance_id               int             NOT NULL AUTO_INCREMENT,
    maintenance_date             DATE            NOT NULL,
    machine_id                   int             NOT NULL,
    description                  varchar(364)    NOT NULL,
    staff_id                     int             NOT NULL,
    PRIMARY KEY (maintenance_id),
    UNIQUE      (maintenance_id)
)

/* Amount Part Request Table */
CREATE TABLE IF NOT EXISTS tb_part_rq(
    partrq_id        int             NOT NULL AUTO_INCREMENT,
    part_id         int             NOT NULL,
    staff_id        int             NOT NULL,
    part_reason     varchar(364)    NOT NULL,
    PRIMARY KEY (partrq_id),
    UNIQUE      (partrq_id) 
)

/* Amount Part Info Table */
CREATE TABLE IF NOT EXISTS tb_part_info(
    part_id         int             NOT NULL AUTO_INCREMENT,
    part_type       varchar(32)     NOT NULL,
    part_size       varchar(32)     NOT NULL,
    part_des        varchar(364)    NOT NULL,
    machine_id      int             NOT NULL,
    PRIMARY KEY (part_id),
    UNIQUE      (part_id)
)

/* Amount Receipt Table */
CREATE TABLE IF NOT EXISTS tb_receipt(
    receipt_id          int         NOT NULL AUTO_INCREMENT,
    receipt_number      int         NOT NULL,
    service_id          int         NOT NULL,
    receipt_date        DATE        NOT NULL,
    PRIMARY KEY   (receipt_id),
    UNIQUE        (receipt_id)
)

/* Amount Position Table */
CREATE TABLE IF NOT EXISTS tb_position(
    position_id          int           NOT NULL,
    position_name        varchar(32)   NOT NULL,
    salary               float         NOT NULL,
    PRIMARY KEY (position_id),
    UNIQUE (position_id)
)

/* Amount Request Table */
CREATE TABLE IF NOT EXISTS tb_request(
    service_id           int               NOT NULL AUTO_INCREMENT,
    staff_id             int               NOT NULL,
    customer_id          int               NOT NULL,
    date_rq              DATE              NOT NULL,
    plan                 varchar(69)       NOT NULL,
    PRIMARY KEY (service_id),
    UNIQUE      (service_id)
)

/* Amount Users Table 
CREATE TABLE IF NOT EXISTS tb_users(
    user_id             varchar(128)   NOT NULL,
    username            varchar(128)   NOT NULL,
    password            varchar(128)   NOT NULL,
    PRIMARY KEY (user_id),
    UNIQUE      (user_id)
)*/

/* Amount Payment Infomation Table */
CREATE TABLE IF NOT EXISTS tb_payment_infomation(
	p_info_id			INT 		NOT NULL AUTO_INCREMENT,
    customer_id	        INT         NOT NULL,
	credit_card_number	FLOAT 		NOT NULL,
	credit_card_type	VARCHAR(32) NOT NULL,
	credit_card_exp		DATE		NOT NULL,
	PRIMARY KEY (p_info_id),
	UNIQUE      (p_info_id, credit_card_number)
)

/* Amount Emergency Table */
CREATE TABLE IF NOT EXISTS tb_emergency(
    emergency_id    int             NOT NULL AUTO_INCREMENT,
    machine_id      int             NOT NULL,
    staff_id        int             NOT NULL,
    e_reason        varchar(364)    NOT NULL,
    e_date          DATE            NOT NULL,
    PRIMARY KEY (emergency_id),
    UNIQUE      (emergency_id)
) 

/* Amount feedback Table */
CREATE TABLE IF NOT EXISTS tb_feedback(
	fb_id               int             NOT NULL,
    service_id          int             NOT NULL,
    r_score             int             NOT NULL,
    s_score             int             NOT NULL,
    all_score           int             NOT NULL,
    comment             varchar(364)    NULL,
	PRIMARY KEY (fb_id),
	UNIQUE      (fb_id)
)
