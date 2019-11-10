create database test;

use test;

create table user(
    idx int(3) not null auto_increment primary key,
    user_id varchar(6) not null unique key,
    user_pw varchar(20) not null
);

