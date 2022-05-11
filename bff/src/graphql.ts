
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface UserInput {
    email: string;
    message: string;
}

export interface User {
    email: string;
    message: string;
}

export interface IQuery {
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
