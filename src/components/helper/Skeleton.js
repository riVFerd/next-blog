import {cn} from "@/utils/utils"

function Skeleton({className, ...props}) {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-muted dark:bg-dark-muted", className)}
            {...props}
        />
    )
}

export {Skeleton}
