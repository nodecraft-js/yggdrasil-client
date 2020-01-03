"use strict";

import { AxiosResponse } from "axios";

import { RawYggdrasilClient } from "./raw-client";

import { generateRandomUuid } from "./utilities/uuid";

import {
    AuthenticateSchema,
    InvalidateSchema,
    RefreshSchema,
    ValidateSchema,
} from "./yggdrasil/endpoints";
import {
    YggdrasilAgent,
    YggdrasilProfile,
} from "./yggdrasil/types";

/**
 * @since 0.0.1
 */
export class YggdrasilClient
{
    private readonly _client: RawYggdrasilClient;
    private readonly _clientToken: string;

    /**
     * The URL of the authentication server used by this Yggdrasil client.
     * 
     * @remarks
     * The default authentication server is {@link MOJANG_AUTH_SERVER|`MOJANG_AUTH_SERVER`}.
     * 
     * @since 0.0.1
     */
    public get authServer(): string { return this._client.authServer; }

    /**
     * @since 0.0.1
     */
    public get clientToken(): string { return this._clientToken; }

    public constructor()
    {

    }

    /**
     * Authenticates a user using their username and password.
     * 
     * @since 0.0.1
     * 
     * @param username The username of the user
     * @param password The password of the user
     * @return The information of a login session
     */
    public async authenticate(username: string, password: string): Promise<AuthenticateSchema.Response>;

    /**
     * Authenticates a user using their username and password.
     * 
     * @since 0.0.1
     * 
     * @param username The username of the user
     * @param password The password of the user
     * @param options  Additional options for the payload
     * @return The information of a login session
     */
    public async authenticate(username: string, password: string, options: YggdrasilClient.AuthenticateOptions): Promise<AuthenticateSchema.Response>;

    /**
     * Authenticates a user using their username and password.
     * 
     * @since 0.0.1
     * 
     * @param username The username of the user
     * @param password The password of the user
     * @param agent    The information about the service that this client serve for
     * @return The information of a login session
     */
    public async authenticate(username: string, password: string, agent: YggdrasilAgent): Promise<AuthenticateSchema.Response>;

    /**
     * Authenticates a user using their username and password.
     * 
     * @since 0.0.1
     * 
     * @param username    The username of the user
     * @param password    The password of the user
     * @param requestUser Determine whether to request the server to return the
     *                    information of the user
     * @return The information of a login session
     */
    public async authenticate(username: string, password: string, requestUser: boolean): Promise<AuthenticateSchema.Response>;

    /**
     * Authenticates a user using their username and password.
     * 
     * @since 0.0.1
     * 
     * @param username    The username of the user
     * @param password    The password of the user
     * @param clientToken The unique identifier of a Yggdrasil client
     * @return The information of a login session
     */
    public async authenticate(username: string, password: string, clientToken: string): Promise<AuthenticateSchema.Response>;

    /**
     * Authenticates a user using their username and password.
     * 
     * @since 0.0.1
     * 
     * @param username    The username of the user
     * @param password    The password of the user
     * @param clientToken The unique identifier of a Yggdrasil client
     * @return The information of a login session
     */
    public async authenticate(username: string, password: string, clientToken: null): Promise<AuthenticateSchema.Response>;

    /**
     * Authenticates a user using their username and password.
     * 
     * @since 0.0.1
     * 
     * @param username    The username of the user
     * @param password    The password of the user
     * @param agent       The information about the service that this client serve
     *                    for
     * @param requestUser Determine whether to request the server to return the
     *                    information of the user
     * @return The information of a login session
     */
    public async authenticate(username: string, password: string, agent: YggdrasilAgent, requestUser: boolean): Promise<AuthenticateSchema.Response>;

    /**
     * Authenticates a user using their username and password.
     * 
     * @since 0.0.1
     * 
     * @param username    The username of the user
     * @param password    The password of the user
     * @param agent       The information about the service that this client serve
     *                    for
     * @param clientToken The unique identifier of a Yggdrasil client
     * @return The information of a login session
     */
    public async authenticate(username: string, password: string, agent: YggdrasilAgent, clientToken: string): Promise<AuthenticateSchema.Response>;

    /**
     * Authenticates a user using their username and password.
     * 
     * @since 0.0.1
     * 
     * @param username    The username of the user
     * @param password    The password of the user
     * @param agent       The information about the service that this client serve
     *                    for
     * @param clientToken The unique identifier of a Yggdrasil client
     * @return The information of a login session
     */
    public async authenticate(username: string, password: string, agent: YggdrasilAgent, clientToken: null): Promise<AuthenticateSchema.Response>;

    /**
     * Authenticates a user using their username and password.
     * 
     * @since 0.0.1
     * 
     * @param username    The username of the user
     * @param password    The password of the user
     * @param agent       The information about the service that this client serve
     *                    for
     * @param requestUser Determine whether to request the server to return the
     *                    information of the user
     * @param clientToken The unique identifier of a Yggdrasil client
     * @return The information of a login session
     */
    public async authenticate(username: string, password: string, agent: YggdrasilAgent, requestUser: boolean, clientToken: string): Promise<AuthenticateSchema.Response>;

    /**
     * Authenticates a user using their username and password.
     * 
     * @since 0.0.1
     * 
     * @param username    The username of the user
     * @param password    The password of the user
     * @param agent       The information about the service that this client serve
     *                    for
     * @param requestUser Determine whether to request the server to return the
     *                    information of the user
     * @param clientToken The unique identifier of a Yggdrasil client
     * @return The information of a login session
     */
    public async authenticate(username: string, password: string, agent: YggdrasilAgent, requestUser: boolean, clientToken: null): Promise<AuthenticateSchema.Response>;

    /**
     * Authenticates a user using their username and password.
     * 
     * @since 0.0.1
     */
    public async authenticate(username: string, password: string, ...args: [] | [YggdrasilClient.AuthenticateOptions] | [YggdrasilAgent] | [string | null] | [boolean] | [YggdrasilAgent, boolean] | [YggdrasilAgent, string | null] | [YggdrasilAgent, boolean, string | null]): Promise<AuthenticateSchema.Response>
    {
        const payload: AuthenticateSchema.Payload = {
            username: username,
            password: password,
        };

        const response: AxiosResponse<AuthenticateSchema.Response> = await this._client.authenticate(payload);
        return response.data;
    }

    /**
     * Invalidate all access tokens associated with a specific user using their
     * access token and client token.
     * 
     * @remarks
     * The client token must be identical to the one used to obtain the access
     * token.
     * 
     * @since 0.0.1
     * 
     * @param accessToken The unique identifier for a login session
     * @param clientToken The unique identifier of a Yggdrasil client
     */
    public async invalidate(accessToken: string, clientToken?: string): Promise<void>
    {
        const payload: InvalidateSchema.Payload = {
            clientToken: this._clientToken,
            accessToken: accessToken,
        };

        if ((typeof clientToken === "string") && (clientToken.length !== 0))
        {
            payload.clientToken = clientToken;
        }

        this._client.invalidate(payload);
    }

    /**
     * Refresh a valid access token.
     * 
     * @since 0.0.1
     * 
     * @param accessToken The unique identifier for a login session
     * @return The information of a updated login session
     */
    public async refresh(accessToken: string): Promise<RefreshSchema.Response>;

    /**
     * Refresh a valid access token and switch the player's profile linked with
     * this session.
     * 
     * @since 0.0.1
     * 
     * @param accessToken     The unique identifier for a login session
     * @param selectedProfile The profile that the session will be linked to
     * @return The information of a updated login session
     */
    public async refresh(accessToken: string, selectedProfile: YggdrasilProfile): Promise<RefreshSchema.Response>;

    /**
     * Refresh a valid access token.
     * 
     * @since 0.0.1
     * 
     * @param accessToken The unique identifier for a login session
     * @param requestUser Determine whether to request the server to return the
     *                    information of the user
     * @return The information of a updated login session
     */
    public async refresh(accessToken: string, requestUser: boolean): Promise<RefreshSchema.Response>;

    /**
     * Refresh a valid access token.
     * 
     * @since 0.0.1
     * 
     * @param accessToken The unique identifier for a login session
     * @param clientToken The unique identifier of a Yggdrasil client
     * @return The information of a updated login session
     */
    public async refresh(accessToken: string, clientToken: string): Promise<RefreshSchema.Response>;

    /**
     * Refresh a valid access token and switch the player's profile linked with
     * this session.
     * 
     * @since 0.0.1
     * 
     * @param accessToken     The unique identifier for a login session
     * @param selectedProfile The profile that the session will be linked to
     * @param requestUser     Determine whether to request the server to return the
     *                        information of the user
     * @return The information of a updated login session
     */
    public async refresh(accessToken: string, selectedProfile: YggdrasilProfile, requestUser: boolean): Promise<RefreshSchema.Response>;

    /**
     * Refresh a valid access token and switch the player's profile linked with
     * this session.
     * 
     * @since 0.0.1
     * 
     * @param accessToken     The unique identifier for a login session
     * @param selectedProfile The profile that the session will be linked to
     * @param clientToken     The unique identifier of a Yggdrasil client
     * @return The information of a updated login session
     */
    public async refresh(accessToken: string, selectedProfile: YggdrasilProfile, clientToken: string): Promise<RefreshSchema.Response>;

    /**
     * Refresh a valid access token and switch the player's profile linked with
     * this session.
     * 
     * @since 0.0.1
     * 
     * @param accessToken     The unique identifier for a login session
     * @param selectedProfile The profile that the session will be linked to
     * @param requestUser     Determine whether to request the server to return the
     *                        information of the user
     * @param clientToken     The unique identifier of a Yggdrasil client
     * @return The information of a updated login session
     */
    public async refresh(accessToken: string, selectedProfile: YggdrasilProfile, requestUser: boolean, clientToken: string): Promise<RefreshSchema.Response>;

    /**
     * Refresh a valid access token, and optionally switch the player's profile
     * linked with this session.
     * 
     * @since 0.0.1
     */
    public async refresh(accessToken: string, ...args: [] | [YggdrasilProfile] | [boolean] | [string] | [YggdrasilProfile, boolean] | [YggdrasilProfile, string] | [YggdrasilProfile, boolean, string]): Promise<RefreshSchema.Response>
    {
        return null;
    }

    /**
     * Invalidate all access tokens associated with a specific user using their
     * username and password.
     * 
     * @param username The username of the user
     * @param password The password of the user
     */
    public async signout(username: string, password: string): Promise<void>
    {
        this._client.signout({ username, password });
    }
    
    /**
     * Check if an access token is usable for authentication with a Minecraft
     * server.
     * 
     * @remarks
     * Check the access token with the client token of the current client.
     * 
     * @remarks
     * The client token must be identical to the one used to obtain the access
     * token.
     * 
     * @since 0.0.1
     * 
     * @param accessToken The unique identifier for a login session
     * @return The validity of the access token
     */
    public async validate(accessToken: string): Promise<boolean>;

    /**
     * Check if an access token is usable for authentication with a Minecraft
     * server.
     * 
     * @remarks
     * Explicitly set a client token to use to check the access token.
     * 
     * @remarks
     * The client token must be identical to the one used to obtain the access
     * token.
     * 
     * @since 0.0.1
     * 
     * @param accessToken The unique identifier for a login session
     * @param clientToken The unique identifier of a Yggdrasil client
     * @return The validity of the access token
     */
    public async validate(accessToken: string, clientToken: string): Promise<boolean>;

    /**
     * Check if an access token is usable for authentication with a Minecraft
     * server.
     * 
     * @remarks
     * Check the access token without the use of a client token.
     * 
     * @since 0.0.1
     * 
     * @param accessToken The unique identifier for a login session
     * @param clientToken The unique identifier of a Yggdrasil client
     * @return The validity of the access token
     */
    public async validate(accessToken: string, clientToken: null): Promise<boolean>;

    /**
     * Check if an access token is usable for authentication with a Minecraft
     * server.
     * 
     * @since 0.0.1
     */
    public async validate(accessToken: string, clientToken?: string | null): Promise<boolean>
    {
        const payload: ValidateSchema.Payload = { accessToken };
        if (clientToken !== null)
        {
            if ((typeof clientToken === "string") && (clientToken.length !== 0))
            {
                payload.clientToken = clientToken
            }
            else
            {
                payload.clientToken = this._clientToken;
            }
        }

        const response: AxiosResponse = await this._client.validate(payload);
        return (response.status === 204);
    }
}

export namespace YggdrasilClient
{
    export interface AuthenticateOptions
    {
        /**
         * The information about the service that this Yggdrasil client serve for.
         * 
         * @see {@link AuthenticateResponse.availableProfiles|`AuthenticateResponse#availableProfiles`}
         * @see {@link AuthenticateResponse.selectedProfile|`AuthenticateResponse#selectedProfile`}
         */
        agent?: YggdrasilAgent;

        /**
         * A unique identifier for this Yggdrasil client.
         * 
         * @remarks
         * The authentication server will generate one randomly if none is provided.
         */
        clientToken?: string;

        /**
         * Determine whether to request the authentication server to also return the
         * information of the user.
         * 
         * @see {@link AuthenticateResponse.user|`AuthenticateResponse#user`}
         * 
         * @default
         * false
         */
        requestUser?: boolean;
    }
}

export default YggdrasilClient;
