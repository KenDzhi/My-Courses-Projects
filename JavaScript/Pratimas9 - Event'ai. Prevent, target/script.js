// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('a.my-a').addEventListener('click', (event) => {
//         event.preventDefault();
//         console.log(event);
//     })
//     const formsAll = document.querySelectorAll('form')
//     for(let i = 0; i < formsAll.length; i++) {
//         formsAll[i].addEventListener('submit', (event) => {
//             event.preventDefault();
//             console.log(event)
//             console.log(event.submitter);

//             // console.log(event.target)            
//             // console.log('test', event.target.querySelector('input[name=fname]').value)            
//             // console.log(document.querySelector('input[name=fname]')) 

//             const name = document.querySelector('input[name=fname]').value            
//             const nameTarget = event.target.querySelector('input').value            
//             console.log('be target', name)
//             console.log('su target', nameTarget)
//         })
//     }
// })

