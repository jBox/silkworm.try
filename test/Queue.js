const Queue = require("../Queue");
const { expect } = require("chai");
describe('Queue', function () {
    describe('#length', function () {
        it('should return 0 when initialized', function () {
            const q = new Queue();
            expect(q.length).to.equal(0);
        });
    });
    describe('#enqueue', function () {
        it('should return 1 after enqueue', function () {
            const q = new Queue();
            q.enqueue("0");
            expect(q.length).to.equal(1);
        });
    });
    describe('#dequeue', function () {
        it('should return 0 after enqueue/dequeue', function () {
            const q = new Queue();
            q.enqueue("0");
            q.dequeue();
            expect(q.length).to.equal(0);
        });
    });
    describe('#enqueue/dequeue', function () {
        it('should be FIFO', function () {
            const q = new Queue();
            q.enqueue("0");
            q.enqueue("1");
            const first = q.dequeue();
            expect(first).to.equal("0");
        });
    });
    describe('#peek', function () {
        it('length should not change after peek', function () {
            const q = new Queue();
            q.enqueue("0");
            q.enqueue("1");
            const first = q.peek();
            expect(first).to.equal("0");
            expect(q.length).to.equal(2);
        });
    });
});