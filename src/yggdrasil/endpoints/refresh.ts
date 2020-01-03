"use strict";

import { default as RefreshPayload } from "./refresh/payload";
import { default as RefreshResponse } from "./refresh/response";

type RefreshSchema = void;

/**
 * @since 0.0.1
 */
namespace RefreshSchema
{
    export type Payload = RefreshPayload;
    export type Response = RefreshResponse;
}

export {
    RefreshPayload,
    RefreshResponse,
};

export default RefreshSchema;
