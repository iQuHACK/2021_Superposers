const qiskit = require('qiskit');
const qutil = require('util');
const { Circuit, Gate } = require('@qiskit/sim');

const qc = Circuit.createCircuit(3, 3);

var value = localStorage["key"];
print(value);