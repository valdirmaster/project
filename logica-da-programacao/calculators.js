 const compare = (x, y) => {
    let msg;

    if (x > y) {
        msg = `O numero ${x} é maior que o número ${y}`;
    }
    else if (x < y) {
        msg = `o numero ${x} é menor do que o numero ${y}`;
    }
    else {
        msg = `os dois numeros são iquais`
    }
        console.log(msg);
    
    };

    compare(5, 4);

  export default compare;