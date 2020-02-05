function hello(name) {
    let phrase = `Привет, ${name}!`;

    debugger;  // <-- здесь выполнение прерывается

    say(phrase);
}