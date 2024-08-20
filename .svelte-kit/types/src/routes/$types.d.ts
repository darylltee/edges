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
type LayoutRouteId = RouteId | "/" | "/about-us/community-influence" | "/about-us/farmer-beneficiaries" | "/about-us/how-we-do-it" | "/about-us/implications" | "/about-us/our-goals" | "/about-us/our-outputs" | "/about-us/our-team" | "/about-us/testimonies" | "/accross" | "/client" | "/contact-us" | "/counter" | "/cta" | "/faq" | "/farming" | "/features" | "/footer" | "/geomap" | "/home" | "/navbar" | "/our-work/farming/harvesting" | "/our-work/farming/insurance" | "/our-work/farming/marketing" | "/our-work/farming/marketing/content/items/noodles" | "/our-work/farming/marketing/content/items/pickles" | "/our-work/farming/monitoring" | "/our-work/farming/planting" | "/our-work/farming/value-adding" | "/our-work/geomapping" | "/our-work/geomapping/items/bagacay" | "/our-work/geomapping/items/carayat" | "/our-work/geomapping/items/caricaran" | "/our-work/profiling" | "/products" | "/publication" | "/reviews" | "/services" | "/team" | "/workProcess" | null
type LayoutParams = RouteParams & {  }
type LayoutParentData = EnsureDefined<{}>;

export type PageServerData = null;
export type PageLoad<OutputData extends OutputDataShape<PageParentData> = OutputDataShape<PageParentData>> = Kit.Load<RouteParams, PageServerData, PageParentData, OutputData, RouteId>;
export type PageLoadEvent = Parameters<PageLoad>[0];
export type PageData = Expand<Omit<PageParentData, keyof PageParentData & EnsureDefined<PageServerData>> & OptionalUnion<EnsureDefined<PageParentData & EnsureDefined<PageServerData>>>>;
export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;