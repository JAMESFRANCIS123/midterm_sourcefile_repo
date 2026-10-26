console.log('CAMPUS IT SUPPORT REQUEST MANAGER');


class Stack {
    constructor() {
        this.items = [];
    }


    push(value) {
        this.items.push(value);
    }


    pop() {
        return this.items.pop();
    }


    peek() {
        return this.items[this.items.length - 1];
    }


    isEmpty() {
        return this.items.length === 0;
    }


    size() {
        return this.items.length;
    }


    toString() {
        return this.items.join(', ');
    }
}


console.log('\nPART A: UNDO HISTORY');


const history = new Stack();


history.push('Opened Ticket #101');
history.push('Assigned Ticket #101');
history.push('Closed Ticket #101');


console.log('Top Action: ' + history.peek());


let undone = history.pop();


console.log('Undo Action: ' + undone);
console.log('Remaining Actions: ' + history.toString());
console.log('Stack Size: ' + history.size());




class Queue {
    constructor() {
        this.items = [];
    }


    enqueue(value) {
        this.items.push(value);
    }


    dequeue() {
        return this.items.shift();
    }


    front() {
        return this.items[0];
    }


    isEmpty() {
        return this.items.length === 0;
    }


    size() {
        return this.items.length;
    }


    toString() {
        return this.items.join(', ');
    }
}


console.log('\nPART B: WAITING REQUESTS');


const requests = new Queue();


requests.enqueue('Ticket #201 - Password Reset');
requests.enqueue('Ticket #202 - No Internet');
requests.enqueue('Ticket #203 - Printer Problem');
requests.enqueue('Ticket #204 - Software Installation');


console.log('Next Request: ' + requests.front());


console.log('Processed: ' + requests.dequeue());
console.log('Processed: ' + requests.dequeue());


console.log('Remaining Requests: ' + requests.toString());
console.log('Queue Size: ' + requests.size());




class PriorityQueue {
    constructor() {
        this.items = [];
    }


    enqueue(request, priority) {
        const newItem = {
            request: request,
            priority: priority
        };


        let position = 0;


        while (
            position < this.items.length &&
            this.items[position].priority <= priority
        ) {
            position++;
        }


        this.items.splice(position, 0, newItem);
    }


    dequeue() {
        return this.items.shift();
    }


    size() {
        return this.items.length;
    }


    print() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(
                this.items[i].request +
                ', Priority ' +
                this.items[i].priority
            );
        }
    }
}


console.log('\nPART C: URGENT REQUESTS');


const priorityRequests = new PriorityQueue();


priorityRequests.enqueue('Ticket #301 - Install Browser', 3);
priorityRequests.enqueue('Ticket #302 - Server Offline', 1);
priorityRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
priorityRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);


console.log('Initial Priority Order:');
priorityRequests.print();


const finishedPriority = priorityRequests.dequeue();


console.log(
    'Processed Priority Request: ' +
    finishedPriority.request +
    ', Priority ' +
    finishedPriority.priority
);


console.log('Remaining Priority Requests:');
priorityRequests.print();




class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }


    append(element) {
        const newNode = new Node(element);


        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;


            while (current.next !== null) {
                current = current.next;
            }


            current.next = newNode;
        }


        this.length++;
    }


    insert(position, element) {
        if (position < 0 || position > this.length) {
            return false;
        }


        const newNode = new Node(element);


        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;


            for (let i = 0; i < position - 1; i++) {
                current = current.next;
            }


            newNode.next = current.next;
            current.next = newNode;
        }


        this.length++;
        return true;
    }


    removeAt(position) {
        if (position < 0 || position >= this.length) {
            return null;
        }


        let removed;


        if (position === 0) {
            removed = this.head;
            this.head = this.head.next;
        } else {
            let current = this.head;


            for (let i = 0; i < position - 1; i++) {
                current = current.next;
            }


            removed = current.next;
            current.next = removed.next;
        }


        this.length--;


        return removed.element;
    }


    indexOf(element) {
        let current = this.head;
        let position = 0;


        while (current !== null) {
            if (current.element === element) {
                return position;
            }


            current = current.next;
            position++;
        }


        return -1;
    }


    remove(element) {
        const position = this.indexOf(element);


        if (position !== -1) {
            return this.removeAt(position);
        }


        return null;
    }


    isEmpty() {
        return this.length === 0;
    }


    size() {
        return this.length;
    }


    toString() {
        let result = [];
        let current = this.head;


        while (current !== null) {
            result.push(current.element);
            current = current.next;
        }


        return result.join(', ');
    }
}


console.log('\nPART D: COMPLETED REQUESTS');


const completed = new LinkedList();


completed.append('Ticket #401 - Account Activated');
completed.append('Ticket #402 - Printer Connected');
completed.append('Ticket #403 - Antivirus Updated');


completed.insert(0, 'Ticket #400 - Computer Diagnosed');
completed.insert(completed.size(), 'Ticket #405 - Browser Updated');


console.log('Complete List: ' + completed.toString());


console.log(
    'Index of Ticket #402: ' +
    completed.indexOf('Ticket #402 - Printer Connected')
);


console.log(
    'Removed at Position 1: ' +
    completed.removeAt(1)
);


console.log(
    'Removed by Value: ' +
    completed.remove('Ticket #403 - Antivirus Updated')
);


console.log('Final List: ' + completed.toString());
console.log('Final Size: ' + completed.size());