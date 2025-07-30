create table `user` (`id` varchar(36) not null primary key, `name` text not null, `email` varchar(255) not null unique, `email_verified` boolean not null, `image` text, `created_at` datetime not null, `updated_at` datetime not null);

create table `session` (`id` varchar(36) not null primary key, `expires_at` datetime not null, `token` varchar(255) not null unique, `created_at` datetime not null, `updated_at` datetime not null, `ip_address` text, `user_agent` text, `user_id` varchar(36) not null references `user` (`id`));

create table `account` (`id` varchar(36) not null primary key, `account_id` text not null, `provider_id` text not null, `user_id` varchar(36) not null references `user` (`id`), `access_token` text, `refresh_token` text, `id_token` text, `access_token_expires_at` datetime, `refresh_token_expires_at` datetime, `scope` text, `password` text, `created_at` datetime not null, `updated_at` datetime not null);

create table `verification` (`id` varchar(36) not null primary key, `identifier` text not null, `value` text not null, `expires_at` datetime not null, `created_at` datetime, `updated_at` datetime);