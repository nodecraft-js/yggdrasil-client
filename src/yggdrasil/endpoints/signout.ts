"use strict";

import { default as SignoutPayload } from "./signout/payload";

type SignoutSchema = void;

/**
 * @since 0.0.1
 */
namespace SignoutSchema
{
    export type Payload = SignoutPayload;
}

export {
    SignoutPayload,
};

export default SignoutSchema;
