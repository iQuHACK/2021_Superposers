const qiskit = require('qiskit');
const qutil = require('util');
const { Circuit, Gate } = require('@qiskit/sim');

// gateitems = [gateitem, qp]
function draw(gateitems){

    console.log("in qiskit function!")

    const qc = Circuit.createCircuit(3, 3);

    var i = 0;

    for (var gateitem in gateitems){
        gateitem = gateitem[0], qp = gateitem[1];
        if (gateitem == "H"){
            qc.add(Gate.h, i, qp)
        }
        else if (gateitem == "0"){
            if (qp == 0){
                qc.reset(qp, 0)
            }
            else{
                qc.add(Gate.cx, i, [qp, 0])
            }
        }
        else if (gateitem == "1"){
            if (qp == 1){
                qc.reset(qp, 0)
            }
            else{
                qc.add(Gate.cx, i, [qp, 1])
            }
        }
        else if (gateitem == "2"){
            if (qp == 2){
                qc.reset(qp, 0)
            }
            else{
                qc.add(Gate.cx, i, [qp, 2])
            }
        }
        else if (gateitem == "P"){
            qc.addGate("rz", i, qp, {
                params: {
                    phi: "pi/2"
                }
            });
        }
        else if (gateitem == "Y"){
            qc.add(Gate.y, i, qp)
        }
        else if (gateitem == "U"){
            qc.addGate("u3", i, qp, {
                params: {
                    theta: "pi/2",
                    phi: "pi/2",
                    lambda: "pi/2"
                }
            });
        }
        else if (gateitem == "N"){
            qc.add(Gate.x, i, qp)
        }
    }

    qc.print()
}



