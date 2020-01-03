"use strict";

import { AxiosError } from "axios";

import { ErrorResponse } from "../yggdrasil/endpoints/error";

/**
 * An `Error` object representing an error encountered in the authentication
 * server.
 * 
 * @remarks
 * This error will be thrown when an {@link ErrorResponse|`ErrorResponse`} JSON
 * object with a non-200 HTTP status code was returned from the authentication
 * server.
 * 
 * @remarks
 * A list of known errors could be found at [wiki.vg/Authentication#Errors](https://wiki.vg/Authentication#Errors).
 * 
 * @since 0.0.1
 */
export class YggdrasilError extends Error
{
    /**
     * The name of upstream error that caused the {@link name|error}.
     */
    public cause?: string;

    /**
     * The original `AxiosError` object.
     */
    public error: AxiosError<ErrorResponse>;

    /**
     * The description of the error, which can be shown to the user.
     */
    public message: string;

    /**
     * The name of the error.
     */
    public name: string;

    /**
     * @param error An `AxiosError` object with an `ErrorResponse` JSON object as
     *              the response body
     */
    public constructor(error: AxiosError<ErrorResponse>)
    {
        super();

        this.error = error;

        const { data } = error.response;
        this.name = data.error;
        this.cause = data.cause;
        this.message = data.errorMessage;
    }
}

export default YggdrasilError;
