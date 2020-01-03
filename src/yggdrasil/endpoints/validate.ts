"use strict";

import { default as ValidatePayload } from "./validate/payload";

type ValidateSchema = void;

/**
 * @since 0.0.1
 */
namespace ValidateSchema
{
    export type Payload = ValidatePayload;
}

export {
    ValidatePayload,
};

export default ValidateSchema;
