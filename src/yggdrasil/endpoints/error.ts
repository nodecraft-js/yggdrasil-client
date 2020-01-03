"use strict";

import { default as ErrorResponse } from "./error/response";

type ErrorSchema = void;

/**
 * @since 0.0.1
 */
namespace ErrorSchema
{
    export type Response = ErrorResponse;
}

export {
    ErrorResponse,
};

export default ErrorSchema;
