"use strict";
// Quik Find
class UnionFind1 {
    constructor(n) {
        this.count = n;
        this.id = new Array(n);
        for (let i = 0; i < n; i++) {
            this.id[i] = i;
        }
    }
    find(p) {
        if (p >= 0 && p < this.count) {
            return this.id[p];
        }
        return -1;
    }
    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }
    // O(n)
    union(p, q) {
        const pID = this.find(p);
        const qID = this.find(q);
        if (pID === qID)
            return;
        for (let i = 0; i < this.count; i++) {
            if (this.id[i] === pID) {
                this.id[i] === qID;
            }
        }
    }
}
// Quik Union
class UnionFind2 {
    constructor(n) {
        this.count = n;
        this.parent = new Array(n);
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
        }
    }
    find(p) {
        if (p >= 0 && p < this.count) {
            while (p !== this.parent[p]) {
                p = this.parent[p];
            }
            return p;
        }
        return -1;
    }
    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }
    // O(n)
    union(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);
        if (pRoot === qRoot)
            return;
        this.parent[pRoot] = qRoot;
    }
}
// Size 优化Union
class UnionFind3 {
    constructor(n) {
        this.count = n;
        this.sz = new Array(n);
        this.parent = new Array(n);
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.sz[i] = 1;
        }
    }
    find(p) {
        if (p >= 0 && p < this.count) {
            while (p !== this.parent[p]) {
                p = this.parent[p];
            }
            return p;
        }
        return -1;
    }
    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }
    // O(n)
    union(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);
        if (pRoot === qRoot)
            return;
        if (this.sz[pRoot] < this.sz[qRoot]) {
            this.parent[pRoot] = qRoot;
            this.sz[qRoot] += this.sz[pRoot];
        }
        else {
            this.parent[qRoot] = pRoot;
            this.sz[pRoot] += this.sz[qRoot];
        }
    }
}
// Rank 优化Union
class UnionFind4 {
    constructor(n) {
        this.count = n;
        this.rank = new Array(n);
        this.parent = new Array(n);
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.rank[i] = 1;
        }
    }
    find(p) {
        if (p >= 0 && p < this.count) {
            while (p !== this.parent[p]) {
                p = this.parent[p];
            }
            return p;
        }
        return -1;
    }
    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }
    // O(n)
    union(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);
        if (pRoot === qRoot)
            return;
        if (this.rank[pRoot] < this.rank[qRoot]) {
            this.parent[pRoot] = qRoot;
        }
        else if (this.rank[pRoot] > this.rank[qRoot]) {
            this.parent[qRoot] = pRoot;
        }
        else {
            this.parent[pRoot] = qRoot;
            this.rank[qRoot]++;
        }
    }
}
// Path compression 优化Find
class UnionFind5 {
    constructor(n) {
        this.count = n;
        this.rank = new Array(n);
        this.parent = new Array(n);
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.rank[i] = 1;
        }
    }
    find(p) {
        if (p >= 0 && p < this.count) {
            while (p !== this.parent[p]) {
                this.parent[p] = this.parent[this.parent[p]]; // 路径压缩
                p = this.parent[p];
            }
            return p;
        }
        return -1;
    }
    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }
    // O(n)
    union(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);
        if (pRoot === qRoot)
            return;
        if (this.rank[pRoot] < this.rank[qRoot]) {
            this.parent[pRoot] = qRoot;
        }
        else if (this.rank[pRoot] > this.rank[qRoot]) {
            this.parent[qRoot] = pRoot;
        }
        else {
            this.parent[pRoot] = qRoot;
            this.rank[qRoot]++;
        }
    }
}
// Path compression 优化Find 递归实现最优情况 两层
class UnionFind6 {
    constructor(n) {
        this.count = n;
        this.rank = new Array(n);
        this.parent = new Array(n);
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.rank[i] = 1;
        }
    }
    find(p) {
        if (p >= 0 && p < this.count) {
            if (p !== this.parent[p]) {
                this.parent[p] = this.find(this.parent[p]);
            }
            return this.parent[p];
        }
        return -1;
    }
    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }
    // O(n)
    union(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);
        if (pRoot === qRoot)
            return;
        if (this.rank[pRoot] < this.rank[qRoot]) {
            this.parent[pRoot] = qRoot;
        }
        else if (this.rank[pRoot] > this.rank[qRoot]) {
            this.parent[qRoot] = pRoot;
        }
        else {
            this.parent[pRoot] = qRoot;
            this.rank[qRoot]++;
        }
    }
}
