import PlaceHPosts from 'lib-json-placer';

const client = new PlaceHPosts({
    apiKey: 'YOUR_API_KEY',
    baseUrl: 'https://jsonplaceholder.typicode.com',
});


// console.log('Get all posts');
// client.GetAll().then((p) => {
//     console.log(p);
// });

// Get a post by id
console.log('Get a post by id');
client.GetById(1).then((p) => {
    console.log(p);
});


console.log('Create a post');
client.Create({
    title: 'The inmediate future',
    body: 'There will be a lot of decentralized applications in the near future but the most important one will be the one that will allow us to have a decentralized social network.',
    userId: 177,
}).then((p) => {

    console.log(`A new post has been created with id ${p.id} : `, { p });
});


