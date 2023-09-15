//const validate = new window.JustValidate('#form');
const validation = new JustValidate('#form');

validation
    .addField('#name', [

        {
            rule: 'required',
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'Недопустимый формат',
        },

    ])
    .addField('#tel', [
        {
            rule: 'required',
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'number',
            errorMessage: 'Недопустимый формат',
        },
       /* {
            rule: 'maxNumber',
            value: '',
            errorMessage: 'Недопустимый формат',
        }*/



    ]);

