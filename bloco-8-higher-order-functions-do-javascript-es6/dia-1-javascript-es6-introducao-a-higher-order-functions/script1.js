const newEmployees = (dadosEmployee) => {
    const employees = {
        id1: dadosEmployee('Pedro Guerra'), 
        id2: dadosEmployee('Luiza Drumond'), 
        id3: dadosEmployee('Carla Paiva'), 
    }
    return employees;
};

const dadosEmployee = (nomeCompleto) => {
    let emailFormatado = `${nomeCompleto.replace(' ', '_').toLowerCase()}@trybe.com`;
    return {
        nome: nomeCompleto,
        email: emailFormatado
    }
}

console.log(newEmployees(dadosEmployee));