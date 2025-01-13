function createHelloWorld() {
    
    return function(...args): string {
        const text = "Hello World";
       return text;
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */