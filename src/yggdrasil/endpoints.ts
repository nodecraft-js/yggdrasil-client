"use strict";

import { default as AuthenticateSchema } from "./endpoints/authenticate";
import { default as ErrorSchema } from "./endpoints/error";
import { default as InvalidateSchema } from "./endpoints/invalidate";
import { default as RefreshSchema } from "./endpoints/refresh";
import { default as SignoutSchema } from "./endpoints/signout";
import { default as ValidateSchema } from "./endpoints/validate";

type YggdrasilEndpoints = void;

/**
 * A set of JSON objects that will be used as payload and response at the
 * endpoints of the authentication server.
 * 
 * @since 0.0.1
 */
namespace YggdrasilEndpoints
{
    export type Authenticate = AuthenticateSchema;
    export type Error = ErrorSchema;
    export type Invalidate = InvalidateSchema;
    export type Refresh = RefreshSchema;
    export type Signout = SignoutSchema;
    export type Validate = ValidateSchema;
}

export {
    AuthenticateSchema,
    ErrorSchema,
    InvalidateSchema,
    RefreshSchema,
    SignoutSchema,
    ValidateSchema,
};

export default YggdrasilEndpoints;
