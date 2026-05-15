/**
 * IVCP Route Optimization Engine
 * Iterative Value-Centric Perturbation + 2-Opt Local Search
 */

export class IVCPOptimizer {
    constructor() {}

    // Calculate Euclidean distance between two points
    _dist(p1, p2) {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    // Calculate total circuit distance
    calculateTotalDistance(route) {
        let dist = 0;
        for (let i = 0; i < route.length; i++) {
            dist += this._dist(route[i], route[(i + 1) % route.length]);
        }
        return dist;
    }

    // Value-Centric Initializer (The Logistics Priority Logic)
    createInitialRoute(stops) {
        let remaining = [...stops];
        // Start with the highest value stop
        let startIdx = remaining.reduce((max, s, i) => s.value > remaining[max].value ? i : max, 0);
        let current = remaining.splice(startIdx, 1)[0];
        let route = [current];

        while (remaining.length > 0) {
            let nearestIdx = 0;
            let minDist = Infinity;
            for (let i = 0; i < remaining.length; i++) {
                const d = this._dist(current, remaining[i]);
                if (d < minDist) {
                    minDist = d;
                    nearestIdx = i;
                }
            }
            current = remaining.splice(nearestIdx, 1)[0];
            route.push(current);
        }
        return route;
    }

    // The 2-Opt Optimization Engine
    optimize(initialRoute) {
        let route = [...initialRoute];
        let n = route.length;
        let improved = true;

        while (improved) {
            improved = false;
            for (let i = 1; i < n - 1; i++) {
                for (let j = i + 1; j < n; j++) {
                    const newRoute = this._2optSwap(route, i, j);
                    if (this.calculateTotalDistance(newRoute) < this.calculateTotalDistance(route)) {
                        route = newRoute;
                        improved = true;
                    }
                }
            }
        }
        return route;
    }

    _2optSwap(route, i, j) {
        const newRoute = route.slice(0, i);
        const middle = route.slice(i, j + 1).reverse();
        const end = route.slice(j + 1);
        return [...newRoute, ...middle, ...end];
    }
}