/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const AppLibModelsResponseApiToken: core.serialization.ObjectSchema<
    serializers.AppLibModelsResponseApiToken.Raw,
    SuperAgent.AppLibModelsResponseApiToken
> = core.serialization.object({
    id: core.serialization.string(),
    userId: core.serialization.string(),
    description: core.serialization.string(),
    token: core.serialization.string(),
});

export declare namespace AppLibModelsResponseApiToken {
    interface Raw {
        id: string;
        userId: string;
        description: string;
        token: string;
    }
}