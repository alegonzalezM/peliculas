
document.addEventListener('DOMContentLoaded', () => {
    // const loginForm = document.querySelector('form__iniciosesion');
    const login__button= document.getElementById("submit__button")
        // loginForm.addEventListener('submit', async (event) => {
            login__button.addEventListener('click', async(event) =>{
            event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional
          
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            console.log("Email: " + email + "Pass: " + password);
            async function obtenerPeliculas() {
        try {   
            const response = await fetch('http://localhost:8088/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
    
            const message = document.getElementById('message');
            if (response.ok) {
                message.textContent = 'Login exitoso!';
                // Redirigir al usuario a la página de inicio
                window.location.href = '/';
            }  } catch (error) {
                console.error('Ocurrió un error:', error);
                const errorData = await response.json();
                message.textContent = `Error: ${errorData.message}`;
            }}
        });
    });
    

//     form.addEventListener('submit', (event) => {
//         if (!validateForm()) {
//             console.log('Los datos no son válidos. Por favor, corrige los errores.');
//             // Evita que el formulario se envíe
//             event.preventDefault(); // Evita que el formulario se envíe si hay errores de validación
//         } else {
//             console.log('Inicio exitoso...');
//         }
//     });

//     // Función para validar todo el formulario
//     const validateForm = () => {
//         let isValid = true;
//         isValid = validateEmailField('email', 'El correo electrónico no es válido') && isValid;
//         isValid = validateField('password', 'La contraseña es obligatoria') && isValid;
//         return isValid;
//     };

//     // Función para validar un campo específico
//     const validateField = (fieldId, errorMessage) => {
//         // Obtiene el elemento del campo mediante su ID
//         const field = document.getElementById(fieldId);
//         // Obtiene el valor del campo y elimina los espacios en blanco al principio y al final
//         const value = field.value.trim();
//         // Si el valor del campo está vacío
//         if (value === '') {
//             // Establece un mensaje de error para el campo
//             setErrorFor(field, errorMessage);
//             // Devuelve false indicando que la validación ha fallado
//             return false;
//         } else {
//             // Si el valor del campo no está vacío, elimina cualquier mensaje de error anterior
//             setSuccessFor(field);
//             // Devuelve true indicando que la validación ha tenido éxito
//             return true;
//         }
//     };

//     // Función para validar el campo de correo electrónico
//     const validateEmailField = (fieldId, errorMessage) => {
//         const field = document.getElementById(fieldId);
//         const email = field.value.trim();
//         if (email === '') {
//             setErrorFor(field, 'El correo electrónico es obligatorio');
//             return false;
//         } else if (!isEmail(email)) {
//             setErrorFor(field, errorMessage);
//             return false;
//         } else {
//             // Si el campo de correo electrónico es válido, elimina cualquier mensaje de error anterior
//             setSuccessFor(field);
//             return true;
//         }
//     };

//     // Función para establecer un mensaje de error en un campo
//     const setErrorFor = (input, message) => {
//         // Encuentra el elemento padre del campo de entrada
//         const formControl = input.closest('div');
//         // Encuentra el elemento de texto de error dentro del elemento padre
//         const errorText = formControl.querySelector('.error-text');
//         // Agrega la clase de error al elemento padre para resaltar el campo
//         formControl.classList.add('error');
//         // Establece el texto del mensaje de error
//         errorText.innerText = message;
//         // Establece el foco en el campo de entrada para una corrección rápida
//         input.focus();
//     };

//     // Función para eliminar un mensaje de error de un campo
//     const setSuccessFor = (input) => {
//         // Encuentra el elemento padre del campo de entrada
//         const formControl = input.closest('div');
//         // Elimina la clase de error del elemento padre
//         formControl.classList.remove('error');
//         // Encuentra el elemento de texto de error dentro del elemento padre
//         const errorText = formControl.querySelector('.error-text');
//         // Establece el texto de error como vacío
//         errorText.innerText = '';
//     };

//     // Función para validar si una cadena es una dirección de correo electrónico válida
//     const isEmail = (email) => {
//         // Expresión regular para validar el formato de correo electrónico
//         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         // Verifica si el correo electrónico cumple con el formato
//         return re.test(email);
//     };
//      // Agrega eventos para borrar las clases de error cuando se completa el input o se presiona Tab
//      form.querySelectorAll('input').forEach(input => {
//         input.addEventListener('input', () => {
//             // Obtiene el valor del campo y elimina los espacios en blanco al principio y al final
//             const value = input.value.trim();
//             // Si el campo no está vacío, elimina cualquier mensaje de error
//             if (value !== '') {
//                 setSuccessFor(input);
//             }
//         });
//     });
//      // Agrega eventos para borrar las clases de error cuando se selecciona una opción del select
//      form.querySelectorAll('select').forEach(select => {
//         select.addEventListener('change', () => {
//             // Obtiene el valor seleccionado del campo de selección
//             const value = select.value;
//             // Si se selecciona una opción, elimina cualquier mensaje de error
//             if (value !== '') {
//                 setSuccessFor(select);
//             }
//         });
//     });

   
// });


