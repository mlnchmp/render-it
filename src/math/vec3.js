"use strict";

// Adds two vectors together
// Returns a Vector
export const add = (a, b) => {
    return a.map((number , index) => {
        return number + b[index];
    })
}

// Subs two vectors
// Returns a Vector
export const sub = (a, b) => {
    return a.map((number , index) => {
        return number - b[index];
    })
}

// Scales a vector by a value
// Returns Vector
export const scale = (a, b) => {
    return a.map(number => {
        return number * b;
    })
}

export const dot = (a, b) => {
    if (a.length !== b.length) throw Error("Both vectors need to have the same length");

    let sum = 0;

    for (let i = 0; i < a.length; i++) {
        sum += (a[i] * b[i]);
    }

    return sum;
}

export const cross = (a, b) => {
    if (a.length !== b.length) throw Error("Both vectors need to have the same length");

    const ax = a[0],
          ay = a[1],
          az = a[2],
          bx = b[0],
          by = b[1],
          bz = b[2];

    return [(ay*bz) - (az*by), (az*bx) - (ax*bz), (ax*by) - (ay*bx)];
}

export const length = (a) => {
    let sum = 0;

    for (let i = 0; i < a.length; i++) {
        sum += a[i]**2;
    }

    return math.sqrt(sum);
}

export const normalize = (a) => {
    return a.map(number => {
        return number / length(a);
    })
}