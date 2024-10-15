const btnSubmit = document.querySelector('.container1__formulario__submit__btn-submit');
const form = document.querySelector('.container1__formulario');
const camposDoForm = document.querySelectorAll('#input-form');

let listaInfosUsuario = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    listaInfosUsuario = {
        nome: e.target.elements['nome'].value,
        cpf: e.target.elements['cpf'].value,
        email: e.target.elements['email'].value,
        nascimento: e.target.elements['nascimento'].value,
        areas: e.target.elements['areas'].value,
        senhoridade: e.target.elements['senhoridade'].value
    }

    console.log(listaInfosUsuario)
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    sobrenome: {
        valueMissing: "O campo de sobrenome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um sobrenome válido.",
        tooShort: "Por favor, preencha um sobrenome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    nascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    areas: {
        valueMissing: 'Você deve escolher uma das areas antes de continuar.',
    },
    senhoridade: {
        valueMissing: 'Você deve escolher uma das opcões antes de continuar.',
    }
}

camposDoForm.forEach(campo => {
    campo.addEventListener('blur', () => verificaCampo(campo));
    campo.addEventListener('invalid', (e) => e.preventDefault());
});

function verificaCampo(campo) {
    const campoMsgError = document.querySelector(`#${campo.name}`).querySelector('#spanError')
    campoMsgError.innerHTML = '';
    campo.setCustomValidity('')

    validaCPF(campo);
    validaIdade(campo);
    GeraMsgError(campo, campoMsgError);
}

function validaCPF(campo) {
    if (campo.name == 'cpf' && campo.value != '') {
        const cpf = campo.value.replace(/\.|-/g, '');
        if (validaNumeroRepitidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
            campo.setCustomValidity('Este cpf não é válido');
        }


        function validaNumeroRepitidos(cpf) {
            const numerosRepetidos = [
                '00000000000',
                '11111111111',
                '22222222222',
                '33333333333',
                '44444444444',
                '55555555555',
                '66666666666',
                '77777777777',
                '88888888888',
                '99999999999'
            ];

            return numerosRepetidos.includes(cpf);
        }

        function validaPrimeiroDigito(cpf) {
            let soma = 0;
            let multiplicador = 10;

            for (let tamanho = 0; tamanho < 9; tamanho++) {
                soma += cpf[tamanho] * multiplicador;
                multiplicador--;
            }

            soma = (soma * 10) % 11;

            if (soma == 10 || soma == 1) {
                soma = 0;
            }

            return soma != cpf[9];
        }

        function validaSegundoDigito(cpf) {
            let soma = 0;
            let multiplicador = 11;

            for (let tamanho = 0; tamanho < 10; tamanho++) {
                soma += cpf[tamanho] * multiplicador;
                multiplicador--;
            }

            soma = (soma * 10) % 11;

            if (soma == 10 || soma == 1) {
                soma = 0;
            }

            return soma != cpf[10];
        }
    }
}

function validaIdade(campo) {
    if (campo.name == 'nascimento' && campo.value != '') {
        const dataNascimento = new Date(campo.value);
        validaIdade(dataNascimento);
        if (!validaIdade(dataNascimento)) {
            campo.setCustomValidity('O usuário não é maior de idade');
        }

        function validaIdade(data) {
            const dataAtual = new Date();
            const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
            return dataAtual >= dataMais18;
        }
    }
}

function GeraMsgError(campo, campoMsgError) {
    tiposDeErro.forEach(error => {
        if (campo.validity[error]) {
            msgError = mensagens[campo.name][error];
            campoMsgError.textContent = msgError;
        }
    });
}