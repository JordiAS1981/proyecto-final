const users = [{
    email: 'sunshine@mail.com', 
    password: '123',
    name: 'Sunshine'
}];

export function signIn({email, password}){
    const user = users.find((user)=> user.email === email && user.password === password);
    if (user === undefined) throw new Error();
        return user;
}