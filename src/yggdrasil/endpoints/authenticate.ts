"use strict";

import { default as AuthenticatePayload } from "./authenticate/payload";
import { default as AuthenticateResponse } from "./authenticate/response";

type AuthenticateSchema = void;

/**
 * @since 0.0.1
 */
namespace AuthenticateSchema
{
    export type Payload = AuthenticatePayload;
    export type Response = AuthenticateResponse;
}

export {
    AuthenticatePayload,
    AuthenticateResponse,
};

export default AuthenticateSchema;
