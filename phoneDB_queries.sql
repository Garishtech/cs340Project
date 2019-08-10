

select id, model, manufacturer from ph_phone

select id, f_name, l_name from ph_powner

select id, name from ph_carrier

select id, name from ph_man





insert into ph_phone (model, screen_size, in_storage, ex_storage, manufacturer) values (:IN_model, :IN_screen, :IN_inStore, :IN_exStore, :IN_man)

insert into ph_owner (f_name, l_name) values (:IN_fName, :IN_lName)

insert into ph_carrier (name) values (:IN_name)

insert into ph_man (name, model) values (:IN_name, :IN_model)
