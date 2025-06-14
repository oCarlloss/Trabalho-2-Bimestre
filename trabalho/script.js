
function verificarTriangulo() {
  const x = parseFloat(document.getElementById('x').value);
  const y = parseFloat(document.getElementById('y').value);
  const z = parseFloat(document.getElementById('z').value);
  const res = document.getElementById('resultado-triangulo');
  if (x + y > z && x + z > y && y + z > x) {
    if (x === y && y === z) res.textContent = 'Triângulo Equilátero';
    else if (x === y || y === z || x === z) res.textContent = 'Triângulo Isósceles';
    else res.textContent = 'Triângulo Escaleno';
  } else {
    res.textContent = 'Não formam um triângulo';
  }
}

function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const imc = peso / (altura * altura);
  let classificacao = '';
  if (imc < 18.5) classificacao = 'Abaixo do peso';
  else if (imc < 25) classificacao = 'Peso normal';
  else if (imc < 30) classificacao = 'Sobrepeso';
  else if (imc < 35) classificacao = 'Obesidade grau 1';
  else if (imc < 40) classificacao = 'Obesidade grau 2';
  else classificacao = 'Obesidade grau 3';
  document.getElementById('resultado-imc').textContent = `IMC: ${imc.toFixed(2)} - ${classificacao}`;
}

function calcularImposto() {
  const ano = parseInt(document.getElementById('ano').value);
  const valor = parseFloat(document.getElementById('valor').value);
  let imposto = ano < 1990 ? valor * 0.01 : valor * 0.015;
  document.getElementById('resultado-imposto').textContent = `Imposto: R$ ${imposto.toFixed(2)}`;
}

function calcularSalario() {
  const salario = parseFloat(document.getElementById('salario').value);
  const cargo = document.getElementById('cargo').value.toLowerCase();
  let aumento = 0;
  if (cargo === 'gerente') aumento = 0.10;
  else if (cargo === 'engenheiro') aumento = 0.20;
  else if (cargo === 'tecnico') aumento = 0.30;
  else aumento = 0.40;
  const novo = salario * (1 + aumento);
  document.getElementById('resultado-salario').textContent = `Antigo: R$ ${salario.toFixed(2)} | Novo: R$ ${novo.toFixed(2)} | Diferença: R$ ${(novo - salario).toFixed(2)}`;
}

function calcularCredito() {
  const saldo = parseFloat(document.getElementById('saldo').value);
  let credito = 0;
  if (saldo > 400) credito = saldo * 0.30;
  else if (saldo > 300) credito = saldo * 0.25;
  else if (saldo > 200) credito = saldo * 0.20;
  else credito = saldo * 0.10;
  document.getElementById('resultado-credito').textContent = `Saldo médio: R$ ${saldo.toFixed(2)} | Crédito: R$ ${credito.toFixed(2)}`;
}

function calcularLanche() {
  const cod = parseInt(document.getElementById('codigo').value);
  const qtd = parseInt(document.getElementById('quantidade').value);
  let preco = 0;
  if (cod === 100) preco = 1.20;
  else if (cod === 101) preco = 1.30;
  else if (cod === 102) preco = 1.50;
  else if (cod === 103) preco = 1.20;
  else if (cod === 104) preco = 1.70;
  else if (cod === 105) preco = 2.20;
  else if (cod === 106) preco = 1.00;
  else {
    document.getElementById('resultado-lanche').textContent = 'Código inválido';
    return;
  }
  document.getElementById('resultado-lanche').textContent = `Total: R$ ${(preco * qtd).toFixed(2)}`;
}

function calcularVenda() {
  const preco = parseFloat(document.getElementById('preco').value);
  const cond = document.getElementById('condicao').value.toLowerCase();
  let total = preco;
  if (cond === 'a') total = preco * 0.9;
  else if (cond === 'b') total = preco * 0.85;
  else if (cond === 'c') total = preco;
  else if (cond === 'd') total = preco * 1.10;
  else {
    document.getElementById('resultado-venda').textContent = 'Condição inválida';
    return;
  }
  document.getElementById('resultado-venda').textContent = `Total a pagar: R$ ${total.toFixed(2)}`;
}

function calcularPagamento() {
  const nivel = parseInt(document.getElementById('nivel').value);
  const aulas = parseFloat(document.getElementById('aulas').value);
  let valorHora = 0;
  if (nivel === 1) valorHora = 12;
  else if (nivel === 2) valorHora = 17;
  else if (nivel === 3) valorHora = 25;
  else {
    document.getElementById('resultado-pagamento').textContent = 'Nível inválido';
    return;
  }
  const salario = valorHora * aulas * 4.5;
  document.getElementById('resultado-pagamento').textContent = `Salário: R$ ${salario.toFixed(2)}`;
}