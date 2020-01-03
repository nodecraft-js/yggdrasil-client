"use strict";

/**
 * The URL of the default authentication server that Mojang currently using.
 */
export const MOJANG_AUTH_SERVER = "https://authserver.mojang.com/";

/**
 * A set of standard Yggdrasil API endpoints that the authentication server
 * provided.
 */
export namespace YGGDRASIL_ENDPOINTS
{
    /**
     * The path of the authenticate endpoint.
     */
    export const AUTHENTICATE = "/authenticate";

    /**
     * The path of the invalidate endpoint.
     */
    export const INVALIDATE   = "/invalidate";

    /**
     * The path of the refresh endpoint.
     */
    export const REFRESH      = "/refresh";

    /**
     * The path of the signout endpoint.
     */
    export const SIGNOUT      = "/signout";

    /**
     * The path of the validate endpoint.
     */
    export const VALIDATE     = "/validate";
}

// export enum YGGDRASIL_ENDPOINTS
// {
//     AUTHENTICATE = "/authenticate",
//     INVALIDATE   = "/invalidate",
//     REFRESH      = "/refresh",
//     SIGNOUT      = "/signout",
//     VALIDATE     = "/validate",
// }

export default {
    MOJANG_AUTH_SERVER,
    YGGDRASIL_ENDPOINTS,
};
