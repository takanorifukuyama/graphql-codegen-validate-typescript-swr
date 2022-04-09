import { z } from 'zod'
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
import { ClientError } from 'graphql-request/dist/types';
import useSWR, { SWRConfiguration as SWRConfigInterface, Key as SWRKeyInterface } from 'swr';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  message: Scalars['String'];
};

export type UserInput = {
  email: Scalars['String'];
  message: Scalars['String'];
};

export type UserOnHomePageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserOnHomePageQuery = { __typename?: 'Query', user?: { __typename?: 'User', email: string, message: string } | null };


export const UserOnHomePageDocument = gql`
    query UserOnHomePage($id: ID!) {
  user(id: $id) {
    email
    message
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    UserOnHomePage(variables: UserOnHomePageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserOnHomePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserOnHomePageQuery>(UserOnHomePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UserOnHomePage', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function getSdkWithHooks(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  const sdk = getSdk(client, withWrapper);
  const genKey = <V extends Record<string, unknown> = Record<string, unknown>>(name: string, object: V = {} as V): SWRKeyInterface => [name, ...Object.keys(object).sort().map(key => object[key])];
  return {
    ...sdk,
    useUserOnHomePage(variables: UserOnHomePageQueryVariables, config?: SWRConfigInterface<UserOnHomePageQuery, ClientError>) {
      return useSWR<UserOnHomePageQuery, ClientError>(genKey<UserOnHomePageQueryVariables>('UserOnHomePage', variables), () => sdk.UserOnHomePage(variables), config);
    }
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export function UserInputSchema(): z.ZodObject<Properties<UserInput>> {
  return z.object({
    email: z.string(),
    message: z.string()
  })
}
