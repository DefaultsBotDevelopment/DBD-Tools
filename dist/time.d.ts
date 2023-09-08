/**
 * @description Converts milliseconds to a time object. If no options are provided, all time units will be included.
 * @example parseMilliseconds(1000, { seconds: true, minutes: true, hours: true, days: true, weeks: true, months: true, years: true }) // returns { seconds: 1 }
 */
export declare function msToTimeObject(timeInMs: number, options?: {
    seconds?: boolean;
    minutes?: boolean;
    hours?: boolean;
    days?: boolean;
    weeks?: boolean;
    months?: boolean;
    years?: boolean;
}): {
    seconds?: number;
    minutes?: number;
    hours?: number;
    days?: number;
    weeks?: number;
    months?: number;
    years?: number;
} | null;
export declare const TimeUtils: {
    msToTimeObject: typeof msToTimeObject;
};
declare const _default: {
    msToTimeObject: typeof msToTimeObject;
};
export default _default;
//# sourceMappingURL=time.d.ts.map