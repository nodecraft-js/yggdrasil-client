"use strict";

export class UnknownError extends Error
{
    public error?: any;

    public constructor(error?: any)
    {
        super("An unknown error has occurred.");
        this.error = error;
    }
}

export default UnknownError;
