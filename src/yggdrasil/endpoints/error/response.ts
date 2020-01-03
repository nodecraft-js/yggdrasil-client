"use strict";

/**
 * The JSON object that the authentication server will return when an error was
 * encountered.
 * 
 * @remarks
 * A list of known errors could be found at [wiki.vg/Authentication#Errors](https://wiki.vg/Authentication#Errors).
 * 
 * @since 0.0.1
 * @see {@link YggdrasilError|`YggdrasilError`}
 */
export interface ErrorResponse
{
    /**
     * The name of the error.
     */
    error: string;

    /**
     * The name of upstream error that caused the {@link error|error}.
     */
    cause?: string;

    /**
     * The description of the error, which can be shown to the user.
     */
    errorMessage: string;
}

export default ErrorResponse;
