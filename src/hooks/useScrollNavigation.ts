import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface ScrollNavProps {
    nextRoute?: string;
    prevRoute?: string;
    threshold?: number;
}

export const useScrollNavigation = ({
    nextRoute,
    prevRoute,
    threshold = 150, // higher threshold harder to scroll
}: ScrollNavProps) => {
    const navigate = useNavigate();
    const scrollAccumulator = useRef(0);

    const handleNavigation = useCallback(
        (event: WheelEvent | KeyboardEvent) => {
            const { scrollTop, scrollHeight, clientHeight } =
                document.documentElement;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
            const isAtTop = scrollTop <= 0;

            // left/right arrow dont check end/begin of page
            if (event instanceof KeyboardEvent) {
                if (nextRoute && event.key === "ArrowRight") {
                    navigate(nextRoute);
                    return;
                }

                if (prevRoute && event.key === "ArrowLeft") {
                    navigate(prevRoute);
                    return;
                }
            }

            let delta = 0;
            if (event instanceof WheelEvent) {
                delta = event.deltaY;
                // deltaMode = 0: pixel delta => delta = 100
                // deltaMode = 1: line delta => delta = 3
                // deltaMode = 0: page delta => delta = ¯⁠⁠⁠\_(⁠ツ⁠)_⁠⁠/⁠¯
                if (event.deltaMode === 1) {
                    // Convert lines to pixels (standard line-height is ~16-40px)
                    delta *= 33;
                } else if (event.deltaMode === 2) {
                    // Convert pages to pixels
                    delta *= window.innerHeight;
                }
            } else if (event instanceof KeyboardEvent) {
                // threshold + 1 make it easier for up/down arrow
                if (event.key === "ArrowDown") delta = threshold + 1;
                if (event.key === "ArrowUp") delta = -(threshold + 1);
            }

            if (nextRoute && delta > 0 && isAtBottom) {
                scrollAccumulator.current += delta;
                if (scrollAccumulator.current > threshold) {
                    scrollAccumulator.current = 0;
                    navigate(nextRoute);
                }
            } else if (prevRoute && delta < 0 && isAtTop) {
                scrollAccumulator.current += delta;
                if (scrollAccumulator.current < -threshold) {
                    scrollAccumulator.current = 0;
                    navigate(prevRoute);
                }
            } else {
                scrollAccumulator.current = 0;
            }
        },
        [navigate, nextRoute, prevRoute, threshold],
    );

    useEffect(() => {
        window.addEventListener("wheel", handleNavigation);
        window.addEventListener("keydown", handleNavigation);
        return () => {
            window.removeEventListener("wheel", handleNavigation);
            window.removeEventListener("keydown", handleNavigation);
        };
    }, [handleNavigation]);
};
