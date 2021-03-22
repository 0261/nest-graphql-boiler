
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface GetArticlesInput {
    first?: number;
    after?: string;
    before?: string;
}

export interface ArticleConnection {
    edges: ArticleEdge[];
    pageInfo: PageInfo;
}

export interface ArticleEdge {
    cursor?: string;
    node: Article;
}

export interface Article {
    id: string;
    title: string;
}

export interface User {
    id: string;
    name: string;
}

export interface IQuery {
    getUser(id: number): User | Promise<User>;
    getArticle(id: number): Article | Promise<Article>;
    getArticles(input: GetArticlesInput): ArticleConnection | Promise<ArticleConnection>;
}

export interface PageInfo {
    startCursor?: string;
    endCursor?: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}
