"use strict";

import { ErrorResponse } from "../yggdrasil/endpoints/error/response";

/**
 * Determine whether the payload is an {@link ErrorResponse|`ErrorResponse`} object or not.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined
 * @return The assertion result
 */
export function isYggdrasilErrorResponse(payload: unknown): payload is ErrorResponse
{
    return (
        (typeof payload === "object") && (payload !== null) &&
        (
            (typeof payload["error"] === "string") &&
            (typeof payload["errorMessage"] === "string") &&
            (
                (typeof payload["cause"] === "string") ||
                (typeof payload["cause"] === "undefined")
            )
        )
    );
}

export default {
    isYggdrasilErrorResponse,
};
