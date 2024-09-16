import { useState, useEffect, useRef } from "react";

export const useIntersectionObserver = (options: IntersectionObserverInit) => {
    const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
    const refs = useRef<(HTMLVideoElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        setEntries(entries);
        }, options);

        refs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, [options]);

    return { entries, refs };
};
