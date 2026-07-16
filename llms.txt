# <div align="center">📍🚚 IVCP Route Optimizer 🗺️📍
## <div align="center"><i>Iterative Value-Centric Perturbation: A High-Performance TSP JavaScript Engine for Edge Devices</i>

### 1. Overview & Repository Contents 
The IVCP Route Optimizer is a novel heuristic engine designed to solve the Traveling Salesperson Problem (TSP) under priority-based constraints. Unlike standard solvers that treat every stop equally, IVCP utilizes a Value-Centric approach to ensure the most critical asset is handled first, followed by a deterministic refinement process to minimize total distance.

* 📝 **`Technical Note - IVCP Route Optimizer - Google Docs.pdf`**: The full technical note detailing the value-centric heuristic architecture, the deterministic 2-Opt refinement phases, and the 13.26% efficiency benchmark constraints.
* 📱 **`ivcp_engine.js`**: The core production engine written as a zero-dependency ES6 module, handling the complete local optimization pipeline from value-driven initialization to Hamiltonian cycle refinement.
* ⚙️ **`IVCP_Route_Optimizer_Testbench.html`**: A standalone browser-based environment used to benchmark routing efficiency across variable node densities ($5 \le N \le 50$).

### 2. Key Commercial Advantages 
* **Offline-Ready (Edge First):** Designed for local execution on handheld devices, scanners, and IoT hardware. No internet connection or costly API calls to Google/Mapbox are required for the optimization.
* **Significant Efficiency Gains:** Benchmarked at a 13.26% Net Efficiency Gain over standard greedy dispatchers in high-variance environments.
* **Operational Priority:** Guaranteed initiation at the node with the highest priority value ($$\text{argmax}(V)$$), making it ideal for express deliveries or high-value logistics.

### 3. Technical Architecture
The engine employs a two-phase execution model:
* **Phase 1: Value-Driven Initialization:** Establishes a Hamiltonian cycle starting from the highest-value anchor using a nearest-neighbor approach.
* **Phase 2: Deterministic 2-Opt Refinement:** A greedy loop that performs segment reversals to "untangle" the route until a local optimum is reached.

### 4. Quick Start (Example Integration)
The engine is a zero-dependency ES6 module, making it lightweight and easy to integrate into existing logistics stacks.

```javascript
import { IVCPOptimizer } from './sw/ivcp_engine.js';

const optimizer = new IVCPOptimizer();

// Data can be fetched from a local GPS/Database
const stops = [
    { id: "Order_101", x: 40.71, y: -74.00, value: 10 },
    { id: "Order_102", x: 40.75, y: -73.98, value: 5 }
];

const initial = optimizer.createInitialRoute(stops);
const finalRoute = optimizer.optimize(initial);

console.log("Optimized Sequence:", finalRoute.map(s => s.id));

```
### 5. Performance Benchmarks 
Tested over 100 iterations with variable node density ($5 \le N \le 50$):
* **Average Efficiency Improvement:** 13.26%.
* **Target Hardware:** Mobile handhelds, edge gateways, and low-power IoT devices.   

### ⚖️ Licensing & Commercial Use ⚖️
The IVCP Route Optimizer is available under a dual-licensing model to balance community innovation with high-performance commercial route optimization needs.

* **Open Source (AGPL-3.0):** Ideal for public research, open-source infrastructure, and community-driven projects. This license requires that any derivative works or network-hosted versions of the engine remain open-source.
* **Commercial Entities:** Licensing is available for integration into proprietary edge devices and logistics applications.

For commercial licensing inquiries, please contact: 
**Licensing Agent**: 

J.E. Randolph 📧 `700josh.r@gmail.com`

---

Copyright (c) 2026 Jonathan Alan Reed 

[ORCID: 0009-0008-7345-1407](https://orcid.org/0009-0008-7345-1407)
