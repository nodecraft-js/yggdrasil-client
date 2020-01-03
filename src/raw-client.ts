/**
 * @author Jason Kwok <nodejs@jasonhk.email>
 */

"use strict";

import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { IncomingHttpHeaders } from "http";

import { MOJANG_AUTH_SERVER, YGGDRASIL_ENDPOINTS } from "./constants";

import {
    UnknownError,
    YggdrasilError,
} from "./errors";

import { isAxiosError } from "./utilities/axios";
import { isYggdrasilErrorResponse } from "./utilities/yggdrasil";

import {
    AuthenticateSchema,
    InvalidateSchema,
    SignoutSchema,
    RefreshSchema,
    ValidateSchema,
} from "./yggdrasil/endpoints";

/**
 * A Yggdrasil client that returns the unaltered form of the response object.
 * 
 * @since 0.0.1
 */
export class RawYggdrasilClient
{
    private readonly _authServer: string;
    private readonly _axios: AxiosInstance;

    /**
     * The URL of the authentication server used by this Yggdrasil client.
     * 
     * @remarks
     * The default authentication server is {@link MOJANG_AUTH_SERVER|`MOJANG_AUTH_SERVER`}.
     * 
     * @since 0.0.1
     */
    public get authServer(): string { return this._authServer; }

    /**
     * @since 0.0.1
     * 
     * @param authServer The URL of the authentication server will used
     * @return The Yggdrasil client instance
     */
    public constructor(authServer?: string)
    {
        if ((typeof authServer !== "string") || (authServer.length === 0)) { authServer = MOJANG_AUTH_SERVER; }

        this._authServer = authServer;

        this._axios = Axios.create(
            {
                baseURL: this._authServer,
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json, text/plain",
                } as IncomingHttpHeaders,
                responseType: "json",
            });
    }
    
    public authenticate(payload: AuthenticateSchema.Payload): Promise<AxiosResponse<AuthenticateSchema.Response>>
    {
        return this._post(YGGDRASIL_ENDPOINTS.AUTHENTICATE, payload);
    }

    public invalidate(payload: InvalidateSchema.Payload): Promise<AxiosResponse>
    {
        return this._post(YGGDRASIL_ENDPOINTS.INVALIDATE, payload);
    }

    public refresh(payload: RefreshSchema.Payload): Promise<AxiosResponse<RefreshSchema.Response>>
    {
        return this._post(YGGDRASIL_ENDPOINTS.REFRESH, payload);
    }

    public signout(payload: SignoutSchema.Payload): Promise<AxiosResponse>
    {
        return this._post(YGGDRASIL_ENDPOINTS.SIGNOUT, payload);
    }

    public validate(payload: ValidateSchema.Payload): Promise<AxiosResponse>
    {
        return this._post(YGGDRASIL_ENDPOINTS.VALIDATE, payload);
    }

    /**
     * 
     * @typeparam P The type of the payload
     * @typeparam R The type of the response
     * @param endpoint The path of the authentication server API endpoint
     * @param payload  The JSON object payload that to be sent to the server
     * @param config   Additional config for the `AxiosInstance`
     * @return The response of the authentication server API request
     */
    private _post<P = any, R = any>(endpoint: string, payload: P, config?: AxiosRequestConfig): Promise<AxiosResponse<R>>
    {
        return this._axios
            .post(endpoint, payload, config)
            .catch(
                (error) =>
                {
                    if (isAxiosError(error))
                    {
                        if (isYggdrasilErrorResponse(error.response.data))
                        {
                            return Promise.reject(new YggdrasilError(error));
                        }
                        else
                        {
                            return Promise.reject(error);
                        }
                    }
                    else if (error instanceof Error)
                    {
                        return Promise.reject(error);
                    }
                    else
                    {
                        return Promise.reject(new UnknownError(error));
                    }
                });
    }
}

export default RawYggdrasilClient;
