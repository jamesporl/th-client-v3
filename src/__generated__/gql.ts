/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query MyProfile {\n    myProfile {\n      _id\n      firstName\n      lastName\n      email\n      shortDesc\n      image\n      isAdmin\n    }\n  }\n": types.MyProfileDocument,
    "\n  query Apps(\n    $page: Int\n    $pageSize: Int\n    $tagSlug: String\n    $publishedFromDate: DateTime\n    $publishedToDate: DateTime\n    $otherFilters: [AppsOtherFilter!]\n    $sortBy: AppsSortBy\n  ) {\n    apps(\n      page: $page\n      pageSize: $pageSize\n      tagSlug: $tagSlug\n      publishedFromDate: $publishedFromDate\n      publishedToDate: $publishedToDate\n      otherFilters: $otherFilters\n      sortBy: $sortBy\n    ) {\n      nodes {\n        _id\n        name\n        shortDesc\n        logoImg\n        tags {\n          _id\n          name\n          slug\n        }\n        websiteUrl\n        slug\n        supportsCount\n        commentsCount\n        isSupported\n        isFeatured\n      }\n      totalCount\n    }\n  }\n": types.AppsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MyProfile {\n    myProfile {\n      _id\n      firstName\n      lastName\n      email\n      shortDesc\n      image\n      isAdmin\n    }\n  }\n"): (typeof documents)["\n  query MyProfile {\n    myProfile {\n      _id\n      firstName\n      lastName\n      email\n      shortDesc\n      image\n      isAdmin\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Apps(\n    $page: Int\n    $pageSize: Int\n    $tagSlug: String\n    $publishedFromDate: DateTime\n    $publishedToDate: DateTime\n    $otherFilters: [AppsOtherFilter!]\n    $sortBy: AppsSortBy\n  ) {\n    apps(\n      page: $page\n      pageSize: $pageSize\n      tagSlug: $tagSlug\n      publishedFromDate: $publishedFromDate\n      publishedToDate: $publishedToDate\n      otherFilters: $otherFilters\n      sortBy: $sortBy\n    ) {\n      nodes {\n        _id\n        name\n        shortDesc\n        logoImg\n        tags {\n          _id\n          name\n          slug\n        }\n        websiteUrl\n        slug\n        supportsCount\n        commentsCount\n        isSupported\n        isFeatured\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query Apps(\n    $page: Int\n    $pageSize: Int\n    $tagSlug: String\n    $publishedFromDate: DateTime\n    $publishedToDate: DateTime\n    $otherFilters: [AppsOtherFilter!]\n    $sortBy: AppsSortBy\n  ) {\n    apps(\n      page: $page\n      pageSize: $pageSize\n      tagSlug: $tagSlug\n      publishedFromDate: $publishedFromDate\n      publishedToDate: $publishedToDate\n      otherFilters: $otherFilters\n      sortBy: $sortBy\n    ) {\n      nodes {\n        _id\n        name\n        shortDesc\n        logoImg\n        tags {\n          _id\n          name\n          slug\n        }\n        websiteUrl\n        slug\n        supportsCount\n        commentsCount\n        isSupported\n        isFeatured\n      }\n      totalCount\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;