import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = {  }
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/" | "/landing/OnePage" | "/landing/OnePage/client" | "/landing/OnePage/contact" | "/landing/OnePage/counter" | "/landing/OnePage/cta" | "/landing/OnePage/faq" | "/landing/OnePage/features" | "/landing/OnePage/footer" | "/landing/OnePage/home" | "/landing/OnePage/navbar" | "/landing/OnePage/products" | "/landing/OnePage/reviews" | "/landing/OnePage/services" | "/landing/OnePage/team" | "/landing/OnePage/workProcess" | null
type LayoutParams = RouteParams & {  }
type LayoutParentData = EnsureDefined<{}>;

export type PageServerData = null;
export type PageLoad<OutputData extends OutputDataShape<PageParentData> = OutputDataShape<PageParentData>> = Kit.Load<RouteParams, PageServerData, PageParentData, OutputData, RouteId>;
export type PageLoadEvent = Parameters<PageLoad>[0];
export type PageData = Expand<Omit<PageParentData, keyof unknown> & OptionalUnion<EnsureDefined<unknown>>>;
export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;