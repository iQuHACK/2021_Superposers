const qiskit = require('qiskit');
const qutil = require('util');
const { Circuit, Gate } = require('@qiskit/sim');
var QuantumCircuit = require("quantum-circuit");

const qc = new QuantumCircuit(3)

qc.addMeasure(1, "c", 2)
qc.run();
qc.getCregValue