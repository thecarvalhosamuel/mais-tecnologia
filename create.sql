drop table if exists contact;
drop schema if exists mais;
create schema mais;

create table contact(
  contact_id uuid primary key,
  name text,
  email text,
  message text
)

CREATE SCHEMA mais;