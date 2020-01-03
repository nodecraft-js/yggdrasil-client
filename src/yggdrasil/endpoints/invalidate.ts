"use strict";

import { default as InvalidatePayload } from "./invalidate/payload";

type InvalidateSchema = void;

/**
 * @since 0.0.1
 */
namespace InvalidateSchema
{
    export type Payload = InvalidatePayload;
}

export {
    InvalidatePayload,
};

export default InvalidateSchema;
