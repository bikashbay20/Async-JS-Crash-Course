const posts = [
    { title: 'post one', body: 'This is post one' },
    { title: 'post two', body: 'This is post two' }
];
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, inedex) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            // const error = true;
            const error = false;

            if (!error) {
                resolve(); 
            } else {
                reject('Error:somthing went wrong');
            }
        }, 2000);
    });
}
// createPost({ title: 'Post three', body: 'This is post three' }).then(getPosts)
//     .then(getPosts)
//     .catch(err => console.log(err));

// Async / Await //
// async function init(){
// await createPost ({ title:'post three', body:'This is post three'});

// getPosts();
// }

// init();

// Async / Await / Fetch //

async function fetchUsers() {
const res = await fetch
('https://jsonplaceholder.typicode.com/users');

const data = await res.json();
console.log (data);
}

fetchUsers();

//   Promise All //
// const Promise1 = Promise.resolve('Hello world');
// const Promise2 = 10;
// const Promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'GoodBye'));
// const Promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
// Promise.all([Promise1, Promise2, Promise3, Promise4]).then(values => console.log(values));
