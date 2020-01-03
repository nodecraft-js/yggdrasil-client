"use strict";

import { AxiosError } from "axios";

/**
 * Determine whether the payload is an `AxiosError` object or not.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined
 * @return The assertion result
 */
export function isAxiosError(payload: unknown): payload is AxiosError
{
    return (payload instanceof Error) && (payload["isAxiosError"] === true);
}

export default {
    isAxiosError,
};
