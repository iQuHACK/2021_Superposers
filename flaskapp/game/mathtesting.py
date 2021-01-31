import numpy as np
from qiskit import(
    QuantumCircuit,
    execute,
    Aer
)
from qiskit.visualization import plot_histogram
import matplotlib.pyplot as plt
from qiskit_textbook.tools import array_to_latex
from qiskit.visualization import (
    plot_state_city,
    plot_state_qsphere
)


simulator = Aer.get_backend('qasm_simulator')
backend = Aer.get_backend('statevector_simulator')

shot=1000
qc = QuantumCircuit(2, 2)

qc.h(0)

#circ.h(0)

#.h is Hadamard
#.cx is CNOT


qc.cx(1,0)

qc.measure([0,1], [0,1])

job = execute(qc, simulator, shots=1000)
result = job.result()

countsqc = result.get_counts(qc)

print(f'{countsqc} out of {shot}')
plot_histogram(countsqc)
#qc.cx(0,1) # Back to identity

#qc.cx(1,0)
# ^ Swap Gate

#qc.cx(0,1)
# Reverse it#



state = execute(qc, backend).result().get_statevector()
plot_state_qsphere(state)
#plot_state_city(state)
#print(state)
qc.draw('mpl')
plt.show()